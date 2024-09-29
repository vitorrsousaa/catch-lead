import { ROUTES } from "@/config/routes";
import { Navigate, Outlet } from "react-router-dom";

interface IAuthGuardProps {
	isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: IAuthGuardProps) {
	// const { signedIn } = useAuth();

	const signedIn = true;

	if (signedIn && !isPrivate) {
		return <Navigate to={ROUTES.DASHBOARD} replace />;
	}

	if (!signedIn && isPrivate) {
		return <Navigate to={ROUTES.SIGNIN} replace />;
	}

	return <Outlet />;
}
