import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, speed: 500, minimum: 0.2 });

const LoadingBar = () => {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Start progress bar on route change
    NProgress.start();
    setLoading(true);

    // Ensure full page load (images, fonts, etc.)
    const handleLoad = () => {
      setLoading(false);
      NProgress.done();
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      NProgress.done();
    };
  }, [location.pathname]); // Re-run when route changes

  return null;
};

export default LoadingBar;
