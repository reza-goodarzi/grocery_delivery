
import { faInfoCircle, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import tempImg from '../../assets/images/Items/item1.jpg';
import { FontIcon, XButton } from '../../styles/style';

const BasketItem = () => {
	return (
		<Item>
			<Numbers>
				<FontIconStyle icon={faPlus} />
				<span className="number">5</span>
				<FontIconStyle icon={faMinus} />
			</Numbers>
			<Image>
				<img src={tempImg} alt="item" />
			</Image>
			<Details>
				<span className="product-name">اسم محصولم حصولم حصول محصولم محصولم	</span>
				<span className="price">25000 تومان</span>
			</Details>
			<TotalPrice>50000 تومان</TotalPrice>
			<XButton>X</XButton>
		</Item>
	);
};

export default BasketItem;

const Item = styled.div`
	color: var(--color-black);
	font-size: 1.4rem;
	border-bottom: 1px solid #eee;
	height: 12rem;
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
	width: 8rem;
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
	width: 15rem;
	margin: 0 1rem;
	font-size: 1.3rem;

	.product-name{
		font-weight: bold;
	}

	.price{
		color: var(--color-primary)
	}
	
`;

const TotalPrice = styled.span`
	font-weight: 500;
	margin-right: 1rem
`;
