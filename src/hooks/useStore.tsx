import { useContext } from "react";
import { StoreContext } from "contexts/StoreContext";

export const useStore = () => {
  const { store, setStore } = useContext(StoreContext) || {};

  return { store: store || {}, setStore };
};

export default useStore;
