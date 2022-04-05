
import { onValue, ref, set } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../services/firebase'

const Chat = () => {

    const [state, setState] = useState({
        user: auth.currentUser,
        chats: [],
        content: '',
        readError: null,
        writeError: null
    })


    useEffect(() => {
        setState({ ...state, readError: null })
        try {
            const chatsRef = ref(db, 'chats')
            onValue(chatsRef, (snapshot) => {
                let chats = [];
                snapshot.forEach(snap => {
                    chats.push(snap.val())
                })
                setState({ ...state, chats: chats })
            })
            /* db.ref('chats').on('value', snapshot => {
                let chats = [];
                snapshot.forEach(snap => {
                    chats.push(snap.val())
                })
                setState({ ...state, chats: chats })

            }) */
        } catch (error) {
            setState({ ...state, readError: error.message })
        }


    }, [])

    const handleChange = (e) => {
        setState({
            ...state,
            content: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setState({ ...state, writeError: null })
        try {
            /* await db.ref('chats').push({
                content: state.content,
                timestamp: Date.now(),
                uid: state.user.uid
            }) */
            set(ref(db, 'chats'), [{
                content: state.content,
                timestamp: Date.now(),
                uid: state.user.uid
            }])
            setState({ ...state, content: '' })

        } catch (error) {
            setState({ ...state, writeError: error.message })
        }

    }

    return (
        <div>
            <div className="chats">
                {state.chats.map(chat => {
                    return <p key={chat.timestamp}>{chat.content}</p>
                })}
            </div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={state.content} />
                {state.readError ? <p>{state.writeError}</p> : null}
                <button type="submit">Send</button>
            </form>
            <div>
                Login in as: <strong>{state.user.email}</strong>
            </div>
        </div>
    )
}

export default Chat