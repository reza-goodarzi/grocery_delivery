import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontIcon, CircleButton } from "../../styles/style";

function Card({ title, subtitle, showButtons = true, selected }) {
	return (
		<CardStyle selectedCard={false}>
			<div>
				<h3>{title}</h3>
				<p>{subtitle}</p>
			</div>
			{showButtons &&
				<div className="buttons">
					<CircleButtonStyle bgColor='red' ><FontIcon icon={faTimes} /></CircleButtonStyle>
					<CircleButtonStyle bgColor='var(--color-primary)' ><FontIcon icon={faPen} /></CircleButtonStyle>
				</div>
			}
		</CardStyle>
	);
}

export default Card;

const CardStyle = styled.div.attrs(props => ({
	selectedCard: props.selectedCard
}))`
	background-color: ${props => props.selectedCard ? '#fff' : '#eee'};
	border: ${props => props.selectedCard ? 'solid 1px var(--color-primary)' : "solid 1px transparent"};
	padding: 1rem 2rem;
	width: 15rem;
	border-radius: 5px;


	position: relative;

	h3{
		font-size: 1.3rem;
		font-weight: bold;
	}

	p{
		color: #555;
		font-weight: 300;
	}

	.buttons{
		display: flex;
		position: absolute;
		left: 1rem;
		top: 1rem;

		opacity: 0;
		visibility: hidden;

		transition: all .3s ease;
	}

	&:hover .buttons{
		opacity: 1;
		visibility: visible;
	}

`;

const CircleButtonStyle = styled(CircleButton).attrs(props => ({
	bgColor: props.bgColor
}))`
	background-color: ${props => props.bgColor};
	color: #fff;
	border-radius: 50%;
	padding: 0;
	width: 2rem;
	height: 2rem;
	font-size: 1rem;
	margin: 2px;

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover{
		color: #fff
	}

	svg{
		margin-left: 0;
	}

`;
