import { useState } from 'react';
import { Button, Input } from 'components';

import './App.css';

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    name: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      error: 'Username should be 3-16 characters and shouldn"t include any special character!',
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      error: 'It should be a valid email address',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'name',
      type: 'text',
      placeholder: 'Full Name',
      error: 'Fullname should be provided',
      label: 'Full Name',
      required: true,
    },
    {
      id: 4,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 5,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      error: 'Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      error: 'Password do not match',
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];

  const handleChange = ({ target: input }) => {
    setValues({ ...values, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='app'>
      <form onSubmit={handleSubmit} className='form'>
        <h1 className='heading-primary'>Register</h1>
        {inputs?.map((input) => {
          return (
            <Input
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
            />
          )
        })}
        <Button text='Submit' className='btn' />
      </form>
    </div>
  );
}

export default App;
