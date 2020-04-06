import React, { Component } from 'react';
import './Register.css';

export default class Register extends Component {
  state = {
    form: {
      username: {
        type: 'text',
        value: '',
        validator: {
          required: true,
          minLength: 8,
          maxLength: 15
        },
        error: {status: true, message: ''}
      },
      password: {
        type: 'password',
        value: '',
        validator: {
          required: true,
          minLength: 8,
          maxLength: 25
        },
        error: {status: true, message: ''}
      },
      email: {
        type: 'email',
        value: '',
        validator: {
          required: false,
        },
        error: {status: false, message: ''}
      },
    }
  }
  
  checkValidator = (value, rules) => {
    let error = false;
    let errorMessage = '';
    if(rules.required) {
      if(value.length === 0) {
        error = true;
        errorMessage = 'must be filled'
      }
    }

    if(!error && value.length < rules.minLength) {
      error = true;
      errorMessage = `must longer than ${rules.minLength} characters`
    }

    if(!error && value.length > rules.maxLength) {
    error = true;
    errorMessage = `must shorter than ${rules.maxLength} characters`
    }
    return {status: error, message: errorMessage}
  }

  getClassName = (name) => {
    const form = this.state.form
    const errorStatus = form[name].error.status;
    return errorStatus ? "invalid-field" : null;
  }

  onChangeFormValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let updatedForm = {...this.state.form};
    updatedForm[name].value = value;
    
    const validatedResult = this.checkValidator(value, updatedForm[name].validator) 
    
    updatedForm[name].error = {
      status: validatedResult.status,
      message: validatedResult.message
    }

    this.setState({
      form: updatedForm
    })
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    const form = this.state.form
    const formData = {};

    for(let name in form) {
      formData[name] = form[name].value
      // ถ้า error status true ออกจาก loop
      if (form[name].error.status) {
        return
      }
    }

    console.log(form)
  }

  getErrorMessage = (name) => {
    const errorObject = this.state.form[name].error
    return errorObject.status ? errorObject.message : null;
  }

  render() {

    const form = this.state.form

    return (
      <div className="App">
        <form onSubmit={this.onSubmitForm}>
          <div>
            <label>Username: </label>
              <input 
                className={this.getClassName("username")}
                type={form.username.type} 
                name="username"
                onChange={this.onChangeFormValue}
              />
          </div>

          <div>
            <label>password: </label>
                <input 
                className={this.getClassName("password")}
                type={form.password.type} 
                name="password"
                onChange={this.onChangeFormValue}
              />
          </div>

          <div>
            <label>email: </label>
              <input 
                className={this.getClassName("email")}
                type={form.email.type} 
                name="email"
                onChange={this.onChangeFormValue}
              />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
