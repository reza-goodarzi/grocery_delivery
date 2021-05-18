import { useState } from 'react';
import styled from 'styled-components';
import avatarImage from '../../assets/images/avatar.jpg';
import { NavLinkStyle } from '../../styles/style';
import CardPopOver from '../UI/CardPopOver';

const options = [
	{
		route: '/profile',
		text: 'پروفایل',
	},
	{
		route: '/checkout',
		text: 'پرداخت',
	},
	{
		route: '/your-order',
		text: 'سفارش های شما',
	},
	{
		route: '/terms',
		text: 'شرایط استفاده از خدمات',
	},
	{
		route: '/logout',
		text: 'خروج از حساب',
	},
];

const Avatar = () => {
	const [showOptions, setShowOptions] = useState(false);

	// Show/hide Language List
	function toggleShowOptions() {
		setShowOptions(pervState => !pervState);
	}
	return (
		<AvatarStyle>
			<img src={avatarImage} alt="User Avatar" onClick={toggleShowOptions} />
			{showOptions &&
				<CardPopOver>
					{options.map(option => (
						<li key={option.route}>
							<NavLinkStyle activeClassName='active' to={option.route} onClick={toggleShowOptions}>
								{option.text}
							</NavLinkStyle>
						</li>
					))}
				</CardPopOver>
			}
		</AvatarStyle>
	)
}

export default Avatar;

const AvatarStyle = styled.div`
	position: relative; 
	img{
		cursor: pointer;
		border-radius: 50%;
		height: 4rem;
		width:4rem;
	}
`;
