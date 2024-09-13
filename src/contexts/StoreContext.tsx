import {
  useCallback,
  useEffect,
  useState,
  createContext,
  useMemo,
} from "react";
import { SIZE } from "utils/device";

type StoreType = {
  isMobile: boolean;
  isTablet: boolean;
  viewPort: any;
};

type StoreContextType = {
  store: StoreType;
  setStore: any;
};

const initState: StoreType = {
  isMobile: false,
  isTablet: false,
  viewPort: {},
};

export const StoreContext = createContext<StoreContextType>({
  store: initState,
  setStore: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const [store, setStore] = useState(initState);

  const onResize = useCallback(() => {
    const width = window.innerWidth;
    const isMobile = width <= SIZE.mobile;
    const isTablet = width <= SIZE.tablet;
    const viewPort = { width, height: window.innerHeight };
    setStore((store) => ({
      ...store,
      viewPort,
      isMobile,
      isTablet,
    }));
  }, []);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onResize();
    }, 300);

    return () => clearTimeout(timer);
  }, [onResize]);

  const value = useMemo(() => ({ store, setStore }), [store]);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
