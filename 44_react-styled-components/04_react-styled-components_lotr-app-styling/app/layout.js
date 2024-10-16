import GlobalStyle from "@/libs/styles";
import StyledComponentsRegistry from "@/libs/registry";

export const metadata = {
	title: "The Lord of the Rings",
	description: "The Lord of the Rings is an epic high fantasy novel written by J.R.R. Tolkien",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>
					<GlobalStyle />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
