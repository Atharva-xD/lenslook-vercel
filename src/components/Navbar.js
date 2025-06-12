import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CartOverlay from "./CartOverlay.js";
import WishlistOverlay from "./WishlistOverlay.js";
import SearchOverlay from "./SearchOverlay.js";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import Signin from "./SignIn.js";

// Constants
const ROUTE_TAB_MAP = {
  "/": "home",
  "/shop": "shop", 
  "/book": "book",
  "/about": "about",
  "/contact": "contact",
  "/admin": "admin"
};

const NAV_ITEMS = [
  { path: "/", label: "Home", tab: "home" },
  { path: "/shop", label: "Shop", tab: "shop" },
  { path: "/book", label: "Book Slot", tab: "book" },
  { path: "/about", label: "About", tab: "about" },
  { path: "/contact", label: "Contact", tab: "contact" }
];

const BODY_CLASSES = {
  WISHLIST: "wishlist-open",
  CART: "cart-open", 
  SIGNIN: "signin-open"
};

const Navbar = () => {
  // State management
  const [overlays, setOverlays] = useState({
    search: false,
    cart: false,
    wishlist: false,
    signIn: false
  });
  const [cartVisible, setCartVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  // Memoized values
  const isAdmin = useMemo(() => user?.isAdmin, [user?.isAdmin]);

  // Update active tab based on current route
  useEffect(() => {
    const newTab = ROUTE_TAB_MAP[location.pathname] || "home";
    setActiveTab(newTab);
  }, [location.pathname]);

  // Helper function to toggle body classes
  const toggleBodyClass = useCallback((className, shouldAdd) => {
    document.body.classList.toggle(className, shouldAdd);
  }, []);

  // Generic overlay toggle function
  const toggleOverlay = useCallback((overlayType, bodyClass) => {
    setOverlays(prev => {
      const newState = !prev[overlayType];
      if (bodyClass) {
        toggleBodyClass(bodyClass, newState);
      }
      return { ...prev, [overlayType]: newState };
    });
  }, [toggleBodyClass]);

  // Close overlay function
  const closeOverlay = useCallback((overlayType, bodyClass) => {
    setOverlays(prev => ({ ...prev, [overlayType]: false }));
    if (bodyClass) {
      toggleBodyClass(bodyClass, false);
    }
  }, [toggleBodyClass]);

  // Event handlers
  const handleSearchClick = useCallback(() => {
    toggleOverlay('search');
  }, [toggleOverlay]);

  const handleCartClick = useCallback(() => {
    toggleOverlay('cart', BODY_CLASSES.CART);
  }, [toggleOverlay]);

  const handleWishlistClick = useCallback(() => {
    toggleOverlay('wishlist', BODY_CLASSES.WISHLIST);
  }, [toggleOverlay]);

  const handleSignInClick = useCallback(() => {
    toggleOverlay('signIn', BODY_CLASSES.SIGNIN);
  }, [toggleOverlay]);

  const handleCancelClick = useCallback(() => {
    closeOverlay('search');
  }, [closeOverlay]);

  const handleCancelCart = useCallback(() => {
    closeOverlay('cart', BODY_CLASSES.CART);
  }, [closeOverlay]);

  const handleWishlistCancel = useCallback(() => {
    closeOverlay('wishlist', BODY_CLASSES.WISHLIST);
  }, [closeOverlay]);

  const handleCancelSignIn = useCallback(() => {
    closeOverlay('signIn', BODY_CLASSES.SIGNIN);
  }, [closeOverlay]);

  const handleLogin = useCallback((userData) => {
    setUser(userData);
    closeOverlay('signIn', BODY_CLASSES.SIGNIN);
  }, [closeOverlay]);

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
    // Close mobile navbar when a link is clicked
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler) {
        navbarToggler.click();
      }
    }
  }, []);

  const handleBrandClick = useCallback(() => {
    setActiveTab("home");
    // Close mobile navbar when brand is clicked
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler) {
        navbarToggler.click();
      }
    }
  }, []);

  const handleViewCartClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const toggleCartVisibility = useCallback(() => {
    setCartVisible(prev => !prev);
  }, []);

  // Animation variants
  const iconVariants = {
    hover: { scale: 1.1 }
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="container d-flex justify-content-between">
          <span>Free shipping for standard orders over ₹5000</span>
          <div>
            <a href="#">Help & FAQs</a>
            {user ? (
              <a>{user.email}</a>
            ) : (
              <a className="signIn-topbar" onClick={handleSignInClick}>
                Sign In
              </a>
            )}
            <a href="#">EN</a>
            <a href="#">India</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light main-navbar">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            onClick={handleBrandClick}
          >
            LensLook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NAV_ITEMS.map(({ path, label, tab }) => (
                <li key={tab} className="nav-item">
                  <Link
                    to={path}
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {isAdmin && (
                <li className="nav-item">
                  <Link
                    to="/admin"
                    className={`nav-link ${activeTab === "admin" ? "active" : ""}`}
                    onClick={() => handleTabClick("admin")}
                  >
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </div>
            <div className="navbar-icons">
              <motion.div 
                className="icon" 
                variants={iconVariants}
                whileHover="hover"
                onClick={handleSearchClick}
              >
                <FaSearch />
              </motion.div>
              <motion.div
                className="icon cart-icon"
                variants={iconVariants}
                whileHover="hover"
                onClick={handleCartClick}
              >
                <FaShoppingCart />
              </motion.div>
              <motion.div
                className="icon heart-icon"
                variants={iconVariants}
                whileHover="hover"
                onClick={handleWishlistClick}
              >
                <FaHeart />
              </motion.div>
            </div>
        </div>
      </nav>

      {/* Overlays */}
      {overlays.signIn && (
        <div className="signin-overlay">
          <Signin close={handleCancelSignIn} onLogin={handleLogin} />
        </div>
      )}

      {overlays.search && (  
        <SearchOverlay close={handleCancelClick}/>
      )}

      {overlays.cart && (
        <CartOverlay close={handleCancelCart}/>
      )}

      {overlays.wishlist && (
        <WishlistOverlay close={handleWishlistCancel}/>
      )}
    </>
  );
};

export default Navbar;