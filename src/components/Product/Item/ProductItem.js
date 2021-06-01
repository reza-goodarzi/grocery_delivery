import styled from "styled-components";
import ItemCard from "./ItemCard";

function ProductItem() {
	return (
		<ProductItemStyle>
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
		</ProductItemStyle>
	);
}

export default ProductItem;

const ProductItemStyle = styled.div`
	grid-column: 4 / -1;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
	gap: 2rem;

	padding: 2rem;
`;
