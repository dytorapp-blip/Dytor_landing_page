export const metadata = {
	title: 'DYTOR — Stage Timer, Show Control & Remote Cues',
	description: 'DYTOR is a professional stage timer and show-control platform with remote dashboards, role-based permissions, multi-screen display, and schedule automation.',
	metadataBase: new URL('https://dytor.app/'),
	themeColor: '#111827',
	openGraph: {
		type: 'website',
		title: 'DYTOR — Stage Timer, Show Control & Remote Cues',
		description: 'Professional show control with precise timers, remote roles, multi-screen display, messages, schedules, and logs.',
		images: ['/assets/Dytor_logo_name.png']
	},
	twitter: {
		card: 'summary_large_image',
		title: 'DYTOR — Stage Timer, Show Control & Remote Cues',
		description: 'Professional show control with precise timers, remote roles, multi-screen display, messages, schedules, and logs.',
		images: ['/assets/Dytor_logo_name.png']
	},
	icons: {
		icon: [
			{ url: '/assets/Dytor_icon.ico' },
			{ url: '/assets/Dytor_icon_dark_mode.png', sizes: '32x32', type: 'image/png' }
		],
		apple: [{ url: '/assets/Dytor_Icon_light_mode.png', sizes: '180x180' }]
	}
};

import './globals.css';
import Script from 'next/script';
import { Navbar } from '@/components/blocks/navbar';
import { Footer } from '@/components/blocks/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="canonical" href="https://dytor.app/" />
				<link rel="icon" href="/assets/Dytor_Icon_light_mode.png" type="image/png" sizes="32x32" media="(prefers-color-scheme: light)" />
				<link rel="icon" href="/assets/Dytor_icon_dark_mode.png" type="image/png" sizes="32x32" media="(prefers-color-scheme: dark)" />
				<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="dns-prefetch" href="https://cdn.tailwindcss.com" />
				<script src="https://cdn.tailwindcss.com"></script>
				<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "SoftwareApplication",
					"name": "DYTOR",
					"applicationCategory": "BusinessApplication",
					"operatingSystem": "Web, Windows, macOS, Linux",
					"description": "Professional stage timer and show-control platform with remote dashboards, role-based permissions, multi-screen display, and schedule automation.",
					"offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"},
					"url": "https://dytor.app/",
					"image": "/assets/Dytor_logo_name.png"
				})}} />
			</head>
			<body className="min-h-screen">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}


