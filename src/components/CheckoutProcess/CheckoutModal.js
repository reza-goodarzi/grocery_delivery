import { useState } from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";

function CheckoutModal({ title, textButton = "ذخیره", children, onClick, onClose, }) {
	return (
		<Modal onClick={onClose}>
			<ModalStyle>
				<h3>{title}</h3>
				{children}
				<button onClick={onClick}>{textButton}</button>
			</ModalStyle>
		</Modal>
	);
}

export default CheckoutModal;

const ModalStyle = styled.div`
	width: 30rem;
	background-color: var(--color-white);
	padding: 2rem 4rem 4rem;
	border-radius: 5px;
	

	h3{
		font-size: 2rem;
		padding: 5px;
	}
	input, textarea{
		border: 1px solid #eee;
		margin-bottom: 2rem;
	}

	textarea{
		min-height: 17rem;
	}

	button{
		background-color: var(--color-primary);
		color: var(--color-white);
		width: 100%;
		
		
		&:hover{
			color: var(--color-white);
		}
	}
`;