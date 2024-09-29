import { Inter } from "next/font/google";
import "./styles.css";

const inter = Inter({
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-inter",
	subsets: ["latin"],
	fallback: ["sans-serif"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en" className={`${inter.variable} scroll-smooth dark`}>
			<body className="scrollbar min-h-screen">{children}</body>
		</html>
	);
}
