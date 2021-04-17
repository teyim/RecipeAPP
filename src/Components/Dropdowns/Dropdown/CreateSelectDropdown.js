import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';

export default class CreatableMulti extends Component{
  render() {
    return (
      <CreatableSelect
        isMulti
        onChange={this.handleChange}
        defaultValue='All'
        placeholder={this.props.placeholder}
        label="Single select"
        options={this.props.options}
        theme={theme => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: 'pink',
            primary: 'dangerLight',
           }
          })}
    />
    );
  }
}
