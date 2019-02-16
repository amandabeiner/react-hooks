import React, { useState, useEffect } from 'react'

const Home = props => {
  const defaultValues = { title: "", link: "", description: "" }
  const useFormState = (initialValues = defaultValues) => {
    const [values, setValue] = useState(initialValues)
    const handleChange = ({ target: { name, value } }) => setValue({ ...values, [name]: value })

    return [values, handleChange]
  }

  const [values, setValues] = useFormState()
  const [posts, setPosts]   = useState([])
  
 
  const fetchPosts = async () => {
    const res = await fetch('/posts')
    const fetchedPosts = await res.json()
    setPosts(fetchedPosts)
  }
 
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <input type="text" name="title" value={values.title} onChange={setValues} />
      <input type="text" name="link" value={values.link} onChange={setValues} />
      <input type="textarea" name="description" value={values.description} onChange={setValues} />
      { posts.map(p =>
      <div key={p.id}>
        {p.title}
        <a href={p.link}>Link</a>
        <span>{p.description}</span>
      </div>)}
    </div>
  
  )
}

export default Home
