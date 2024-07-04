import { multiStepContext } from "./multiStep";
import { useState } from "react";
import App from "../../App";
export const StepContext = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const [UserData, setUserData] = useState([]);
  const [finalData, setfinalData] = useState([]);
  function submitData() {
    setfinalData((finalData) => [...finalData, UserData]);
    setUserData("");
    setcurrentStep(3);
  }

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setcurrentStep,
          UserData,
          setUserData,
          finalData,
          setfinalData,
          submitData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </div>
  );
};
