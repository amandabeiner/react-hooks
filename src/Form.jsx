import React, { useState } from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'
import TextArea from './TextArea'
import Label from './Label'
import Button from'./Button'

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
      <TwoAcrossInputs>
        <InputWrapper>
          <Label htmlFor="title">Title</Label>
          <TextInput type="text" name="title" value={values.title} onChange={setValues} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="link">Link</Label>
          <TextInput type="text" name="link" value={values.link} onChange={setValues} />
        </InputWrapper>
      </TwoAcrossInputs>
        <Label htmlFor="description">Description</Label>
        <TextArea name="description" value={values.description} onChange={setValues} />
      <Footer>
        <AddButton primary type="submit">
          + Add resource
        </AddButton>
      </Footer>
    </Form>
  )
}

export default ResourceForm

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

const TwoAcrossInputs = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
`

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 49%;

  input, label {
    flex-basis: 100%;
  }
`

