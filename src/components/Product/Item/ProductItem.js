import styled from "styled-components";
import { DUMMY_DATA } from "../../../data/DummyData";
import ItemCard from "./ItemCard";

// extract items data in one array

const items = DUMMY_DATA.map((data) => {
	return data.items;
}).flat();

// TODO when we have 1 item change grid-template-columns to repeat(auto-fit, 20rem)
function ProductItem() {
	return (
		<ProductItemStyle>
			{items.map(item => (
				<ItemCard
					key={Math.random() * 5000}
					name={item.name}
					image={item.image}
					weight={item.weight}
					price={item.price}
					discount={item.discount}
				/>
			))}
		</ProductItemStyle>
	);
}

export default ProductItem;

const ProductItemStyle = styled.div`
	grid-column: 4 / -1;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
	gap: 2rem;
	justify-items: start;

	padding: 2rem;

	overflow-y: scroll;
	max-height: 100vh;
`;
