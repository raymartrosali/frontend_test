import Select from "react-select";
import { useState, useEffect, useRef } from "react";

const Controls = ({setField, setOrder}) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company.name" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];



  const changeField = (selectedOption) => {
    setField(selectedOption.value);
     // created a function that will get the value of sort-field and put the value in a state using setField

    // used to call the function from the parent component
  }
 
  const changeOptions = (selectedOption) => {
    setOrder(selectedOption.value);
     // created a function that will get the value of sort-direction and put the value in a state using setOrder

     // used to call the function from the parent component
   
  }

 
  

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions} inputId="sort-field" className="input" onChange={changeField} />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={changeOptions}
        />
      </div>
    </div>
  );
};

export default Controls;
