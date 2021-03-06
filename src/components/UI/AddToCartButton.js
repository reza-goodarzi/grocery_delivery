import styled from "styled-components";
import { faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';

import { addItemToCart, removeItemFromCart } from '../../store/cartSlice';
import { FontIcon } from "../../styles/style";

function AddToCartButton({ item }) {
	const dispatch = useDispatch();
	const selectedItem = useSelector(state => state.cart.items.find(itm => itm.id === item.id));


	function addItem() {
		dispatch(
			addItemToCart({
				id: item.id,
				name: item.name,
				price: item.price - (item.discount * item.price),
				image: item.image,
			})
		);
	}

	function removeItem() {
		dispatch(removeItemFromCart(item.id));
	}

	return (
		<AddToCart >
			{!selectedItem &&
				<Added onClick={addItem}>
					<FontIcon icon={faShoppingCart} />
					<span>افزودن به سبد</span>
				</Added>
			}
			{selectedItem &&
				<ChangeNumber>
					<FontIcon icon={faPlus} onClick={addItem} />
					<span className="number">{selectedItem.quantity}</span>
					<FontIcon icon={faMinus} onClick={removeItem} />
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
		padding: 0 1rem;
	}

	svg{
		cursor: pointer;
		padding: 0 1rem;
		margin: 0;
	}
`;
