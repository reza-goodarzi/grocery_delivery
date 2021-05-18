import styled from "styled-components";

export const Button = styled.button`
	&,
	&:link,
	&:visited{
      text-decoration: none;
      padding: 1.3rem 1.5rem;
      display: inline-block;
      border-radius: 5rem;
      transition: all 0.2s;
      position: relative;
      font-size: 1.6rem;
		background-color: transparent;
      //Change for the <button> element
      border: none;
      cursor: pointer;
	}

	&:hover{
		color: var(--color-primary);
	}
`;
