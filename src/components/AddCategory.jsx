import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (event) => {
        setInputValue( event.target.value );
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length <= 1) return;
        setInputValue('');
        onNewCategory(value);
    };

    return (
    <>
        <form onSubmit={ onSubmit } aria-label="form" >
            <input 
                type="text"
                placeholder="Buscar GIFs"
                value={ inputValue }
                onChange={onChangeHandler}
            />
        </form>
    </>
  )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}