import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setDiscount } from "../../store/cartSlice";
import { offersData } from '../../data/offersData';


const VoucherButton = () => {
	const [showCouponInput, setShowCouponInput] = useState(false);
	const [couponApplied, setCouponApplied] = useState(false);
	const [message, setMessage] = useState('');
	const inputRef = useRef();
	const dispatch = useDispatch();

	function calculateDiscount() {
		if (inputRef.current.value === '') {
			setMessage('کوپن خود را وارد کنید');
			return;
		};

		const data = offersData.find(offer => offer.coupon === inputRef.current.value);

		if (!data) {
			setMessage('کوپن نامعتبر است');
			return;
		};

		dispatch(setDiscount(data.discount));
		setCouponApplied(true);
		setMessage(data.coupon);
	}
	console.log(message);


	return (
		<>
			{!showCouponInput && !couponApplied &&
				<CouponInputBox>
					<input type="text" placeholder="کد تخفیف خود را وارد کنید" ref={inputRef} />
					<button onClick={calculateDiscount}>اعمال</button>
					<p>{message}</p>
				</CouponInputBox>
			}
			{showCouponInput &&
				<HaveCoupon onClick={() => setShowCouponInput(true)}>ایا کد تخفیف دارید؟</HaveCoupon>
			}

			{couponApplied && <Applied>کوپن اعمال شد <span>{message}</span></Applied>}
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
	flex-wrap: wrap;
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

		&:hover{
			color: var(--color-white);
		}
	}

	p{
		width: 100%;
		color: var(--color-red);
	}
`;

const Applied = styled.p`
	margin-bottom: 2rem;

	span{
		color: var(--color-primary);
		font-weight: bold;

	}
`;
