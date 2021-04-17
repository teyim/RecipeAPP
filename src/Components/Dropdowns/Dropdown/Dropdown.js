import React from 'react';
import Select from 'react-select';


const MyComponent = (props) => (
  <Select
    defaultValue='All'
    placeholder={props.placeholder}
    label="Single select"
    options={props.options}
    theme={theme => ({
      ...theme,
      borderRadius: 5,
      colors: {
        ...theme.colors,
        primary25: 'pink',
        primary: 'dangerLight',
      },
    })}
  />
)
export default MyComponent;
