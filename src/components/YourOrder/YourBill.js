import { useSelector } from "react-redux";
import styled from "styled-components";

function YourBill() {
	const cart = useSelector(state => state.cart);

	const subTotal = cart.items.reduce((acc, item) => acc + item.totalPrice, 0) * 1000;
	const discount = 2000; //Todo Temp
	const total = subTotal - discount;

	return (
		<YourBillStyle>
			<span className="sub_total">
				<p className="title">جمع ریز</p>
				<p className="price">{subTotal} تومان</p>
			</span>
			<span className="delivery_fee">
				<p className="title">هزینه ارسال</p>
				<p className="price">رایگان</p>
			</span>
			<span className="discount">
				<p className="title">تخفیف</p>
				<p className="price">{discount} ت</p>
			</span>
			<span className="total">
				<p className="title">جمع کل</p>
				<p className="price">{total} تومان</p>
			</span>
		</YourBillStyle>
	);
}

export default YourBill;

const YourBillStyle = styled.div`
	padding: 0 5px;
	span{
		display: flex;
		justify-content: space-between;
		color: var(--color-gray);

		p{
			margin: 7px 3px;
		}
	}

	.total{
		color: var(--color-black);
		margin-top: 1rem;

		p{
			font-weight: 500;
		}
	}

`;