import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectUserById } from './usersSlice'
import { selectPostsByUser } from '../posts/postsSlice'

export default function UserPage() {
    // <Route path=":userId" element={<UserPage/>}/>
    const  {userId}  = useParams() //接收来自<Link to={`/user/${user.id}`}>{user.name}</Link>的Param
    const user = useSelector(state => selectUserById(state, Number(userId)))
    const postsForUser = useSelector((state) => selectPostsByUser(state, Number(userId)))
    const postTitles = postsForUser.map(post => (
        <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ))
    // 问号是“空安全运算符”，可以用于处理可能为null的变量。 当变量为null时，空安全运算符会返回null，而不会导致空指针异常。 因此，在$ {User?.name}中，如果User为null，整个表达式将返回null，而不会抛出异常。
    return (
        <section>
            <h2>{user?.name}</h2>
            <ol>{postTitles}</ol>
        </section>
    )
}
