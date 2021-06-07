import styled from "styled-components";
import Overlay from "./Overlay";

function Modal({ children }) {
	return (
		<Overlay>
			<ModalStyle>
				{children}
			</ModalStyle>
		</Overlay>
	);
}

export default Modal;

const ModalStyle = styled.div`
	position: fixed;
	background-color: var(--color-white);
	padding: 5rem;
	border-radius: 5px;
`;
