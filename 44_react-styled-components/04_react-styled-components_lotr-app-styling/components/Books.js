"use client";

import Cover from "@/components/Cover";
import styled from "styled-components";

export default function Books({ volume }) {
	return (
		<StyledArticle $backgroundColorStart={volume.colorStart} $backgroundColorEnd={volume.colorEnd}>
			<StyledUl>
				{volume.books.map((book) => (
					<li key={book.ordinal}>
						<StyledCaption>{book.ordinal}</StyledCaption>
						<StyledTitle>{book.title}</StyledTitle>
					</li>
				))}
			</StyledUl>
			<Cover src={volume.cover} alt={volume.title} />
		</StyledArticle>
	);
}

const StyledArticle = styled.article`
	display: grid;
	padding: 48px;
	column-gap: 24px;
	align-items: center;
	margin-bottom: 24px;
	grid-template-columns: repeat(2, 1fr);
	background: linear-gradient(45deg, ${({ $backgroundColorStart }) => $backgroundColorStart} 0%, ${({ $backgroundColorEnd }) => $backgroundColorEnd} 100%);
`;
const StyledUl = styled.ul`
	gap: 24px;
	display: flex;
	flex-direction: column;
`;
const StyledCaption = styled.span`
	color: var(--color-clouds);
	font: var(--font-caption--italic);
`;
const StyledTitle = styled.h3`
	font: var(--font-title);
	color: var(--color-clouds);
`;
