import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    Landmark: true,
    buildingName: true,

    area: true,
  });
  const landmarkInputRef = useRef();
  const buildingNameRef = useRef();
  const areaInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const EnteredLandmark = landmarkInputRef.current.value;
    const EnteredBuildingName = buildingNameRef.current.value;
    const EnteredArea = areaInputRef.current.value;

    const enteredLandmarkIsValid = !isEmpty(EnteredLandmark);
    const enteredBuildingNameIsValid = !isEmpty(EnteredBuildingName);
    const enteredAreaIsValid = !isEmpty(EnteredArea);

    setFormInputsValidity({
      Landmark: enteredLandmarkIsValid,
      buildingName: enteredBuildingNameIsValid,
      area: enteredAreaIsValid,
    });

    const formIsValid =
      enteredLandmarkIsValid &&
      enteredBuildingNameIsValid &&
      enteredAreaIsValid;
    if (!formIsValid) {
      return;
    } else {
      props.onConfirm({
        Landmark: EnteredLandmark,
        "Building Name": EnteredBuildingName,

        Area: EnteredArea,
      });
    }
  };

  const landmarkControlClass = `${classes.control} ${
    formInputsValidity.Landmark ? "" : classes.invalid
  }`;
  const buildingNameControlClass = `${classes.control} ${
    formInputsValidity.buildingName ? "" : classes.invalid
  }`;

  const areaControlClass = `${classes.control} ${
    formInputsValidity.area ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={landmarkControlClass}>
        <label htmlFor="landmark">Landmark</label>
        <input type="text" id="landmark" ref={landmarkInputRef} />
        {!formInputsValidity.Landmark && <p>Please Enter the valid landmark</p>}
      </div>
      <div className={buildingNameControlClass}>
        <label htmlFor="buildingName">Building Name</label>
        <input type="text" id="buildingName" ref={buildingNameRef} />
        {!formInputsValidity.buildingName && (
          <p>Please Enter the valid building Name</p>
        )}
      </div>

      <div className={areaControlClass}>
        <label htmlFor="area">Area</label>
        <input type="text" id="area" ref={areaInputRef} />
        {!formInputsValidity.buildingName && <p>Please Enter the valid area</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
