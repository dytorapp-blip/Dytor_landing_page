	import type { Metadata } from 'next';

	export const metadata: Metadata = {
		title: 'Dytor | Professional Stage Timer & Event Management Software | Free Trial',
		description: 'Professional stage timer software with real-time sync, role-based access, and event management. Trusted by production teams worldwide. Start your free trial today.',
		keywords: [
			'stage timer software',
			'event management tool',
			'show control software',
			'production timer',
			'stage manager software',
			'event timer',
			'conference management',
			'live event timing',
			'professional timer',
			'stage control',
			'event scheduling',
			'production management',
			'live production',
			'stage management',
			'event coordination'
		],
		authors: [{ name: 'Dytor Team' }],
		creator: 'Dytor',
		publisher: 'Dytor',
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
	metadataBase: new URL('https://dytor.app/'),
		alternates: {
			canonical: 'https://dytor.app/',
		},
	openGraph: {
		type: 'website',
			locale: 'en_US',
			url: 'https://dytor.app/',
			siteName: 'Dytor',
			title: 'Dytor Pro - Professional Stage Timer & Event Management Software',
			description: 'Professional stage timer software with real-time sync, role-based access, and event management. Trusted by production teams worldwide.',
			images: [
				{
					url: '/assets/Dytor_logo_name.png',
					width: 1200,
					height: 630,
					alt: 'Dytor - Professional Stage Timer Software',
				}
			]
	},
	twitter: {
		card: 'summary_large_image',
			site: '@DytorApp',
			creator: '@DytorApp',
			title: 'Dytor | Professional Stage Timer & Event Management Software',
			description: 'Professional stage timer software with real-time sync, role-based access, and event management. Trusted by production teams worldwide.',
		images: ['/assets/Dytor_logo_name.png']
	},
	icons: {
		icon: [
			{ url: '/assets/Dytor_icon.ico' },
			{ url: '/assets/Dytor_icon_dark_mode.png', sizes: '32x32', type: 'image/png' }
		],
		apple: [{ url: '/assets/Dytor_Icon_light_mode.png', sizes: '180x180' }]
		},
		verification: {
			google: 'your-google-verification-code', // Add your actual verification code
		},
		category: 'technology',
		classification: 'Business Software',
		other: {
			'application-name': 'Dytor Pro',
			'msapplication-TileColor': '#111827',
			'theme-color': '#111827',
	}
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	themeColor: '#111827',
	colorScheme: 'dark',
};

import './globals.css';
import Script from 'next/script';
import { Navbar } from '@/components/blocks/navbar';
import { Footer } from '@/components/blocks/footer';
import GoogleAnalytics from './GoogleAnalytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				{/* SEO Meta Tags */}
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
				<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
				<meta name="googlebot" content="index, follow" />
				<meta name="bingbot" content="index, follow" />
				<meta name="author" content="Dytor Team" />
				<meta name="publisher" content="Dytor" />
				<meta name="copyright" content="Dytor" />
				<meta name="language" content="en" />
				<meta name="revisit-after" content="7 days" />
				<meta name="rating" content="general" />
				<meta name="distribution" content="global" />
				<meta name="geo.region" content="US" />
				<meta name="geo.placename" content="United States" />
				
				{/* App and PWA Meta Tags */}
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="application-name" content="Dytor Pro" />
				<meta name="apple-mobile-web-app-title" content="Dytor Pro" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-TileColor" content="#111827" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				
				{/* Canonical and Alternate URLs */}
				<link rel="canonical" href="https://dytor.app/" />
				<link rel="alternate" href="https://dytor.app/" hrefLang="en" />
				<link rel="alternate" href="https://dytor.app/" hrefLang="x-default" />
				
				{/* Favicons */}
				<link rel="icon" href="/assets/Dytor_Icon_light_mode.png" type="image/png" sizes="32x32" media="(prefers-color-scheme: light)" />
				<link rel="icon" href="/assets/Dytor_icon_dark_mode.png" type="image/png" sizes="32x32" media="(prefers-color-scheme: dark)" />
				<link rel="apple-touch-icon" href="/assets/Dytor_Icon_light_mode.png" sizes="180x180" />
				<link rel="shortcut icon" href="/assets/Dytor_icon.ico" />
				
				{/* Theme and Colors */}
				<meta name="theme-color" content="#111827" />
				<meta name="color-scheme" content="dark" />
				
				{/* Font Optimization */}
				<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
				<link rel="dns-prefetch" href="https://fonts.gstatic.com" />
				
				{/* Performance Hints */}
				<link rel="dns-prefetch" href="https://plausible.io" />
				<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
				{/* Enhanced Structured Data */}
				<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "SoftwareApplication",
					"name": "Dytor Pro | Professional Stage Timer & Event Management Software",
					"applicationCategory": "BusinessApplication",
					"operatingSystem": "Web, Windows, macOS, Linux",
					"description": "Professional stage timer software with real-time sync, role-based access, and event management. Trusted by production teams worldwide.",
					"offers": [
						{
							"@type": "Offer", 
							"name": "Starter Plan",
							"price": "0", 
							"priceCurrency": "USD",
							"description": "Free forever plan for small events"
						},
						{
							"@type": "Offer", 
							"name": "Pro Plan",
							"price": "12", 
							"priceCurrency": "USD",
							"priceSpecification": {
								"@type": "UnitPriceSpecification",
								"price": "12",
								"priceCurrency": "USD",
								"billingIncrement": "P1M"
							},
							"description": "Professional plan for production teams"
						}
					],
					"url": "https://dytor.app/",
					"image": "https://dytor.app/assets/Dytor_logo_name.png",
					"screenshot": "https://dytor.app/assets/hero section.png",
					"softwareVersion": "2.0",
					"datePublished": "2024-01-01",
					"dateModified": new Date().toISOString().split('T')[0],
					"author": {
						"@type": "Organization",
						"name": "Dytor",
						"url": "https://dytor.app"
					},
					"publisher": {
						"@type": "Organization",
						"name": "Dytor",
						"url": "https://dytor.app",
						"logo": {
							"@type": "ImageObject",
							"url": "https://dytor.app/assets/Dytor_logo_name.png"
						}
					},
					"aggregateRating": {
						"@type": "AggregateRating",
						"ratingValue": "4.8",
						"reviewCount": "127",
						"bestRating": "5",
						"worstRating": "1"
					},
					"featureList": [
						"Real-time timer synchronization",
						"Role-based access control",
						"Multi-device support",
						"Event scheduling automation",
						"Message broadcasting",
						"Professional display customization"
					],
					"softwareHelp": "https://dytor.app/docs",
					"supportUrl": "mailto:contact@dytor.app",
					"downloadUrl": "https://dytor.app/#demo",
					"installUrl": "https://dytor.app/#demo",
					"releaseNotes": "https://dytor.app/blog",
					"termsOfService": "https://dytor.app/terms",
					"privacyPolicy": "https://dytor.app/privacy"
				})}} />
				
				{/* Organization Schema */}
				<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					"name": "Dytor",
					"url": "https://dytor.app",
					"logo": "https://dytor.app/assets/Dytor_logo_name.png",
					"description": "Professional stage timer and event management software company",
					"foundingDate": "2024",
					"contactPoint": {
						"@type": "ContactPoint",
						"telephone": "+1-555-DYTOR",
						"contactType": "customer service",
						"email": "contact@dytor.app",
						"availableLanguage": "English"
					},
					"sameAs": [
						"https://twitter.com/DytorApp"
					],
					"address": {
						"@type": "PostalAddress",
						"addressCountry": "US"
					}
				})}} />
				
				{/* FAQ Schema */}
				<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					"mainEntity": [
						{
							"@type": "Question",
							"name": "Do I need to install anything?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "No installs. Controller, remotes, and displays run in the browser. Tauri desktop available for offline workflows."
							}
						},
						{
							"@type": "Question",
							"name": "How secure is remote access?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Remotes join with short‑lived QR tokens. Roles and explicit permissions ensure least‑privilege control."
							}
						},
						{
							"@type": "Question",
							"name": "Will the timer stay in sync?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Yes. DYTOR combines BroadcastChannel and WebSocket updates to maintain drift‑free synchronization."
							}
						},
						{
							"@type": "Question",
							"name": "Can I customize the display?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Choose solid colors, imagery, or video backgrounds with opacity control. Title and timer sizes are adjustable."
							}
						}
					]
				})}} />
			</head>
			<body className="min-h-screen">
				<Script
					src="https://plausible.io/js/script.js"
					data-domain="dytor.app"
					strategy="afterInteractive"
				/>
				<Navbar />
				{children}
				<Footer />
				<GoogleAnalytics />
			</body>
		</html>
	);
}


