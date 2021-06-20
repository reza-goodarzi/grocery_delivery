import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

const Overlay = ({ children, onClick }) => {
	return <OverlayStyle onClick={onClick}>{children}</OverlayStyle>;
};


const portalEl = document.getElementById('overlay');

function Modal({ children, onClick }) {

	const modal = (
		<>
			<Overlay onClick={onClick}>
			</Overlay>
			<ModalStyle>
				{children}
			</ModalStyle>
		</>
	);

	return (
		createPortal(modal, portalEl)
	);
}

export default Modal;

const OverlayStyle = styled.div`
	background-color: #00000030;
	top: 0;
	left: 0;
	position: fixed;
	z-index: 3;
	width: 100%;
	height: 100%;
`;

const showModal = keyframes`
	from{
		opacity: 0;
		transform: translate(-50%, -50%) scale(.8);
	}

	to{
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
	
`;

const ModalStyle = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;	
	transform: translate(-50%, -50%);
	border-radius: 5px;
	z-index: 5;
	animation: ${showModal} .15s linear forwards;
`;
