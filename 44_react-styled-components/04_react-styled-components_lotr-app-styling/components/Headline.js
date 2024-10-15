"use client";

import styled from "styled-components";

export default function Headline({ children }) {
	return <StyledHeadline>{children}</StyledHeadline>;
}

const StyledHeadline = styled.h1`
	margin-bottom: 24px;
	font: var(--font-headline-1);
`;
