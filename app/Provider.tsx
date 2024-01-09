"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Custom from "./components/Custom";

interface ProviderProps {
  children: any;
}

export function Providers({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
