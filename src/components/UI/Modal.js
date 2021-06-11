import { createPortal } from "react-dom";
import styled from "styled-components";

const Overlay = ({ children, onClick }) => {
	return <OverlayStyle onClick={onClick}>{children}</OverlayStyle>;
};


const portalEl = document.getElementById('overlay');

function Modal({ children, onClick }) {

	const modal = (
		<Overlay onClick={onClick}>
			<ModalStyle>
				{children}
			</ModalStyle>
		</Overlay>
	);

	return (
		createPortal(modal, portalEl)
	);
}

export default Modal;

const OverlayStyle = styled.div`
	background-color: #00000010;
	top: 0;
	left: 0;
	position: fixed;
	z-index: 3;
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalStyle = styled.div`
	position: fixed;	
	border-radius: 5px;
	max-width: 65%;
`;
