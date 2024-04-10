import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewtransactionModal() {
  return (
  <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transection</Dialog.Title>
        <CloseButton>
          <X size={24}/>
        </CloseButton>
        <form action=''>
          <input type="text" placeholder='Description' required />
          <input type="number" placeholder='Price' required />
          <input type="text" placeholder='Category' required />

          <TransactionType>
            <TransactionTypeButton value="income" variant="income">
                <ArrowCircleUp size={24} />
              between
              </TransactionTypeButton>
              <TransactionTypeButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24} />
              exit
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">
          cadastered
          </button>
        </form>
      </Content>
  </Dialog.Portal>
  )
}