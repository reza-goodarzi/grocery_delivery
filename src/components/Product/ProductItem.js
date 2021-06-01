import styled from "styled-components";

function ProductItem() {
	return (
		<ProductItemStyle>
			Item
		</ProductItemStyle>
	);
}

export default ProductItem;

const ProductItemStyle = styled.div`
	grid-column: 4 / -1;

`;
