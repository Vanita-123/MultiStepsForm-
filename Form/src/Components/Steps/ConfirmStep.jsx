import { useContext } from "react";
import { multiStepContext } from "../Common/multiStep";
function ConfirmStep() {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      <h1 style={{ color: "Green" }}>
        ThankYou ! Data is Successfully Submitted
      </h1>
      {finalData.map((data, id) => {
        return (
          <div key={id} className="Data">
            <ul>
              <h3>Name</h3>
              <li>{data.Name}</li>
              <h3>Gmail</h3>
              <li>{data.Gmail}</li>
              <h3>PhoneNo </h3>
              <li>{data.PhoneNo}</li>
              <h3>AddressLine1</h3>
              <li>{data.AddressLine1}</li>
              <h3>AddressLine2</h3>
              <li>{data.AddressLine2}</li>
              <h3>City</h3>
              <li>{data.City}</li>
              <h3>State</h3>
              <li>{data.State}</li>
              <h3>ZinCode</h3>
              <li>{data.ZinCode}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ConfirmStep;
