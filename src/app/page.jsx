import React from "react";
import { Analytics } from "@vercel/analytics/react"
import HomePage from "./Home";

function MainPage() {
  return (
   <>
    <Analytics/>
    <HomePage />
   </>
  );
}

export default MainPage;
