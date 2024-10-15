"use client";

import Image from "next/image";
import styled from "styled-components";

export default function Cover({ src, alt }) {
	return <StyledImage src={src} width={574} height={931} alt={alt} />;
}

const StyledImage = styled(Image)`
	box-shadow: var(--box-shadow-book);

	&:hover {
		box-shadow: var(--box-shadow-book--hover);
	}
`;
