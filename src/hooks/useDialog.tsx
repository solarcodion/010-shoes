import { useCallback, useContext } from "react";
import { DialogContext } from "../contexts/DialogContext";

export const useDialog = (component: any) => {
  const dialogContext = useContext(DialogContext) || {};
  const { pushDialog, popDialog } = dialogContext;

  const openDialog = useCallback(
    (props: any) => {
      return new Promise((resolve, reject) =>
        pushDialog([component, props, resolve, reject])
      );
    },
    [component, pushDialog]
  );

  const closeDialog = useCallback(() => {
    popDialog();
  }, [popDialog]);

  return { openDialog, closeDialog };
};

export default useDialog;
