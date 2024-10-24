import "./globals.css";
import localFont from "next/font/local";

const geist = localFont({
	src: "./fonts/GeistVF.woff",
	weight: "100 900",
});

export const metadata = {
	title: "AI Cover Letter Generator",
	description: "Get a personal cover letter made bei AI",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={geist.className}>{children}</body>
		</html>
	);
}
