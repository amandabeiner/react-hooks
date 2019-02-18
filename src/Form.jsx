import React, { useState } from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'
import Button from'./Button'

const Form = styled.form`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  padding: 5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 6px hsla(0, 0%, 0%, 0.1);
  justify-content: flex-end;
`

const Footer = styled.div`
  display: flex;
  align-items: flex-end;
`

const AddButton = styled(Button)`
  margin-left: 10px;
`

const InputWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
`

const Input = styled(TextInput)`
  flex-basis: ${props => props.type === "textarea" ? '100%' : '46%'}
  margin-bottom: 20px;
`

const ResourceForm = (props) => {
  const defaultValues = { title: "", link: "", description: "" }

  const useFormInput = (initialValues = defaultValues) => {
    const [values, setValue] = useState(initialValues)
    const handleChange = ({ target: { name, value } }) => setValue({ ...values, [name]: value })

    return [values, handleChange]
  }
  
  const [values, setValues] = useFormInput()

  const resetForm = () => {
    setValues(defaultValues)
  }
  
  const submitForm = (e) => {
    e.preventDefault()
    return props.submitForm(values)
  }

  return (
    <Form onSubmit={submitForm}>
      <InputWrapper>
        <Input type="text" name="title" value={values.title} onChange={setValues} />
        <Input type="text" name="link" value={values.link} onChange={setValues} />
      </InputWrapper>
        <Input as="textarea" type="textarea" name="description" value={values.description} onChange={setValues} />
      <Footer>
        <Button onClick={resetForm}>
          Clear
        </Button>
        <AddButton primary type="submit">
          + Add resource
        </AddButton>
      </Footer>
    </Form>
  )
}

export default ResourceForm
