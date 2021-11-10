import React, {useState} from 'react'


const initialValues = {
    username: '',
    password: ''
}

export default function Login() {
    const [formValues, setFormValues] = useState(initialValues);


    const onChange = (evt) => {
        setFormValues({
            ...formValues, [evt.target.name]: evt.target.value
        })
    }

    const login = () => {

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
