import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
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