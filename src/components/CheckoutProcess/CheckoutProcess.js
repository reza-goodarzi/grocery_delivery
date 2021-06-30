import styled from "styled-components";
import ContactNumber from "./ContactNumber/ContactNumber";
import DeliveryAddress from "./DeliveryAddress/DeliveryAddress";
import DeliverySchedule from "./DeliverySchedule/DeliverySchedule";
import PaymentOption from "./PaymentOption/PaymentOption";

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