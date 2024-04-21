import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum([ 'income', 'outcome' ])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewtransactionModal() {
  const { control, register, handleSubmit, formState: { isSubmitting } } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  });

 const handleCreateNewTransaction = async (data: NewTransactionFormInputs) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(data);
};

  return (
  <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transection</Dialog.Title>
        <CloseButton>
          <X size={24}/>
        </CloseButton>
        <form action='' onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
          type="text" 
          placeholder='Description' 
          required 
          {...register('description')}
          />
          <input 
          type="number" 
          placeholder='Price' 
          required 
          {...register('price', { valueAsNumber: true })}
          />
          <input 
          type="text" 
          placeholder='Category' 
          required 
          {...register('category')}
          />

          <Controller
          control={control} 
          name="type"
          render={({ field }) => {
            return (
              <TransactionType onValueChange={field.onChange} value={field.value}>
            <TransactionTypeButton value="income" variant="income">
                <ArrowCircleUp size={24} />
              prohibited
              </TransactionTypeButton>
              <TransactionTypeButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24} />
              exit
            </TransactionTypeButton>
          </TransactionType>
            )
          }}
          />
          <button type="submit" disabled={isSubmitting}>
          cadastered
          </button>
        </form>
      </Content>
  </Dialog.Portal>
  )
}