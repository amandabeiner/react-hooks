import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ResourceForm from './Form'
import Feed from './Feed'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 5rem 10rem;
  background-color: #F4F8FB;
`

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
    <Container>
      <ResourceForm
        submitForm={postResource}
      />
      <Feed
        posts={posts}
      />
    </Container>
  
  )
}

export default Home
