import styled from 'styled-components';
import AddToCartButton from '../../UI/AddToCartButton';

function ItemCard({ name, image, weight, price, discount, onClick }) {

	return (
		<Card>
			<Image onClick={onClick}>
				{discount > 0 && <span>{discount * 100}%</span>}
				<img src={image} alt={name} />
			</Image>
			<Detail>
				<span className="name">{name}</span>
				<PriceGroup>
					<span className="weight">{weight >= 1 ? `${weight} کیلو گرم` : `${weight * 1000} گرم`}</span>
					<div className="price">
						{discount > 0 && <span className="without_discount">{price * 1000} ت</span>}
						<span className="with_discount">{discount > 0 ? ((1 - discount) * price * 1000).toFixed() : price * 1000} ت</span>
					</div>
				</PriceGroup>
				<AddToCartButton />
			</Detail>
		</Card>
	);
}

export default ItemCard;

const Card = styled.div`
	min-width: 20rem;
	height: fit-content;
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
		font-size: 2rem;
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
		position: relative;
		
		.with_discount{
			color: var(--color-primary);
			font-size: 1.6rem;
			font-weight: bold;
		}

		.without_discount{
			color: var(--color-secondary);
			font-size: 1.2rem;
			text-decoration: line-through;

			position: absolute;
			top: -2rem;
			left: 0;
		}
	}
`;