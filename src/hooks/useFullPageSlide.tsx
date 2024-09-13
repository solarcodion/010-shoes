import { useCallback, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getNextLink, getPrevLink } from "utils";
import useStore from "./useStore";

const WHEEL_DELTA = 70;

const useFullPageSlide = (urls: string[]) => {
  const ref = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { store } = useStore();

  const handleScroll = useCallback(
    (event: any) => {
      if (ref.current) return;
      const delta = store.isTablet ? event.wheelDeltaX : event.wheelDeltaY;
      if (delta < -1 * WHEEL_DELTA) {
        ref.current = true;
        const nextLink = getNextLink(urls, location.pathname);
        if (nextLink) navigate(nextLink);
        setTimeout(() => (ref.current = false), 1000);
        return;
      }
      if (delta > WHEEL_DELTA) {
        ref.current = true;
        const nextLink = getPrevLink(urls, location.pathname);
        if (nextLink) navigate(nextLink);
        setTimeout(() => (ref.current = false), 1000);
        return;
      }
    },
    [location.pathname, navigate, store.isTablet, urls]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);
  return null;
};

export default useFullPageSlide;
