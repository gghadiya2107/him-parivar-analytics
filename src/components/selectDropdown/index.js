import React from 'react';
import style from "./Dropdown.module.css"
import Select from 'react-select';

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '100%', // Set the width of the container
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999, // Ensure dropdown menu is on top of other elements
  }),
  // Add other styles as needed
};
const SelectDropdown = ({ options, value, onChange,icon, title ,requried,isMulti,topStyle={}, ...rest}) => {
  return (
    <div style={topStyle}>
    <p className={style.title}>{title}{requried && <span className="requried"> *</span>}</p>
    <div className={style.inputField}>
    <Select
        className="basic-single"
        styles={customStyles}
        // defaultValue={colourOptions[0]}
        // isDisabled={isDisabled}
        // isLoading={}
        isMulti={isMulti ? true : false}
        isClearable={true}
        isSearchable={true}
        placeholder="Select..." 
        {...rest}        
        options={options}
      />
    </div>
  </div>


   
  );
};

export default SelectDropdown;