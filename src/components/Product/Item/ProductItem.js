import { useState } from "react";
import styled from "styled-components";
import { DUMMY_DATA } from "../../../data/DummyData";
import ItemCard from "./ItemCard";
import ItemModal from "./ItemModal";

// extract items data in one array

const items = DUMMY_DATA.map((data) => {
	return data.items;
}).flat();

// TODO when we have 1 item change grid-template-columns to repeat(auto-fit, 20rem)
function ProductItem() {
	const [selectedItem, setSelectedItem] = useState(null);
	const [showModal, setShowModal] = useState(true);

	function setItem(id) {
		const newItem = items.filter(item => item.id === id)[0];
		setSelectedItem(newItem);
		setShowModal(true);
		// console.log(selectedItem);
	}

	return (
		<ProductItemStyle>
			{items.map(item => (
				<ItemCard
					onClick={() => { setItem(item.id); }}
					key={item.id}
					item={item}
					name={item.name}
					image={item.image}
					weight={item.weight}
					price={item.price}
					discount={item.discount}
				/>
			))}
			{showModal && selectedItem &&
				<ItemModal
					setShowModal={setShowModal}
					item={selectedItem}
					name={selectedItem.name}
					categoryName={selectedItem.categoryName}
					description={selectedItem.description}
					image={selectedItem.image}
					weight={selectedItem.weight}
					price={selectedItem.price}
					discount={selectedItem.discount}
				/>
			}
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
	max-height: 88vh;
`;
