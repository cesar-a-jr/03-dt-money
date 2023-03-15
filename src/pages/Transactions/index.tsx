import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { dateFormater, priceFormater } from '../../utils/formater'
import { SearchForm } from './components/SearchForm/Index'
import { auth, db } from '../../services/firebaseconection'

import {
  InfoDiv,
  PriceHighLight,
  TransactionsContainer,
  TransactionsResponsive,
  TransactionsTable,
} from './styles'
import { onValue, ref } from '@firebase/database'
import { useEffect, useState } from 'react'
import { CalendarBlank, TagSimple } from 'phosphor-react'

interface Transaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transactions() {
  const [transactions, setTransaction] = useState<Transaction[]>([])
  const [filteredTransactions, setFilteredTransactions] = useState(transactions)

  useEffect(() => {
    const transactionsRef = ref(db, auth.currentUser?.uid)
    onValue(transactionsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const transactionsData = Object.entries(data).map((entry) =>
          parseTransaction(entry),
        )
        console.log(transactionsData)
        setTransaction(transactionsData)
        setFilteredTransactions(transactionsData)
      }
    })
  }, [])

  function parseTransaction([id, transaction]: [string, unknown]): Transaction {
    const { description, type, price, category, createdAt } =
      transaction as Transaction
    return { id, description, type, price, category, createdAt } as Transaction
  }

  return (
    <div>
      <Header />
      <Summary transactions={transactions} />
      <SearchForm
        transactions={transactions}
        setFilteredTransactions={setFilteredTransactions}
      />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            {filteredTransactions.map((transaction: Transaction) => {
              const date = new Date(transaction.createdAt)
              const formattedDate = isNaN(date.getTime())
                ? ''
                : dateFormater.format(date)
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormater.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{formattedDate}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
        <TransactionsResponsive>
          {filteredTransactions.map((transaction: Transaction) => {
            const date = new Date(transaction.createdAt)
            const formattedDate = isNaN(date.getTime())
              ? ''
              : dateFormater.format(date)
            return (
              <div key={transaction.id}>
                <h1>{transaction.description}</h1>
                <PriceHighLight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormater.format(transaction.price)}
                </PriceHighLight>
                <InfoDiv>
                  <p>
                    <TagSimple size={15} />
                    {transaction.category}
                  </p>
                  <p>
                    <CalendarBlank size={15} />
                    {formattedDate}
                  </p>
                </InfoDiv>
              </div>
            )
          })}
        </TransactionsResponsive>
      </TransactionsContainer>
    </div>
  )
}
