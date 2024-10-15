import GlobalStyle from "@/libs/styles";

export const metadata = {
	title: "The Lord of the Rings",
	description: "The Lord of the Rings is an epic high fantasy novel written by J.R.R. Tolkien",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<GlobalStyle />
				{children}
			</body>
		</html>
	);
}
