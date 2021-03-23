import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' })
    return (
        <div>
            <label>
                <input type="checkbox"
                    {...field}
                    {...props}
                />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}

Checkbox.propTypes = {
    children: PropTypes.node
}

Checkbox.defaultProps = {
    children: null
}

export default Checkbox
