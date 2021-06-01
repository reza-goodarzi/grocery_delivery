import styled from "styled-components";
import ProductCategories from "./ProductCategories";
import ProductItem from "./ProductItem";

function Product() {
	return (
		<ProductStyle>
			<ProductCategories />
			<ProductItem />
		</ProductStyle>
	);
}

export default Product;

const ProductStyle = styled.section`
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(15, 1fr);
`;
