import {RouteProps} from "react-router-dom";
import {AppRoutes, RoutePath} from "./PublicRoutesConfig";
import {ErrorPage, LoginPage, MainPage, RegisterPage} from "./index";

export const publicRoutes: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage/>
    },
    [AppRoutes.REGISTER]: {
        path: RoutePath.register,
        element: <RegisterPage/>
    },
    [AppRoutes.ERROR]: {
        path: RoutePath.error,
        element: <ErrorPage/>
    }
}
