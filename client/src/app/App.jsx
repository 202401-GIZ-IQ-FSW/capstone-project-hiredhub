import React from "react";
import NavBar from "@/components/NavBar/NavBar";

const App = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm lg:flex w-[85%] m-auto bg-white">
        <NavBar />
      </div>
    </main>
  );
};
export default App;
