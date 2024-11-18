export enum AppRoutes{
    MAIN = "main",
    LOGIN = 'login',
    REGISTER = "register",
    ERROR = "error"
}

export const RoutePath: Record<AppRoutes,string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.ERROR]: "/*"
}
