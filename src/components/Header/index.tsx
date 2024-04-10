import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/Logo.svg'
import { NewtransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transection</NewTransactionButton>
          </Dialog.Trigger>
         <NewtransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}