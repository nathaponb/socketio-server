import { Navigate, Outlet } from "react-router-dom";
import { IUserState } from "../features/user/userSlice";

interface Props {
  isAuth: IUserState;
}

function RouteGuard({ isAuth }: Props): JSX.Element {
  if (isAuth.loading) {
    return <p>Loading</p>;
  }

  return isAuth.data ? <Outlet /> : <Navigate to="/register" />;
}

export default RouteGuard;
