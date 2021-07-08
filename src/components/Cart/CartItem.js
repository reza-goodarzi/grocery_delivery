import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addItemToCart, removeItemFromCart } from '../../store/cartSlice';
import { CircleButton, FontIcon } from '../../styles/style';

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<Item>
			<Numbers>
				<FontIconStyle icon={faPlus} onClick={() => dispatch(addItemToCart(item))} />
				<span className="number">{item.quantity}</span>
				<FontIconStyle icon={faMinus} onClick={() => dispatch(removeItemFromCart(item.id))} />
			</Numbers>
			<Image>
				<img src={item.image} alt={item.name} />
			</Image>
			<Details>
				<span className="product-name">{item.name}</span>
				<span className="price">{`${item.price * 1000} تومان`}</span>
			</Details>
			<TotalPrice>{`${item.totalPrice * 1000} تومان`}</TotalPrice>
			<CircleButton>X</CircleButton>
		</Item>
	);
};

export default CartItem;

const Item = styled.div`
	color: var(--color-black);
	font-size: 1.4rem;
	border-bottom: 1px solid #eee;
	height: 10rem;
	padding: 1rem 3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	`;

const Numbers = styled.div`
	background-color: #eee;
	height: 70%;
	padding: .7rem;
	border-radius: 1.3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	.number{
		/* margin: auto; */
		font-weight: bold;
	}
`;

const FontIconStyle = styled(FontIcon)`
	margin: 0;
	cursor: pointer;
	color: #777;
`;

const Image = styled.div`
	width: 10rem;
	display: flex;
	justify-content: center;

	img{
		width: 80%;
	}
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	height: 100%;
	width: 13rem;
	margin: 0 1rem;
	font-size: 1.3rem;

	.product-name{
		font-weight: bold;
		font-size: 1.6rem;
	}

	.price{
		color: var(--color-primary);
		font-size: 1.4rem;
	}
`;

const TotalPrice = styled.span`
	font-weight: 500;
	margin: 0 1rem;
	text-align: center;
`;