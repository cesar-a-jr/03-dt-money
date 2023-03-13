import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormater, priceFormater } from '../../utils/formater'
import { SearchForm } from './components/SearchForm/Index'
import { auth, db } from '../../services/firebaseconection'

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { onValue, ref } from '@firebase/database'
import { useEffect, useState } from 'react'

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

  useEffect(() => {
    const transactionsRef = ref(db, auth.currentUser?.uid)
    onValue(transactionsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const transactionsData = Object.entries(data).map(
          ([id, transaction]) => {
            return { id, ...transaction }
          },
        )
        setTransaction(transactionsData)
      }
    })
  }, [])

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction: Transaction) => {
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
      </TransactionsContainer>
    </div>
  )
}
