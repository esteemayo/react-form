import { useState } from 'react';
import './Input.css';

const Input = ({ name, label, error, ...rest }) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    return (
        <div className='form__group'>
            <label htmlFor={name} className='form__label'>{label}</label>
            <input
                {...rest}
                id={name}
                name={name}
                className='form__input'
                onBlur={handleFocus}
                onFocus={() => name === 'confirmPassword' && setFocused(true)}
                focused={focused.toString()}
            />
            <span className='error-message'>{error}</span>
        </div>
    );
};

export default Input;
