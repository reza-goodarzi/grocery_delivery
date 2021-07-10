import { Helmet } from "react-helmet";
import styled from "styled-components";
import Accordion from "../components/UI/Accordion";
import { faqData } from "../data/faqData";

function Faq() {
	return (
		<FaqStyle>
			<Helmet>
				<title>سوالات متداول</title>
			</Helmet>
			<h1>سوالات متداول</h1>
			{faqData.map((faq, index) => (
				<Accordion key={index} question={faq.question} answer={faq.answer} />
			))}
		</FaqStyle>
	);
}

export default Faq;

const FaqStyle = styled.section`
	padding: 2rem 20rem;
	height: 80vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	h1{
		margin: 3rem 0 5rem;
	}
`;