import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";

export default function HomePage() {
	return (
		<Container>
			<BoxWithClassName />
			<BoxWithClassName isBlack />
			<BoxWithStyledComponents />
			<BoxWithStyledComponents isBlack />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
`;
