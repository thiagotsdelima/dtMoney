import { HiMiniDocumentMagnifyingGlass } from "react-icons/hi2";
import { SearchFormContainer } from "./styles";
import * as z  from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
const { register, handleSubmit, formState: {
  isSubmitting
}
} = useForm<SearchFormInputs>({
resolver: zodResolver(searchFormSchema),
})
async function handleSearchTransactions(data: SearchFormInputs) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(data);
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