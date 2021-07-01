import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { FontIcon } from "../../styles/style";

function Accordion({ question, answer }) {
	const [showAnswer, setShowAnswer] = useState(false);

	return (
		<AccordionStyle layout>
			<motion.button className="question" layout onClick={() => setShowAnswer(!showAnswer)}>
				<span>{question}</span>
				<FontIcon icon={showAnswer ? faMinus : faPlus} />
			</motion.button>
			{showAnswer &&
				<p className="answer">{answer}</p>
			}
		</AccordionStyle>
	);
}

export default Accordion;

const AccordionStyle = styled(motion.div)`
	padding: 1rem 2rem;
	width: 72rem;
	margin-bottom: 1rem;
	
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 7px #00000007;

	.question{
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.answer{
		padding: 0 2rem;
		color: var(--color-gray);
		line-height: 1.6;
	}
`;