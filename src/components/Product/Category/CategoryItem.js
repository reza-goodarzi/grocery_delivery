import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { FontIcon } from "../../../styles/style";

function CategoryItem({ image, name, subCategories }) {
	const [showSubCategory, setShowSubCategory] = useState(false);

	return (
		<motion.div layout style={{ borderBottom: '1px solid #f1f1f1' }}>
			<Category layout>
				<Content>
					{image}
					<span>{name}</span>
				</Content>
				<Arrow do_rotation={showSubCategory} icon={faAngleLeft} onClick={() => setShowSubCategory(!showSubCategory)} />
			</Category>
			{showSubCategory &&
				<SubCategories>
					{subCategories.map(subCategory => (
						<button key={subCategory}>{subCategory}</button>
					))}
				</SubCategories>
			}
		</motion.div>
	);
}

export default CategoryItem;

const Category = styled(motion.button)`
	font-size: 1.5rem;
	width: 100%;
	padding: 1.5rem 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Content = styled.span`
	display: flex;
	align-items: center;

	svg{
		padding: 0 1rem;
	}
`;

const Arrow = styled(FontIcon).attrs(props => (
	{
		do_rotation: props.do_rotation ? '-90deg' : "0"
	}
))`
	font-size: 2.5rem;
	padding: 1rem 2rem;
	transition: transform .2s ease-in-out, color .2s ease;
	transform: rotateZ(${props => props.do_rotation});

	&:hover{
		color: #22cf5F;
	}
`;

const SubCategories = styled.div`
	padding: 0 1rem ;
	margin: 0 4rem 2rem 0;

	button{
		font-size: 1.3rem;
		width: 100%;
		padding: 1rem 0;
		font-weight: 200;
	}
`;