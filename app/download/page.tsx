import { IconBrandApple, IconBrandUbuntu, IconBrandWindows } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";
// Background radial highlight added directly on the page - do not use the Glow component here

export default function DownloadPage() {
	return (
		<main className="bg-background text-foreground min-h-screen w-full">
			<Section className="py-28">
				<div className="max-w-container mx-auto text-center">
					  <h1 className="text-4xl font-semibold sm:text-6xl md:text-7xl bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent dark:from-white dark:to-zinc-500">Get DYTOR for your desktop</h1>
					<p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Choose your platform and download the installer to get started. DYTOR provides precision timing across platforms for production, broadcasting and events.</p>

					<div className="mt-12 relative">
												<div
													className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
													style={{
														background: `radial-gradient(circle at center, #0a57e6ff, transparent 70%)`,
													}}
												/>
												<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
						{/* Windows card */}
						<Card className="shadow-md border-[0.5px] border-border/30 dark:border-border/10 relative z-10">
							<CardHeader>
								<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
										<div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary dark:bg-primary/20">
											<IconBrandWindows className="size-8 text-primary-600 dark:text-primary-400" />
										</div>
										<CardTitle>Windows</CardTitle>
									</div>
								</div>
								<CardDescription>Get the full desktop app for Windows. Fully compatible with Windows 10/11.</CardDescription>
							</CardHeader>

							<CardContent>
								<p className="text-sm text-muted-foreground">64-bit installer for Windows. Includes automatic updates where available.</p>
							</CardContent>

							<CardFooter>
								<Button asChild size="lg" className="w-full" aria-label="Download DYTOR for Windows 64-bit">
									<a href="/downloads/DytorSetup.exe">Download 64-bit EXE</a>
								</Button>
							</CardFooter>
						</Card>

						{/* macOS card */}
						<Card className="shadow-md border-[0.5px] border-border/30 dark:border-border/10 relative z-10">
							<CardHeader>
								<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
										<div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary dark:bg-primary/20">
											<IconBrandApple className="size-8 text-primary-600 dark:text-primary-400" />
										</div>
										<CardTitle>macOS</CardTitle>
									</div>
									<Badge variant="outline" size="sm">Coming soon</Badge>
								</div>
								<CardDescription>Install as a DMG for macOS (Intel & Apple Silicon supported).</CardDescription>
							</CardHeader>

							<CardContent>
								<p className="text-sm text-muted-foreground">Download the DMG installer and drag the app to Applications to install.</p>
							</CardContent>

							<CardFooter>
								<Button size="lg" className="w-full" disabled aria-label="Download DYTOR for macOS" title="Coming soon">
									Download DMG
								</Button>
							</CardFooter>
						</Card>

						{/* Linux card */}
						<Card className="shadow-md border-[0.5px] border-border/30 dark:border-border/10 relative z-10">
							<CardHeader>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary dark:bg-primary/20">
																  <IconBrandUbuntu className="size-8 text-primary-600 dark:text-primary-400" />
										</div>
										<CardTitle>Linux</CardTitle>
									</div>
									<Badge variant="outline" size="sm">Coming soon</Badge>
								</div>
								<CardDescription>Install DYTOR on Debian/Ubuntu-based systems using the DEB package.</CardDescription>
							</CardHeader>

							<CardContent>
								<p className="text-sm text-muted-foreground">DEB package for Ubuntu, Debian and derivatives. Also converts to RPM via alien if needed.</p>
							</CardContent>

							<CardFooter>
								<Button size="lg" className="w-full" disabled aria-label="Download DYTOR for Linux .deb" title="Coming soon">
									Download .deb
								</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
			</Section>
		</main>
	);
}

