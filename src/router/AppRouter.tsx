import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./PublicRoutes/PublicRoutes";

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(publicRoutes).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div>
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
