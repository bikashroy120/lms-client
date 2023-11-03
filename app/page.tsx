"use client"

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";


export default function Home() {
  const [open,setOpen] = useState(false)
  const [activeItem,setActiveItem] = useState(0)
  const [route,setRoute] = useState("Login")
  return (
      <>
        <div>
          < Header open={open} setOpen={setOpen} route={route} setRoute={setRoute} activeItem={activeItem}/>
          <Hero/>
        </div>
      </>
  )
}
