"use client";

import Link from "next/link";
import Cover from "@/components/Cover";
import styled from "styled-components";

export default function Volumes({ volumes }) {
	return (
		<StyledUl>
			{volumes.map((volume) => (
				<li key={volume.slug}>
					<StyledLink href={`/${volume.slug}`} title={volume.title}>
						<Cover src={volume.cover} alt={volume.title} />
					</StyledLink>
					<StyledTitle>{volume.title}</StyledTitle>
				</li>
			))}
		</StyledUl>
	);
}

const StyledUl = styled.ul`
	gap: 32px;
	display: flex;
`;
const StyledLink = styled(Link)`
	display: block;
	margin-bottom: 8px;
`;
const StyledTitle = styled.span`
	font: var(--font-caption);
`;
