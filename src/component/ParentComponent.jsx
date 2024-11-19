// ParentComponent.js
import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
    const handleClick = () =>{
        console.log("Button clicked!");
    }
  return (
    <div className="box">
      <h4>ParentComponent</h4>
      <ChildComponent  handleClick ={handleClick} />
    </div>  
  );
};
