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
  // EXAMPLE_STATE_1: Define state property. Destructure `useState` into property (posts), and updater function (setPosts)
  const [posts, setPosts]   = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const res = await fetch('/posts')
    const fetchedPosts = await res.json()

    //EXAMPLE_STATE_2: Once posts have been fetched, replace the posts property in state we the API response
    setPosts(fetchedPosts)
  }
 
  const postResource = async (input) => {
    const res = await fetch('/posts', {
      method: 'POST',
      body: JSON.stringify(input)
    })

    const post = await res.json()

    // EXAMPLE_STATE_3: When a post is successfully added, replace posts property in state with a new array including the newest post
    setPosts([post, ...posts])
  }

  const postFavorite = async (post) => {
    const res = await fetch('/favorites', {
      method: 'POST',
      body: JSON.stringify({ post_id: post.id })
    })

    const favoritedPost = await res.json()

    setPosts(posts.map((p) => {
      if (p.id === favoritedPost.id) {
        return Object.assign({}, p, favoritedPost)
      } else {
        return p
      }
    }))
  }

  console.log(posts)

  return (
    <Container>
      <ResourceForm
        submitForm={postResource}
      />
      <Feed
        posts={posts}
        favorite={postFavorite}
      />
    </Container>
  
  )
}

export default Home
