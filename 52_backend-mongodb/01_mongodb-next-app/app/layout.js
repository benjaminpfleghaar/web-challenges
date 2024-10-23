import localFont from "next/font/local";

const geist = localFont({
	src: "./fonts/GeistVF.woff",
	weight: "100 900",
});

export const metadata = {
	title: "MongoDB Next.js App",
	description: "My first MongoDB Next.js App",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={geist.className}>{children}</body>
		</html>
	);
}
