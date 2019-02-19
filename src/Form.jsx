import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CreatableSelect from 'react-select/lib/Creatable'
import Card from './Card'
import TextInput from './TextInput'
import TextArea from './TextArea'
import Label from './Label'
import Button from'./Button'

const ResourceForm = (props) => {
  const [tags, setTags] = useState([])
  useEffect(() => {
    fetchTags()
  }, [])

  const fetchTags = async() => {
    const res = await fetch('/tags')
    const fetchedTags = await res.json()
    setTags(fetchedTags)
  }

  const defaultValues = { title: "", link: "", description: "", tags: [] }
  const useFormInput = (initialValues = defaultValues) => {
    const [values, setValue] = useState(initialValues)
    
    const handleChange = (e) => {
      const { target } = e
      const newState = target ? {...values, [target.name]: target.value } : { ...values, tags: e}

      setValue(newState)
    }

    return [values, handleChange]
  }
  const [values, setValues] = useFormInput()

  const formatSelect = () => (
    tags.map(t => ({ value: t.id, label: `#${t.name}`}))
  )

  const formatValues = () => {
    const tags = values.tags
    const payload = {
      title: values.title,
      link: values.link,
      description: values.description,
      tags: values.tags.map(t => ({ id: t.value, name: t.label }))
    }

    return payload
  }

  const submitForm = (e) => {
    e.preventDefault()
    return props.submitForm(formatValues())
  }
  
  return (
    <Card>
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

        <SelectWrapper>
          <Label htmlFor="tags">Tags</Label>
          <CreatableSelect
            className="select-picker"
            value={values.tags}
            onChange={setValues}
            isMulti
            options={formatSelect()}
          />
        </SelectWrapper>
        <Footer>
          <AddButton primary type="submit">
            + Add resource
          </AddButton>
        </Footer>
      </Form>
    </Card>
  )
}

export default ResourceForm

const Form = styled.form`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
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
const SelectWrapper = styled.div`
  flex-basis: 100%;
  align-items: flex-start;
  margin-bottom: 20px;

  .select-picker {
    max-width: 500px;
  }
`
