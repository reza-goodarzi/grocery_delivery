import styled from "styled-components";

export const Button = styled.button`
      text-decoration: none;
      padding: 1.3rem 1.5rem;
      border-radius: 5rem;
      transition: all 0.2s;
      position: relative;
      font-size: 1.6rem;
      background-color: transparent;
      //Change for the <button> element
      border: none;
      cursor: pointer;

	&:hover{
		color: var(--color-primary);
	}
`;

export const LinkButton = styled.a`
      &,
	&:link,
	&:visited{
            text-decoration: none;
            padding: 1.3rem 1.5rem;
            border-radius: 5rem;
            transition: all 0.2s;
            position: relative;
            font-size: 1.6rem;
	      background-color: transparent;
            //Change for the <button> element
            border: none;
            cursor: pointer;

            display: flex;
            align-items: center;

	}

`;


export const InputStyle = styled.input`

`;
