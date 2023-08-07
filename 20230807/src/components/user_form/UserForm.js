import {useState} from 'react';

const UserForm = ({setForm}) => {
    const [inputs, setInputs] = useState({})

    const onChangeInputs = (ev) => {
        setInputs({...inputs, [ev.target.name]: ev.target.value});
    }

    const onSave = (ev) => {
        ev.preventDefault();
        setForm(inputs);
    }
    return <form onSubmit={onSave}>
        <input type="email" placeholder="email" autoFocus required value={inputs.email} name='email' onChange={onChangeInputs} />
        <input type="text" placeholder="name" required value={inputs.name} name='name' onChange={onChangeInputs} />
        <input type="submit" />
    </form>
}

export default UserForm;