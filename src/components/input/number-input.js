import React from 'react';
import BaseInput from './base-input';

const NUM_REGEXP = new RegExp('d+');

const NumberInput = (Component) => {
  return class extends React.Component {
    constructor() {
      super();

      this.onChange = this.onChange.bind(this);
    }

    validate(value) {
      return NUM_REGEXP.test(value);
    }

    onChange(event) {
      const { handleChange, name } = this.props;
      const { value } = event.target;

      handleChange(name, Number(value))
    }

    render() {
      return (
        <div className="grid-row grid-gap grid-col-12 margin-y-05">
          <Component
            { ...this.props }
            type='number'
            handleChange={this.onChange}
          />
        </div>
      )
    }
  }
};

export default NumberInput(BaseInput);
