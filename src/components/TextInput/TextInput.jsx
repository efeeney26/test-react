import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

const TextInput = ({ label, ...restProps }) => {
    const [field, meta] = useField(restProps)
    return (
        <>
            <label htmlFor={restProps.id || restProps.name}>{label}</label>
            <input
                {...field}
                {...restProps}
            />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

TextInput.propTypes = {
    label: PropTypes.string,
    restProps: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })
}

TextInput.defaultProps = {
    label: '',
    restProps: {}
}

export default TextInput
