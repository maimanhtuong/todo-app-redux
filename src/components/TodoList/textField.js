import React from 'react'
import { useField,ErrorMessage } from 'formik'

export const TextField = ({label,...props}) => {
    const [field, meta] = useField(props);
  return (
    <div>
        <label htmlFor={field.name}>{label}</label>
        <input 
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field}
            {...props}
            autoComplete='off'
        />
        <ErrorMessage name={field.name} className='error'/>
    </div>
  )
}
export const SelectField = ({label,...props}) => {
    const [field, meta] = useField(props);
  return (
    <div>
        <label htmlFor={field.name}>{label}</label>
        <select 
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field}
            {...props}
        />
        <ErrorMessage name={field.name} className='error'/>
    </div>
  )
}
