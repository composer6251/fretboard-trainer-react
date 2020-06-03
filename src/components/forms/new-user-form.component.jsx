import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Component } from 'react';
import UsersService from '../../api/users.service';

class NewUserFormComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitValidation = this.onSubmitValidation.bind(this);
    }
    onSubmit(values){
        console.log(values)
        UsersService.addUser(values);
    }
    onSubmitValidation(values){
        const errors = {};
        if(!values.email){
            errors.email = 'Required';
        }else if(
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ){
            errors.email = 'Invalid email address';
        }
        console.log(errors);
        return errors;
    }

    render(){
        let {email, password} = this.state;
        return(
            <div>
                <h2>Create An Account</h2>
                <Formik 
                    initialValues={{email, password}}
                    handleChange={false}
                    validate={this.onSubmitValidation}
                    onSubmit={this.onSubmit}
                >
                    {
                         ({ isSubmitting }) => (
                            <Form>
                                <label>Email</label>
                                <Field type="email" name="email" />
                                <label>Password</label>
                                <Field type="password" name="password"  />
                                <button className="btn-success" type="submit">
                                    Submit</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        )
    }
}

export default NewUserFormComponent;