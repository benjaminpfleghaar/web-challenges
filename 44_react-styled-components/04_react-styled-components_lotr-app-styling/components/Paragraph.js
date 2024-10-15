"use client";

import styled from "styled-components";

export default function Paragraph({ children }) {
	return <StyledP>{children}</StyledP>;
}

const StyledP = styled.p`
	margin-bottom: 24px;
	font: var(--font-body);
`;
