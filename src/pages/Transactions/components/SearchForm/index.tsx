import { HiMiniDocumentMagnifyingGlass } from "react-icons/hi2";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="search for transaction" />

      <button type="submit">
        <HiMiniDocumentMagnifyingGlass size={20} />
        Search
        </button>
    </SearchFormContainer>
  )
}