import { multiStepContext } from "../Common/multiStep";
import { useContext } from "react";
import { TextField, Button } from "@mui/material";
function FirstStep() {
  const { setcurrentStep, UserData, setUserData } = useContext(multiStepContext);
  return (
    <div className="Step">
      <div>
        <TextField
          label="Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          required
          value={UserData["Name"] || ""}
          onChange={(e) => setUserData({ ...UserData, Name: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="Gmail"
          margin="normal"
          variant="outlined"
          color="secondary"
          required
          value={UserData["Gmail"] || ""}
          onChange={(e) => setUserData({ ...UserData, Gmail: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="PhoneNo"
          margin="normal"
          variant="outlined"
          color="secondary"
          required
          value={UserData["PhoneNo"] || ""}
          onChange={(e) =>
            setUserData({ ...UserData, PhoneNo: e.target.value })
          }
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setcurrentStep(2)}
        >
          {" "}
          Next
        </Button>
      </div>
    </div>
  );
}

export default FirstStep;
