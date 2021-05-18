import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyle = styled(NavLink)`
      padding: 5px 2rem;
	&.active,
      &:hover{
		color: var(--color-primary);
	}
`;

export const FontIcon = styled(FontAwesomeIcon)`
	margin-left: 5px;
`;
