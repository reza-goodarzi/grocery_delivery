import styled from "styled-components";

const Overlay = ({ children }) => {
	return (
		<OverlayStyle />
	);
};

export default Overlay;

const OverlayStyle = styled.div`
	background-color: #00000010;
	top: 0;
	left: 0;
	position: fixed;
	/* z-index: 3; */
	width: 100%;
	height: 100%;
`;
