import styled from "styled-components";

function OrderReceived() {
	return (
		<Container>
			<BackHome>بازگشت به خانه</BackHome>

			<div>
				<div className="title">
					<h2>سفارش دریافت شد</h2>
					<p>متشکرم. سفارش شما دریافت شد</p>
				</div>
				<OrderReceivedStyle>
					<span className="order_number">
						<h3>شماره سفارش</h3>
						<p>1854</p>
					</span>
					<span className="date">
						<h3>تاریخ</h3>
						<p>1 مهر 1400</p>
					</span>
					<span className="total">
						<h3>جمع کل</h3>
						<p>530,000 تومان</p>
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
						<h3>تعداد اقلام:</h3>
						<p>6 مورد</p>
					</span>
					<span>
						<h3>زمان سفارش:</h3>
						<p>12 تیر 1400</p>
					</span>
					<span>
						<h3>زمان تحویل:</h3>
						<p>تحویل فوری در 90 دقیقه🔥</p>
					</span>
					<span>
						<h3>محل تحویل:</h3>
						<p>خیابان مدرس کوچه دوم</p>
					</span>
				</Details>
			</div>

			<div>
				<h2>هزینه کل</h2>
				<Details>
					<span>
						<h3>جمع ریز:</h3>
						<p>590,000 تومان</p>
					</span>
					<span>
						<h3>هزینه ارسال:</h3>
						<p>رایگان</p>
					</span>
					<span>
						<h3>تخفیف:</h3>
						<p>70,000 تومان</p>
					</span>
					<span>
						<h3>جمع کل:</h3>
						<p>530,000 تومان</p>
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
	/* box-shadow: 0 0 1rem #00000005; */
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
	margin-bottom: 5rem ;
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

const BackHome = styled.button`
	margin-right: 0;
	border: 1px solid #00000010;
	color: var(--color-gray);
	margin-bottom: 5rem ;
	padding: 1rem;

	transition: all .3s;

	&:hover{
		color: #fff;
		background-color: var(--color-primary);
	}
`;