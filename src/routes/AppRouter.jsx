import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import Onboarding from "../pages/Onboarding";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

/* ===================== */
/* ANIMATED ROUTES */
/* ===================== */

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Onboarding /></Page>} />
        <Route path="/login" element={<Page><Login /></Page>} />
        <Route path="/register" element={<Page><Register /></Page>} />
        <Route path="/home" element={<Page><Home /></Page>} />
        <Route path="/product/:id" element={<Page><Product /></Page>} />
        <Route path="/cart" element={<Page><Cart /></Page>} />
        <Route path="*" element={<Page><NotFound /></Page>} />
      </Routes>
    </AnimatePresence>
  );
}

/* ===================== */
/* PAGE WRAPPER */
/* ===================== */

function Page({ children }) {

  // 🔥 scroll top fix
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

/* ===================== */
/* MAIN ROUTER */
/* ===================== */

function AppRouter() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default AppRouter;