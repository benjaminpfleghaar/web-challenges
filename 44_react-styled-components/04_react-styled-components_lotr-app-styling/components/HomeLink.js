"use client";

import Link from "next/link";
import styled from "styled-components";

export default function HomeLink({ children, href, title }) {
	return (
		<StyledLink href={href} title={title}>
			{children}
		</StyledLink>
	);
}

const StyledLink = styled(Link)`
	padding-left: 24px;
	margin-bottom: 24px;
	display: inline-block;
	background: url("/icons/light/chevron-left.svg") center left no-repeat;

	@media (prefers-color-scheme: dark) {
		background-image: url("/icons/dark/chevron-left.svg");
	}
`;
