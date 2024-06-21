import React from 'react'

function Friend(props) {
    const { friend } = props;
    return (
        <div>
            <h4>{friend.name}</h4>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}

export default Friend
