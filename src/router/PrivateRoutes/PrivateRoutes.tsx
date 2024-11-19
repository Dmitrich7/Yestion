import {RouteProps} from "react-router-dom";
import {AppRoutes} from "./PrivateRoutesConfig";
import {RoutePath} from "./PrivateRoutesConfig";
import WorkspacePage from "../../pages/WorkspacePage/WorkspacePage";

export const privateRoutes: Record<AppRoutes, RouteProps> = {
    [AppRoutes.WORKSPACE]: {
        path: RoutePath.workspace,
        element: <WorkspacePage/>
    }
}
