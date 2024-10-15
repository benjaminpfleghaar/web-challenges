"use client";

import styled from "styled-components";

export default function Subline({ children }) {
	return <StyledHeadline>{children}</StyledHeadline>;
}

const StyledHeadline = styled.h2`
	margin-bottom: 24px;
	font: var(--font-headline-2);
`;
