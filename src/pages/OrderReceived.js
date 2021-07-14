import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

function OrderReceived() {
	const cart = useSelector(state => state.cart);

	const subTotal = cart.items.reduce((acc, item) => acc + item.totalPrice, 0) * 1000;
	const discount = subTotal - (subTotal * cart.discount);
	const total = subTotal - discount;

	// Get address and schedule and phone number client choose
	const address = JSON.parse(localStorage.getItem('addresses')).find(address => address.selected === true).address;
	const number = JSON.parse(localStorage.getItem('numbers')).find(number => number.selected === true).number;
	const schedule = JSON.parse(localStorage.getItem('schedule')).detail;

	return (
		<Container>
			<Helmet>
				<title>رسید خرید شما🧾</title>
			</Helmet>
			<BackHome to='/'>بازگشت به خانه</BackHome>

			<div>
				<div>
					<h2>سفارش دریافت شد</h2>
					<p>متشکرم. سفارش شما دریافت شد</p>
				</div>

				<OrderReceivedStyle>
					<span className="order_number">
						<h3>شماره سفارش</h3>
						<p>{(Math.random() * 10000).toFixed()}</p>
					</span>
					<span className="date">
						<h3>زمان سفارش</h3>
						<p>1 مهر 1400</p>
					</span>
					<span className="total">
						<h3>جمع کل</h3>
						<p>{total} تومان</p>
					</span>
					<span className="payment_method">
						<h3>روش پرداخت</h3>
						<p>پرداخت آنلاین</p>
					</span>
				</OrderReceivedStyle>
			</div>

			<div>
				<h2>جزئیات سفارش</h2>
				<Details>
					<span>
						<h3>تعداد آیتم ها:</h3>
						<p>{cart.totalQuantity} مورد</p>
					</span>
					<span>
						<h3>شماره تماس:</h3>
						<p>{number}</p>
					</span>
					<span>
						<h3>زمان تحویل:</h3>
						<p>{schedule}</p>
					</span>
					<span>
						<h3>محل تحویل:</h3>
						<p>{address}</p>
					</span>
				</Details>
			</div>

			<div>
				<h2>هزینه کل</h2>
				<Details>
					<span>
						<h3>جمع ریز:</h3>
						<p>{subTotal} تومان</p>
					</span>
					<span>
						<h3>هزینه ارسال:</h3>
						<p>رایگان</p>
					</span>
					<span>
						<h3>تخفیف:</h3>
						<p>{discount} تومان</p>
					</span>
					<span>
						<h3>جمع کل:</h3>
						<p>{total} تومان</p>
					</span>
				</Details>
			</div>

		</Container>
	);
}

export default OrderReceived;

const Container = styled.section`
	background-color: #fff;
	border-radius: 5px;
	border: 1px solid #00000010;
	box-shadow: 0 0 1rem #00000005;
	margin: 2rem 30rem;
	padding: 3rem 7rem;

	h2{
		font-size: 2rem;
	}

	p{
		color: var(--color-gray);
	}
`;

const OrderReceivedStyle = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 5rem;
	margin-top: 2rem;

	span{
		/* margin-left: 3rem; */
		flex: 15rem;
		h3{
			font-size: 1.6rem;
		}
		&:not(:last-child){
			border-left: 1px solid #00000010;
			margin-left: 3rem;
		}
	}
`;

const Details = styled.div`
	margin-bottom: 5rem;

	span{
		display: flex;
		align-items: center;

		h3{
			font-size: 1.6rem;
			width: 20%;
			display: flex;
		}
	}
`;

const BackHome = styled(Link)`
	&,&:link, &:visited{
		margin-right: 0;
		border: 1px solid #00000010;
		color: var(--color-gray);
		margin-bottom: 5rem ;
		padding: 1rem;
		border-radius: 5px;
		transition: all .3s;
	}


	&:hover{
		color: #fff;
		background-color: var(--color-primary);
	}
`;