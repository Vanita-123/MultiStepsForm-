import "./App.css";
import FirstStep from "./Components/Steps/FirstStep";
import SecondStep from "./Components/Steps/SecondStep";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContext } from "./Components/Common/multiStep";
import { useContext } from "react";
import ConfirmStep from "./Components/Steps/ConfirmStep";
function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  const showStep = (Step) => {
    switch (Step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
    }
  };

  return (
    <>
      <div className="App">
        <h1> Multi Step form</h1>
        <div className="App-header">
          <div className="center-stepper">
            <Stepper
              activeStep={currentStep - 1}
              orientation="horizontal">
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </div>
          <div>
            {showStep(currentStep)}
            {finalData.length > 0 ? <ConfirmStep /> : " "}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
