import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Input,
	Label,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Switch,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@shared/ui";
import { useState } from "react";

export function Settings() {
	// const { theme, setTheme } = useTheme()
	const [emailNotifications, setEmailNotifications] = useState(true);
	const [pushNotifications, setPushNotifications] = useState(true);

	const handleSaveProfile = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send this data to your backend
		console.log("Profile saved");
	};

	const handleChangePassword = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send this data to your backend
		console.log("Password changed");
	};

	return (
		<div className="container mx-auto p-4">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Settings</CardTitle>
					<CardDescription>
						Manage your account settings and preferences
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Tabs defaultValue="profile">
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="profile">Profile</TabsTrigger>
							<TabsTrigger value="account">Account</TabsTrigger>
							<TabsTrigger value="notifications">Notifications</TabsTrigger>
						</TabsList>
						<TabsContent value="profile">
							<form onSubmit={handleSaveProfile}>
								<div className="space-y-4">
									<div className="space-y-2">
										<Label htmlFor="name">Name</Label>
										<Input id="name" placeholder="John Doe" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">Email</Label>
										<Input
											id="email"
											type="email"
											placeholder="john@example.com"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="nickname">Nickname</Label>
										<Input
											id="nickname"
											placeholder="Define what your nickname"
										/>
									</div>
									<Button type="submit">Save Profile</Button>
								</div>
							</form>
						</TabsContent>
						<TabsContent value="account">
							<div className="space-y-4">
								<div className="space-y-2">
									<Label>Theme</Label>
									<span>add way to change theme</span>
									{/* <RadioGroup defaultValue={theme} onValueChange={(value) => setTheme(value)}>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="light" id="light" />
											<Label htmlFor="light"><Sun className="h-4 w-4 mr-2" />Light</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="dark" id="dark" />
											<Label htmlFor="dark"><Moon className="h-4 w-4 mr-2" />Dark</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="system" id="system" />
											<Label htmlFor="system">System</Label>
										</div>
									</RadioGroup> */}
								</div>
								<div className="space-y-2">
									<Label>Language</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="Select Language" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="en">English</SelectItem>
											<SelectItem value="es">Español</SelectItem>
											<SelectItem value="fr">Français</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<form onSubmit={handleChangePassword} className="space-y-4">
									<div className="space-y-2">
										<Label htmlFor="current-password">Current Password</Label>
										<Input id="current-password" type="password" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="new-password">New Password</Label>
										<Input id="new-password" type="password" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="confirm-password">
											Confirm New Password
										</Label>
										<Input id="confirm-password" type="password" />
									</div>
									<Button type="submit">Change Password</Button>
								</form>
							</div>
						</TabsContent>
						<TabsContent value="notifications">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label htmlFor="email-notifications">
											Email Notifications
										</Label>
										<p className="text-sm text-muted-foreground">
											Receive email notifications about your account activity
										</p>
									</div>
									<Switch
										id="email-notifications"
										checked={emailNotifications}
										onCheckedChange={setEmailNotifications}
									/>
								</div>
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label htmlFor="push-notifications">
											Push Notifications
										</Label>
										<p className="text-sm text-muted-foreground">
											Receive push notifications about your account activity
										</p>
									</div>
									<Switch
										id="push-notifications"
										checked={pushNotifications}
										onCheckedChange={setPushNotifications}
									/>
								</div>
								<div className="space-y-2">
									<Label>Notification Frequency</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="Select Frequency" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="realtime">Real-time</SelectItem>
											<SelectItem value="daily">Daily Digest</SelectItem>
											<SelectItem value="weekly">Weekly Summary</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</div>
	);
}
