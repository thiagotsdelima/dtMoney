import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() {
  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => {
        response.text().then(data => {
          console.log(data)
        })
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Website development</td>
            <td>
              <PriceHighlight variant="income">
                R$ 12.000,00
              </PriceHighlight>
           </td>
            <td>Sales</td>
            <td>13/02/2024</td>
          </tr>
          <tr>
            <td width="50%">Hamburger</td>
            <td>
              <PriceHighlight variant="outcome">
              - R$ 59,00
              </PriceHighlight>
            </td>
            <td>Food</td>
            <td>10/02/2024</td>
          </tr>
        </tbody>
      </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}