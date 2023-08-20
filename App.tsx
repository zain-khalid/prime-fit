import React from "react";
import { NativeBaseProvider } from "native-base";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}