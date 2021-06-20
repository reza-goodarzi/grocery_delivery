import styled from "styled-components";

import Modal from "../../UI/Modal";
import pic from '../../../assets/images/products/fruits/fruit1.jpeg';
import pic1 from '../../../assets/images/products/fruits/fruit2.jpeg';
import pic2 from '../../../assets/images/products/fruits/fruit3.jpeg';
import pic3 from '../../../assets/images/products/fruits/fruit4.jpeg';
import pic4 from '../../../assets/images/products/fruits/fruit5.jpeg';
import AddToCartButton from "../../UI/AddToCartButton";

function ItemModal({ name, categoryName, description, image, weight, price, discount, setShowModal }) {

	return (
		<Modal onClick={() => setShowModal(false)}>
			<Container>
				<RightSide>
					{discount > 0 && <span>{discount * 100}%</span>}
					<Image src={image} alt="Pic" />
					<div className='thumb_image'>
						<img src={pic} alt="pic" />
						<img src={pic1} alt="pic" />
						<img src={pic2} alt="pic" />
						<img src={pic3} alt="pic" />
						<img src={pic4} alt="pic" />
					</div>
				</RightSide>
				<LeftSide>
					<h2>{name}</h2>
					<p className="weight">{weight >= 1 ? `${weight} کیلو گرم` : `${weight * 1000} گرم`}</p>
					<p className="description">{description}</p>
					<div className="category">
						<span>{categoryName}</span>
					</div>
					<div className="buy">
						<div className="price">
							<span className="with_discount">
								{discount > 0 ? ((1 - discount) * price * 1000).toFixed() : price * 1000} ت
							</span>
							{discount > 0 && <span className="without_discount">{price * 1000} ت</span>}
						</div>
						<AddToCartButton />
					</div>
				</LeftSide>
			</Container>
		</Modal>
	);
}

export default ItemModal;

const Image = styled.img`
	width: 70%;
`;

const Container = styled.div`
	background-color: #fff;
	display: flex ;
	padding: 5rem 7rem;
	width: 75rem;
`;

const RightSide = styled.div`
	width: 50%;

	span{
		position: absolute;
		top: 5rem;
		right: 6rem;

		background-color: var(--color-secondary);
		padding: 3px 10px;
		border-radius: 12px;
		color: var(--color-white);
		font-weight: bold;
		font-size: 1.3rem;
	}

	.thumb_image{
		overflow: scroll;

		img{
			width: 7rem;
		}
	}

`;

const LeftSide = styled.div`
	width: 50%;

	h2{
		font-size: 2.2rem;
	}

	.weight{
		color: var(--color-gray);
		font-size: 1.2rem;
	}

	.description{
			line-height: 1.5;
			padding: 1rem 0;
			color: var(--color-gray);
	}

	.category{
		display: flex;
		font-size: 1.6rem;
		padding: 1rem 0;

		span{
			background-color: #eee;
			margin: 1rem 5px;
			border-radius: 5px;
			padding: 5px 2rem;
			cursor: pointer;
		}
	}

	.buy{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 2rem;

		.price{
			.with_discount{
				font-size: 2rem;
				font-weight: bold;
				color: var(--color-primary);
			}

			.without_discount{
				font-size: 1.5rem;
				text-decoration: line-through;
				color: var(--color-secondary);
				margin: 1rem;
			}
		}
	}
`;
