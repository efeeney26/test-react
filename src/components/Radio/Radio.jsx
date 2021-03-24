import React from 'react'
import PropTypes from 'prop-types'
import { Field, useField } from 'formik'

const Radio = ({ children, ...restProps }) => {
    const [, meta] = useField({ ...restProps, type: 'radio' })
    return (
        <>
            <label>
                <Field
                    type="radio"
                    {...restProps}
                />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

Radio.propTypes = {
    children: PropTypes.node
}

Radio.defaultProps = {
    label: null
}

export default Radio
