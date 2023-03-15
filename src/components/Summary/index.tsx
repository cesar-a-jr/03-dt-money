import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormater } from '../../utils/formater'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary(transactions: any) {
  const transaction = transactions.transactions

  const incomeTransactions = transaction.filter(
    (t: { type: string }) => t.type === 'income',
  )
  const outcomeTransactions = transaction.filter(
    (t: { type: string }) => t.type === 'outcome',
  )

  const totalIncome = incomeTransactions.reduce(
    (total: any, t: { price: any }) => total + t.price,
    0,
  )
  const totalOutcome = outcomeTransactions.reduce(
    (total: any, t: { price: any }) => total + t.price,
    0,
  )

  const total = totalIncome + totalOutcome

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormater.format(totalIncome)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormater.format(totalOutcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFF" />
        </header>
        <strong>{priceFormater.format(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
