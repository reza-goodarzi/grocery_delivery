import { createPortal } from "react-dom";
import styled from "styled-components";

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
	background-color: #00000010;
	top: 0;
	left: 0;
	position: fixed;
	z-index: 3;
	width: 100%;
	height: 100%;
`;

const ModalStyle = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;	
	transform: translate(-50%, -50%);
	border-radius: 5px;
	width: 65%;
	z-index: 5;

`;
