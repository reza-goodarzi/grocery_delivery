import styled from "styled-components";
import YourOrderList from "./YourOrderList";
import YourBill from "./YourBill";

function YourOrder() {
	return (
		<YourOrderStyled>
			<h2>سفارش های شما</h2>
			<YourOrderList />
			<YourBill />
		</YourOrderStyled>
	);
}

export default YourOrder;


const YourOrderStyled = styled.div`
	margin: 2rem;
	height: 100vh;
	min-width: 25rem;

	position: sticky;
	top: 0;
	
	margin-right: 3rem;
	h2{
		text-align: center;
	}
`;