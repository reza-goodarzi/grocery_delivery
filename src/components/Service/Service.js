import styled from 'styled-components';

import service1 from '../../assets/images/service/service1.png';
import service2 from '../../assets/images/service/service2.png';
import service3 from '../../assets/images/service/service3.png';

const Service = () => {
	return (
		<Container>
			<Image src={service1} alt="Service 1" />
			<Image src={service2} alt="Service 2" />
			<Image src={service3} alt="Service 3" />
		</Container>
	);
};

export default Service;

const Container = styled.section`
	padding: 5rem;
	display: flex;
	justify-content: center;
	overflow-x: scroll;
	background-color: #fff;
	border-bottom: 1px solid #f1f1f1;
`;

const Image = styled.img`
	width: 32%;
	margin: 1rem;
`;
