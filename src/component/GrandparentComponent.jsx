// GrandparentComponent.js
import { createContext } from "react";
import { ParentComponent } from "./ParentComponent";

export const GrandContext = createContext();

export const GrandparentComponent = () => {
  const data = "Hello from Grandparent "; // This line remains but is unused.
  return (
    <div className="box">
      <h3>GrandparentComponent</h3>
      <GrandContext.Provider value={data}>
        <ParentComponent  /> 
      </GrandContext.Provider>
      
    </div>
  );
};
