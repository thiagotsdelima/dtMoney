import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum([ 'income', 'outcome' ])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewtransactionModal() {
  const { createTransaction } = useContext(TransactionsContext); 
  const { 
    control, 
    register, 
    handleSubmit, 
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  });

 const handleCreateNewTransaction = async (data: NewTransactionFormInputs) => {
   const { description, price, category, type } = data;
   await createTransaction({
     description,
     price,
     category,
     type,
   });
   reset();
};

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title> 
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
            render={({ field }) => (
              <TransactionType onValueChange={field.onChange} value={field.value}>
                <TransactionTypeButton value="income" variant="income">
                  <ArrowCircleUp size={24} />
                  Income
                </TransactionTypeButton>
                <TransactionTypeButton value="outcome" variant="outcome">
                  <ArrowCircleDown size={24} />
                  Outcome
                </TransactionTypeButton>
              </TransactionType>
            )}
          />
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
