import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CardPopOver = ({ children, setToHide }) => {
	const CardRef = useRef();

	useEffect(() => {
		// Hide Card when user click outside CardPopOver component
		function outsideClickHandler(event) {
			if (CardRef.current && !CardRef.current.contains(event.target)) {
				setToHide(false);
			}
		}

		document.addEventListener('mousedown', outsideClickHandler);

		return () => {
			document.removeEventListener('mousedown', outsideClickHandler);
		}
	}, [setToHide]);

	return (
		<Card ref={CardRef}>
			<List>
				{children}
			</List>
		</Card>
	)
}

export default CardPopOver;

const Card = styled.div`
	background-color: #fff;
	box-shadow: var(--shadow-light);
	margin: 2rem;
	padding-left: 2rem;
	border-radius: 5px;
	width: max-content;


	position: absolute;
	top: 100%;
	right: -20%;

	&::before{
		content: "";
   	position: absolute;
   	width: 0px;
   	height: 0px;
   	border-style: solid;
   	border-width: 0px 8px 9px;
   	border-color: transparent transparent rgb(255, 255, 255);
   	top: -8px;
   	right: 15px;
   	/* box-shadow: rgb(142 142 142 / 14%) -4px -4px 8px -3px; */
   	pointer-events: none;
	}
`;


const List = styled.ul`
	list-style: none;
	padding: 0;
`;
