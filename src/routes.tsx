import App from "./App"
import Artifacts from "./pages/Artifacts"
import LandingPage from "./pages/LandingPage"
import Tour from "./pages/Tour"

export const routes = [
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/tour",
        element: <Tour />
    },
    {
        path: "/artifacts",
        element: <Artifacts />
    },
]
