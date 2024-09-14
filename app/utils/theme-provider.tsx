'use client'

import * as React from "react"
import {ThemeProvider as NextThemProvider} from "next-themes"
import type {ThemeProviderProps} from "next-themes/dist/types"
import { useGetLayoutQuery } from "@/redux/features/layout/layoutApi";


export function ThemeProvider({children,...props}:ThemeProviderProps){
    const { isLoading, data } = useGetLayoutQuery("type=Home");
    return <NextThemProvider {...props}>{children}</NextThemProvider>
}

