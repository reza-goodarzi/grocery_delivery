import { AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import { categoryData } from "../../../data/categoryData";
import CategoryItem from "./CategoryItem";

function ProductCategories() {
	return (
		<AnimateSharedLayout >
			<ProductCategory >
				{categoryData.map(data => (
					<CategoryItem key={data.id}
						image={data.image}
						name={data.name}
						subCategories={data.subCategories}
					/>
				))}
			</ProductCategory>
		</AnimateSharedLayout>
	);
}

export default ProductCategories;

const ProductCategory = styled.div`
	background-color: #fff;
	grid-column: 1 / span 3;

	display: flex;
	flex-direction: column;
	padding: 4rem 3rem;
	overflow-y: scroll;
`;
