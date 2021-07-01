import { useState } from "react";
import styled from "styled-components";

const VoucherButton = () => {
	const [showCouponInput, setShowCouponInput] = useState(false);
	return (
		<>
			{showCouponInput ?
				<CouponInputBox>
					<input type="text" placeholder="کد تخفیف خود را وارد کنید" />
					<button onClick={() => setShowCouponInput(false)}>اعمال</button>
				</CouponInputBox>
				:
				<HaveCoupon onClick={() => setShowCouponInput(true)}>ایا کد تخفیف دارید؟</HaveCoupon>
			}
		</>
	);
};

export default VoucherButton;

// const VoucherButtonStyle = styled.div``;

const HaveCoupon = styled.button`
	color: var(--color-primary);
	font-weight: 500;
	margin-bottom: 1rem;
`;

const CouponInputBox = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 2rem;
	margin-right: 1rem;

	input{
		width: 50%;
		background-color: var(--color-white);
		border: 1px solid #ddd;
	}

	button{
		background-color: var(--color-primary);
		color: var(--color-white);
		margin: 0 2rem;
		padding: 1rem 3rem;
	}
`;
