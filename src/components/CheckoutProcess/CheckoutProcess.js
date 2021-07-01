import styled from "styled-components";
import DeliveryAddress from './DeliveryAddress';
import DeliverySchedule from "./DeliverySchedule";
import ContactNumber from "./ContactNumber";
import PaymentOption from "./PaymentOption";

function CheckoutProcess() {
	return (
		<CheckoutProcessStyled>
			<DeliveryAddress />
			<DeliverySchedule />
			<ContactNumber />
			<PaymentOption />
		</CheckoutProcessStyled>
	);
}

export default CheckoutProcess;

const CheckoutProcessStyled = styled.div`
	margin: 2rem;
`;