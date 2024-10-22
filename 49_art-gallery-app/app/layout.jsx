import "./globals.css";
import Layout from "@/components/Layout";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
	subsets: ["latin"],
});

export const metadata = {
	title: "Art Gallery",
	description: "Finest art from around the world",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={playfairDisplay.className}>
			<body>
				<Layout />
				<main>{children}</main>
			</body>
		</html>
	);
}
