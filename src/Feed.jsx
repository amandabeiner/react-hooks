import React from 'react'

const Feed = ({ posts }) => {
  return (
    <div>
      { posts.map(p =>
      <div key={p.id}>
        {p.title}
        <a href={p.link}>Link</a>
        <span>{p.description}</span>
      </div>)}
    </div>
  )
}

export default Feed
