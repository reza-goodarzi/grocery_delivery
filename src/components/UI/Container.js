import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontIcon } from "../../styles/style";

function Container({ children, title, number, textButton, onClick }) {
	return (
		<ContainerStyle>
			<div className="header">
				<div className="title">
					{number && <span>{number}</span>}
					<h3>{title}</h3>
				</div>
				{textButton && <button onClick={onClick}><FontIcon icon={faPlus} /> {textButton}</button>}
			</div>
			<div className="body">
				{children}
			</div>
		</ContainerStyle>
	);
}

export default Container;

const ContainerStyle = styled.div`
	background-color: #fff;
	padding: 2rem;
	margin: 2rem 0;
	width: 65rem;
	
	box-shadow: var(--shadow-darker);

	.header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 1.8rem;

		.title{
			display: flex;
			align-items: center;

			span{
				background-color: var(--color-primary);
				border-radius: 50%;
				width: 3.5rem;
				height: 3.5rem;
				
				display: flex;
				justify-content: center;
				align-items: center;
				color: var(--color-white);
				margin-left: 1rem;
			}

			h3{
				font-weight: normal;
			}
		}

		button{
			color: var(--color-primary);
		}
	}

	.body{
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
	}
`;