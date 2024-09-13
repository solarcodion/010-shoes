import React, { useState, createContext, useCallback, useMemo } from "react";

type DialogContextType = {
  pushDialog: (dialog: any) => void;
  popDialog: () => void;
};

export const DialogContext = createContext<DialogContextType>({
  pushDialog: () => {},
  popDialog: () => {},
});

type Props = {
  children: React.ReactNode;
};
export const DialogProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [dialogs, setComponents] = useState<any>([]);

  const pushDialog = useCallback(
    (dialog: any) => {
      setComponents([...dialogs, dialog]);
    },
    [dialogs]
  );

  const popDialog = useCallback(() => {
    dialogs.pop();
    setComponents([...dialogs]);
  }, [dialogs]);

  const value = useMemo(
    () => ({ pushDialog, popDialog }),
    [pushDialog, popDialog]
  );

  return (
    <DialogContext.Provider value={value}>
      {children}
      {dialogs.map(([component, componentProps]: [any, any], index: number) => {
        return React.createElement(component, {
          popDialog,
          key: index,
          ...componentProps,
        });
      })}
    </DialogContext.Provider>
  );
};
