import styled from "styled-components";
import Card from "../components/UI/Card";
import { offersData } from "../data/offersData";

function Offers() {
	return (
		<OffersStyle>
			<h1>🔥تخفیفات ویژه فروشگاه ما🔥</h1>
			{offersData.map(offer => (
				<Card
					title={offer.coupon}
					subtitle={offer.info}
					selected
					showButtons={false}
				/>
			))}
		</OffersStyle>
	);
}

export default Offers;

const OffersStyle = styled.section`
	display: flex;
	flex-wrap: wrap;
	padding: 5rem 20rem;
	justify-content: center;

	h1{
		width: 100%;
		text-align: center;
		margin-bottom: 5rem;
	}
`;