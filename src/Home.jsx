import React, { useState, useEffect } from 'react'
import Form from './Form'
import Feed from './Feed'

const Home = props => {
  const [posts, setPosts]   = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const res = await fetch('/posts')
    const fetchedPosts = await res.json()
    setPosts(fetchedPosts)
  }
 
  const postResource = async (input) => {
    const res = await fetch('/posts', {
      method: 'POST',
      body: JSON.stringify(input)
    })

    const post = await res.json()

    setPosts([post, ...posts])
  }
 
  return (
    <div>
      <Form
        submitForm={postResource}
      />
      <Feed
        posts={posts}
      />
    </div>
  
  )
}

export default Home
