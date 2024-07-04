import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { multiStepContext } from "../Common/multiStep";
function SecondStep() {
  const { setcurrentStep, UserData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <>
      <div>
        <div>
          <TextField
            label="Address Line1"
            margin="normal"
            variant="outlined"
            color="secondary"
            value={UserData["AdressLine1"] || ""}
            onChange={(e) =>
              setUserData({ ...UserData, AdressLine1: e.target.value })
            }
          />
        </div>
        <div>
        <TextField
            label="Address Line2"
            margin="normal"
            variant="outlined"
            color="secondary"
            value={UserData["AdressLine2"] || ""}
            onChange={(e) =>
              setUserData({ ...UserData, AdressLine2: e.target.value })
            }
          />
        </div>
        <div>
          <TextField
            label="City"
            margin="normal"
            variant="outlined"
            color="secondary"
            required
            value={UserData["City"] || ""}
            onChange={(e) => setUserData({ ...UserData, City: e.target.value })}
          />
        </div>
        <div>
          <TextField
            label="State"
            margin="normal"
            variant="outlined"
            color="secondary"
            required
            value={UserData["State"] || ""}
            onChange={(e) =>
              setUserData({ ...UserData, State: e.target.value })
            }
          />
        </div>
        <div>
          <TextField
            label="ZinCode"
            margin="normal"
            variant="outlined"
            color="secondary"
            required
            value={UserData["ZinCode"] || ""}
            onChange={(e) =>
              setUserData({ ...UserData, ZinCode: e.target.value })
            }
          />
        </div>
        <Button style={{margin:"10px", padding:"10px"}}
          variant="contained"
          color="error"
          size="small"
          onClick={() => setcurrentStep(1)}
        >
          Back
        </Button>
        <Button style={{margin:"10px", padding:"10px"}}
          variant="contained"
          color="primary"
          size ="small"
          onClick={() => submitData(1)}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default SecondStep;
