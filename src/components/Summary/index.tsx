import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, CurrencyCircleDollar } from 'phosphor-react';
import { PiArrowCircleDownThin } from "react-icons/pi";

export function Summary() {
return (
  <SummaryContainer>
  <SummaryCard>
    <header>
      <span>between</span>
      <ArrowCircleUp  size={32} color="#00b37e"/>
    </header>
    <strong>R$ 17.400,00</strong>
  </SummaryCard>
  <SummaryCard>
    <header>
      <span>exit</span>
      <PiArrowCircleDownThin size={32} color="#f75a68"/>
    </header>
    <strong>R$ 17.400,00</strong>
  </SummaryCard>
  <SummaryCard variant="green">
    <header>
      <span>total</span>
      <CurrencyCircleDollar  size={32} color="#fff"/>
    </header>
    <strong>R$ 17.400,00</strong>
  </SummaryCard>
</SummaryContainer>
)
}