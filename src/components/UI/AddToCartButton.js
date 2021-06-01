import { faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import { FontIcon } from "../../styles/style";

function AddToCartButton() {
	const [show, setShow] = useState(true);
	return (
		<AddToCart onClick={() => setShow(!show)}>
			{!show &&
				<Added>
					<FontIcon icon={faShoppingCart} />
					<span>افزودن به سبد</span>
				</Added>
			}
			{show &&
				<ChangeNumber>
					<FontIcon icon={faPlus} />
					<span className="number">1</span>
					<FontIcon icon={faMinus} />
				</ChangeNumber>
			}

		</AddToCart>
	);
}

export default AddToCartButton;

const AddToCart = styled.div`
	background-color: var(--color-primary);
	color: var(--color-white);
	border-radius: 3rem;
	font-size: 1.4rem;

	margin: 1rem 0;
`;

const Added = styled.button`
	color: inherit;
	font-size: inherit;
	padding: 1.5rem;


	width: 100%;
	display: flex;
	justify-content: center;

	&:hover{
		color: var(--color-white);
	}
`;

const ChangeNumber = styled.div`
	padding: 1.5rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.number{
		font-weight: bold;
	}

	svg{
		cursor: pointer;
		padding: 0 1rem;
	}
`;
