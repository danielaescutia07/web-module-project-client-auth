import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

import Friend from './Friend';

const initialValue = [];

function FriendsList(props) {
    const [friends, setFriends] = useState(initialValue);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    },[])

    return (
        <div>
            <h2>My Friends</h2>
            {friends.map(friend => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </div>
    )
}

export default FriendsList
