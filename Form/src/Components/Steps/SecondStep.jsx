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
            label="AddressLine1"
            margin="normal"
            variant="outlined"
            color="secondary"
            required
            value={UserData["AddressLine1"] || ""}
            onChange={(e) => setUserData({ ...UserData, AddressLine1: e.target.value })}/>
        </div>
        <div>
         <TextField
            label="AddressLine2"
            margin="normal"
            variant="outlined"
            color="secondary"
            
            value={UserData["AddressLine2"] || ""}
            onChange={(e) => setUserData({ ...UserData, AddressLine2: e.target.value })}/>

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
