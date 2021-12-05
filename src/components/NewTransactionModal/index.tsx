import Container from './styles'
//import { Container, Content } from './styles'
import Modal from "react-modal";
interface NewTransactionModalProps{
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal(props: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <input placeholder="Categoria" />
                <button type="submit"></button>
            </Container>
        </Modal>
    )
}