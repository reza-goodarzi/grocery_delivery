import { Helmet } from "react-helmet";
import styled from "styled-components";

function NotFound() {
	return (
		<NotFoundStyle>
			<Helmet>
				<title>404 | صفحه مورد نظر پیدا نشد</title>
			</Helmet>
			<h1>404</h1>
			<h2>صفحه مورد نظر پیدا نشد!</h2>
		</NotFoundStyle>
	);
}

export default NotFound;

const NotFoundStyle = styled.section`
	width: 100%;
	height: 70vh;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1{
		font-size: 20rem;	
	}

	h2{
		color: var(--color-gray);
		margin: 0;
	}
`;
