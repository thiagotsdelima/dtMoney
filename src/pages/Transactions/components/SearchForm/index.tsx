import { HiMiniDocumentMagnifyingGlass } from "react-icons/hi2";
import { SearchFormContainer } from "./styles";
import * as z  from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { memo } from "react";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext, 
    (context) => {
    return context.fetchTransactions
  })

const { register, handleSubmit, formState: {
  isSubmitting
}
} = useForm<SearchFormInputs>({
resolver: zodResolver(searchFormSchema),
})
async function handleSearchTransactions(data: SearchFormInputs) {
await fetchTransactions(data.query)
}

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
      type="text" 
      placeholder="search for transaction" 
      {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <HiMiniDocumentMagnifyingGlass size={20} />
        Search
        </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent);