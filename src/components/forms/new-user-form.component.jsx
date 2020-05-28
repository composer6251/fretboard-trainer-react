import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Component } from 'react';

class NewUserFormComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.submitButtonOnClick = this.submitButtonOnClick.bind(this);
    }
    submitButtonOnClick(){
        console.log("Submit: " + this.state.email);
    }

    render(){
        return(
            <div>
                <h2>Create An Account</h2>
                <Formik 
                    initialValues={{email: '', password: ''}}
                    validate={values => {
                        const errors = {};
                        if(!values.email){
                            errors.email = 'Required';
                        }else if(
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ){
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            //alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {
                        ({ isSubmitting }) => (
                            <Form>
                                <label>Email</label>
                                <Field type="email" name="email"/>
                                <label>Password</label>
                                <Field type="password" name="password"/>
                                <button className="btn-success" type="submit" disabled={isSubmitting} onClick={() => this.submitButtonOnClick(this.values.email)}>
                                    Submit</button>
                            </Form>
                        )}
                </Formik>
            </div>
        )
    }
}

export default NewUserFormComponent;