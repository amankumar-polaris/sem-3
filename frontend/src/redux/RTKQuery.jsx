import React from 'react'
import { useAddPostMutation, useDeletePostMutation, useGetPostsQuery } from './rtkQuery'

export const RTKQuery = () => {
    const { data, refetch } = useGetPostsQuery()
    const [addPost, posts] = useAddPostMutation()
    const [deletePost, deletedPost] = useDeletePostMutation()
    console.log(posts, 'postt')
    // console.log(currentData, currentData)
    return (
        <div>
            <button onClick={() => refetch()} style={{ background: 'yellow' }}>refresh</button>
            <button onClick={() => addPost({
                title: "qwertyy"
            })}>add post</button>
            {
                data?.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <button onClick={() => deletePost(item.id)}>delete post</button>
                    </div>
                ))
            }
        </div>
    )
}


