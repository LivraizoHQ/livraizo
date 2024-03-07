import * as React from "react";
import { AddOutline } from "@axazara/raiton-icons";

export interface FloatingButtonContextType {
  isFloatingButtonVisible?: boolean;
  FloatingButtonIcon?: any;
  floatingButtonPath?: string;
}
export interface MetaContextType {
  title: React.ReactNode;
  icon: React.ReactNode;
  floatingButton: FloatingButtonContextType;
}

interface MetaContextActionType {
  type: "SET_METADATA";
  payload: {
    title: React.ReactNode;
    icon: React.ReactNode;
    floatingButton?: FloatingButtonContextType;
  };
}

const defaultMetaContextValue = {
  title: "",
  icon: null,
  floatingButton: {
    isFloatingButtonVisible: true,
    FloatingButtonIcon: AddOutline,
    floatingButtonPath: "/funds",
  },
};
function appReducer(state: MetaContextType, action: MetaContextActionType) {
  switch (action.type) {
    case "SET_METADATA":
      return {
        ...state,
        title: action.payload.title,
        icon: action.payload.icon,
        floatingButton: action.payload.floatingButton
          ? {
              ...defaultMetaContextValue.floatingButton,
              ...action.payload.floatingButton,
            }
          : defaultMetaContextValue.floatingButton,
      };
    default:
      return state;
  }
}

const MetaContext = React.createContext<MetaContextType>(
  defaultMetaContextValue,
);

export const MetaDispatchContext =
  React.createContext<React.Dispatch<MetaContextActionType> | null>(null);

export function MetaContextProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const [appData, dispatch] = React.useReducer(
    appReducer,
    defaultMetaContextValue,
  );
  return (
    <MetaContext.Provider value={appData}>
      <MetaDispatchContext.Provider value={dispatch}>
        {children}
      </MetaDispatchContext.Provider>
    </MetaContext.Provider>
  );
}

export const useMetaContext = () => React.useContext(MetaContext);
export const useMetaDispatchContext = () =>
  React.useContext(MetaDispatchContext);
