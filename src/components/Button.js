import PropTypes from 'prop-types';

const Button = ({ text, type, ...rest }) => {
    return (
        <button {...rest} type={type}>{text}</button>
    );
};

Button.defaultProps = {
    type: 'submit',
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default Button;
