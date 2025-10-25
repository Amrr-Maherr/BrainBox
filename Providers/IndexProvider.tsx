import { Provider } from "react-redux";
import store from "../ReduxStore/store";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function IndexProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
