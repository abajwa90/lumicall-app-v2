import type { Metadata } from "next";
import { Inclusive_Sans } from "next/font/google";
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { StreamVideoProvider } from "./providers/StreamVideoProvider";
import BlobAnimation from './animatedbg'; // Adjust the import path if necessary

const inter = Inclusive_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
	title: "LumiCall",
	description: "Video conferencing made simple",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
					<StreamVideoProvider>
						{/* Blob Animation Background */}
						<BlobAnimation />

						{/* Navigation Bar */}
						<nav className='w-full py-4 md:px-8 px-4 text-center flex items-center justify-between sticky top-0 bg-white z-10'>
							<div className='flex items-center justify-end gap-5'>
								{/*-- if user is signed out --*/}
								<SignedOut>
									<SignInButton mode='modal' />
								</SignedOut>
								{/*-- if user is signed in --*/}
								<SignedIn>
									<UserButton />
								</SignedIn>
							</div>
						</nav>

						{/* Main Content */}
						<div className="relative z-10">
							{children}
						</div>
					</StreamVideoProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
