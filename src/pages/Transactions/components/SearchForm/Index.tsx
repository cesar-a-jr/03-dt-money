import { ResponsiveText, SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm({
  transactions,
  setFilteredTransactions,
}: {
  transactions: any
  setFilteredTransactions: any
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    const filteredTransactions = transactions.filter((transaction: any) => {
      const description = transaction.description
        .toLowerCase()
        .includes(data.query.toLowerCase())
      const category = transaction.category
        .toLowerCase()
        .includes(data.query.toLowerCase())
      return description || category
    })
    setFilteredTransactions(filteredTransactions)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={32} />
        <ResponsiveText>Buscar</ResponsiveText>
      </button>
    </SearchFormContainer>
  )
}
