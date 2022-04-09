import { Navigate } from "react-router-dom";
import useGlobalState from "../state/useGlobalState";

const withAuth = (Component) => {
	return function WithAuth(props) {
		const { user } = useGlobalState();
		if (!user) {
			return <Navigate to="/auth" />;
		}
		return <Component {...props} />;
	};
};

const withoutAuth = (Component) => {
	return function WithAuth(props) {
		const { user } = useGlobalState();
		if (user) {
			return <Navigate to="/" />;
		}
		return <Component {...props} />;
	};
};

export { withAuth, withoutAuth };
