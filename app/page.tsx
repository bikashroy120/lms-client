"use client"

import { useState } from "react";
import Header from "./components/Header";


export default function Home() {
  const [open,setOpen] = useState(false)
  const [activeItem,setActiveItem] = useState(0)
  return (
      <>
        <div>
        < Header open={open} setOpen={setOpen} activeItem={activeItem}/>
        </div>
      </>
  )
}
