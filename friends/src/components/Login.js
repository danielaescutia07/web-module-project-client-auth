import axios from 'axios';
import React, {useState} from 'react'


const initialValues = {
    username: '',
    password: ''
}

export default function Login() {
    const [formValues, setFormValues] = useState(initialValues);


    const onChange = (e) => {
        setFormValues({
            ...formValues, [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5002/api/login', formValues)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='login'>
            <form onSubmit={login}>
                <label>Username:
                    <input
                        type='text'
                        name='username'
                        value={formValues.name}
                        onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input
                        type='password'
                        name='password'
                        value={formValues.password}
                        onChange={onChange}
                    />
                </label>
                <button>Log in</button>
            </form>
        </div>
    )
}
