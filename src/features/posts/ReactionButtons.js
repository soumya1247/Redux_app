import { useDispatch } from "react-redux/es/exports";
import { reactionAdded } from "./postsSlice";
import React from 'react'

const reactionEmoji = {
    thumbsUp: 'a',
    wow: 'b',
    heart: 'c',
    rocket: 'd',
    coffee: 'e'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
            key = {name}
            type = 'button'
            onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name}))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>

}

export default ReactionButtons