import styled from "styled-components";

const Overlay = ({ children, onClick }) => {
	return <OverlayStyle onClick={onClick}>{children}</OverlayStyle>;
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

	display: flex;
	justify-content: center;
	align-items: center;
`;
