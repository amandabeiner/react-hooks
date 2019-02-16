import React, { useState } from 'react'

const Form = (props) => {
  const defaultValues = { title: "", link: "", description: "" }
  const useFormInput = (initialValues = defaultValues) => {
    const [values, setValue] = useState(initialValues)
    const handleChange = ({ target: { name, value } }) => setValue({ ...values, [name]: value })

    return [values, handleChange]
  }
  
  const [values, setValues] = useFormInput()

  const submitForm = (e) => {
    e.preventDefault()
    return props.submitForm(values)
  }

  return (
    <form onSubmit={submitForm}>
      <input type="text" name="title" value={values.title} onChange={setValues} />
      <input type="text" name="link" value={values.link} onChange={setValues} />
      <input type="textarea" name="description" value={values.description} onChange={setValues} />
      <input type="submit" value="Add" />
    </form>
  )
}

export default Form
