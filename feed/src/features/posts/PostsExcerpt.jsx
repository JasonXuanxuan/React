import React from 'react'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { Link } from 'react-router-dom'

let PostsExcerpt=({post})=> {
  return (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0,100)}</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
        )
}
// 只渲染改动过的Post，其他未改动的Post不变，虚拟Dom的优势
PostsExcerpt = React.memo(PostsExcerpt)
export default PostsExcerpt
