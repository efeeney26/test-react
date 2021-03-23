import React from 'react'
import { useFormik, Form, Formik } from 'formik'
import * as Yup from 'yup'

import TextInput from '../TextInput/TextInput'
import Checkbox from '../Checkbox/Checkbox'
import Select from '../Select/Select'

import style from './SignupForm.module.css'

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less'
    }

    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    return errors
}

const scheme = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions.'),
    jobType: Yup.string()
        .oneOf(
            ['designer', 'development', 'product', 'other'],
            'Invalid Job Type'
        )
        .required('Required')
})

const SignupForm = (props) => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                acceptedTerms: false, // added for our checkbox
                jobType: '', // added for our select
            }}
            validationSchema={scheme}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                }, 400)
            }}
        >
            <Form
                className={style.form}
            >
                <TextInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                />

                <TextInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                />

                <TextInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="jane@formik.com"
                />

                <Select label="Job Type"
                    name="jobType"
                >
                    <option value="">Select a job type</option>
                    <option value="designer">Designer</option>
                    <option value="development">Developer</option>
                    <option value="product">Product Manager</option>
                    <option value="other">Other</option>
                </Select>

                <Checkbox name="acceptedTerms">
                    I accept the terms and conditions
                </Checkbox>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

SignupForm.propTypes = {

}

export default SignupForm
