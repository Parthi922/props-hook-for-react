import { useContext } from "react";
import { GrandContext } from "./GrandparentComponent";

// ChildComponent.js
export const ChildComponent = ({ handleClick}) => {
    const value = useContext(GrandContext);
    return (
      <div className="box">
        <h3>ChildComponent</h3>
        <p>{value}</p>
        <button onClick={handleClick}>Click</button>
      </div>
    );
  };
 
  
