import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyle = styled(NavLink)`
      padding: 5px 2rem;
	&.active,
      &:hover{
		color: var(--color-primary);
	}
`;


export const InputStyle = styled.input`

`;
