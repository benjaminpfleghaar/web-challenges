"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Pagination({ volumes, index }) {
	const prevVolume = volumes[index - 1];
	const nextVolume = volumes[index + 1];

	return (
		<StyledFooter>
			<StyledSectionPrev>
				{prevVolume && (
					<StyledLinkPrevLink href={`/${prevVolume.slug}`} title={prevVolume.title}>
						<StyledCaption>Previous Volume</StyledCaption>
						{prevVolume.title}
					</StyledLinkPrevLink>
				)}
			</StyledSectionPrev>
			<StyledSectionNext>
				{nextVolume && (
					<StyledLinkNextLink href={`/${nextVolume.slug}`} title={nextVolume.title}>
						<StyledCaption>Next Volume</StyledCaption>
						{nextVolume.title}
					</StyledLinkNextLink>
				)}
			</StyledSectionNext>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	display: flex;
`;
const StyledSectionPrev = styled.section`
	flex-basis: 100%;
`;
const StyledSectionNext = styled.section`
	display: flex;
	flex-basis: 100%;
	text-align: right;
	justify-content: flex-end;
`;
const StyledLinkPrevLink = styled(Link)`
	display: flex;
	padding-left: 32px;
	width: fit-content;
	flex-direction: column;
	font: var(--font-caption);
	background: url("/icons/light/arrow-left.svg") center left no-repeat;

	@media (prefers-color-scheme: dark) {
		background-image: url("/icons/dark/arrow-left.svg");
	}
`;
const StyledLinkNextLink = styled(Link)`
	display: flex;
	width: fit-content;
	padding-right: 32px;
	flex-direction: column;
	font: var(--font-caption);
	background: url("/icons/light/arrow-right.svg") center right no-repeat;

	@media (prefers-color-scheme: dark) {
		background-image: url("/icons/dark/arrow-right.svg");
	}
`;
const StyledCaption = styled.span`
	display: flex;
	flex-direction: column;
	font: var(--font-caption--italic);
`;
