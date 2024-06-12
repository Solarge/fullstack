import { useState } from "react";
import "./index.css";
const messages =["Hello React", "React is a framework", "React Best"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePre=()=>{
    if(step > 1) setStep((s) => s - 1);
  }
  const handleNext=()=>{
    if(step < 3) {
      setStep((s)=>s + 1);
    }
  }
  return (
    <div>
      <button onClick= {() => setIsOpen((isOpen) =>!isOpen)}>{ isOpen ? "Hide" : "Show"} </button>
      { isOpen && (
        <div className="wrapper">
        <div className="numberWrapper">
          <div className={step>=1 ? "active": ""}>1</div>
          <div className={step>=2 ? "active": ""}>2</div>
          <div className={step>=3 ? "active": ""}>3</div>
        </div>
        <p>{step}:{messages[step - 1]}</p> {/* Fixed variable name 'messages' */}
        <div className="btnGroup">
          <button onClick={() => handlePre()}>Previous</button>
          <button onClick={()=> handleNext()}>Next</button>
        </div>
      </div>

      )}
    </div>
    
  );
}

export default App;
