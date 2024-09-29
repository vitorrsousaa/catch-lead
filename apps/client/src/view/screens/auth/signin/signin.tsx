import { useAuth } from "@/hooks/auth";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Icon,
} from "@shared/ui";

export function Signin() {
	const { signInWithGoogle } = useAuth();

	return (
		<div className="flex justify-center mt-20 items-center space-y-4">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl text-center">Login</CardTitle>
				</CardHeader>
				<CardContent className="flex justify-center flex-col space-y-4">
					<Button
						className="w-full max-w-sm gap-2 h-14"
						variant="outline"
						onClick={signInWithGoogle}
					>
						<Icon name="envelope_closed" />
						Continue with Google
					</Button>
					<hr />
					<small className="text-center">
						By signing up, you agree to <strong>Terms of User</strong> and{" "}
						<strong>Privacy Policy</strong>
					</small>
				</CardContent>
			</Card>
		</div>
	);
}
