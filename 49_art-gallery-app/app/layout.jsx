import Layout from "@/components/Layout";

export const metadata = {
	title: "Art Gallery",
	description: "Finest art from around the world",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Layout />
				<main>{children}</main>
			</body>
		</html>
	);
}
