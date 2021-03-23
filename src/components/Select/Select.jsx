import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

const Select = ({ label, ...restProps }) => {
    const [field, meta] = useField(restProps)
    return (
        <div>
            <label htmlFor={restProps.id || restProps.name}>{label}</label>
            <select {...field}
                {...restProps}
            />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    restProps: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })
}

Select.defaultProps = {
    label: '',
    children: null
}

export default Select
