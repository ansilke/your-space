import React, { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Home from "../pages/Home";
import CollectionDetails from "../pages/CollectionDetails";

function RouteHandler() {
  const location = useLocation();
  const navigate = useNavigate();
  const hasCheckedRefresh = useRef(false);

  useEffect(() => {
    // Check refresh only once when the app first loads
    if (hasCheckedRefresh.current) {
      return;
    }

    hasCheckedRefresh.current = true;

    const navigationEntry = performance.getEntriesByType("navigation")[0];

    if (
      navigationEntry?.type === "reload" &&
      location.pathname !== "/"
    ) {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/collections" element={<Home />} />
      <Route
        path="/collections/:id"
        element={<CollectionDetails />}
      />
    </Routes>
  );
}

function LayoutRoutes() {
  return (
    <BrowserRouter>
      <RouteHandler />
    </BrowserRouter>
  );
}

export default LayoutRoutes;