import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { ref, set, push } from 'firebase/database'
import { auth, db } from '../../services/firebaseconection'

import {
  CloseModal,
  Content,
  Overlay,
  TransactionalType,
  TransactionalTypeButton,
} from './styles'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionsFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })
  const hora = Date.now()

  async function handleCreateNewTransaction(data: NewTransactionsFormInputs) {
    const transaction = ref(db, auth.currentUser?.uid)
    const transactionPush = push(transaction)

    set(transactionPush, {
      createdAt: hora,
      description: data.description,
      price: data.price,
      category: data.category,
      type: data.type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price')}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionalType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionalTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionalTypeButton>
                  <TransactionalTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionalTypeButton>
                </TransactionalType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>

        <CloseModal>
          <X size={24} />
        </CloseModal>
      </Content>
    </Dialog.Portal>
  )
}
