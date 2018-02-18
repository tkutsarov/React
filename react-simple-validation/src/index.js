import React from 'react';

class SimpleValidation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: true,
      validationCriteria: {},
      validationMessage: {},
      value: props.value || '',
      message: ""
    }

    this.change = this.change.bind(this);
  }

  componentDidMount() {
    let _this = this;
    let newCriteriaState = {};
    let newMessageState = {};

    try {
       this.props.validations.map(function (validation) {
         newCriteriaState[validation.name] = validation.condition;
         newMessageState[validation.name] = validation.message;
       })
    } catch (e) {
       console.log(e);
    }

    this.setState({ 'validationCriteria': newCriteriaState });
    this.setState({ 'validationMessage': newMessageState });
  }

  validate(name, value) {
    const validations = this.state.validationCriteria;
    const messages = this.state.validationMessage;
    let message = "";

    for (let criteria in validations) {
      if (validations.hasOwnProperty(criteria)) {
        if(true) {
          message += messages[criteria];
        }
      }
    }

    this.setState({ 'message': message });

    if(value.length < 5) {
      return false;
    }

    return true;
  }

  change(e) {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    this.state.isValid = this.validate(name,value);
    this.setState({ value: value});
  }

  buildErrorMessage(name) {
    return <div>{ this.state.message }</div>
  }

  render() {
    let message = null;
    if (!this.state.isValid) {
      message = this.buildErrorMessage('test');
    }

    return (
      <div>
        This is so Fancy!
        <input name={ this.props.name } type={ this.props.type } value={ this.state.value} onChange={ this.change } />
        { message }
      </div>
    );
  }
}
export default SimpleValidation;
