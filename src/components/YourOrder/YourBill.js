import styled from "styled-components";

function YourBill() {
	return (
		<YourBillStyle>
			<span className="sub_total">
				<p className="title">جمع ریز</p>
				<p className="price">720,000 ت</p>
			</span>
			<span className="delivery_fee">
				<p className="title">هزینه ارسال</p>
				<p className="price">0 ت</p>
			</span>
			<span className="discount">
				<p className="title">تخفیف</p>
				<p className="price">72,000 ت</p>
			</span>
			<span className="total">
				<p className="title">جمع کل</p>
				<p className="price">648,000 ت</p>
			</span>
		</YourBillStyle>
	);
}

export default YourBill;

const YourBillStyle = styled.div`

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