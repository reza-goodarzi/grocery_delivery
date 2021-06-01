import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import pic from '../../../assets/images/products/fruits/fruit1.jpeg';
import { FontIcon } from '../../../styles/style';

function ItemCard() {
	return (
		<Card>
			<Image>
				<span>20%</span>
				<img src={pic} alt="fruit" />
			</Image>
			<Detail>
				<span className="name">لیمو</span>
				<PriceGroup>
					<span className="weight">500 گرم</span>
					<span className="price">2000 ت</span>
				</PriceGroup>
				<AddToCart>
					<FontIcon icon={faShoppingCart} />
					<span>افزودن به سبد</span>
				</AddToCart>
			</Detail>
		</Card>
	);
}

export default ItemCard;

const Card = styled.div`
	min-width: 20rem;
	border-radius: 5px;
	overflow: hidden;
	background-color: #fff;
	box-shadow: 0 0 2rem #eee;
`;

const Image = styled.div`
	position: relative;
	span{
		position: absolute;
		top: 1rem;
		left: 1rem;

		background-color: var(--color-secondary);
		padding: 3px 10px;
		border-radius: 12px;
		color: var(--color-white);
		font-weight: bold;
		font-size: 1.3rem;
	}

	img{
		width: 100%;
	}
`;

const Detail = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 3rem 2rem;

	&>*{
		margin-bottom: 1.5rem;

	}

	.name{
		font-size: 2.5rem;
		font-weight: bold;
		padding: 0 1rem;
	}
`;

const PriceGroup = styled.div`
	padding: 5px 1rem;

	display: flex;
	justify-content: space-between;

	.weight{
		font-size: 1.3rem;
		color: var(--color-gray);
		font-weight: 300;
	}

	.price{
		color: var(--color-primary);
		font-size: 1.6rem;
		font-weight: bold;
	}
`;

const AddToCart = styled.button`
	background-color: var(--color-primary);
	color: var(--color-white);
	border-radius: 3rem;

	margin: 1rem 0;
	display: flex;
	justify-content: center;

	transition: all .5s;

	&:hover{
		color: var(--color-white);
		background-color: var(--color-primary);
	}
`;