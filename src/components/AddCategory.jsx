import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (event) => {
        setInputValue( event.target.value );
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length < 1) return;
        onNewCategory(value);
        setInputValue('');
    };

    return (
    <>
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar GIFs"
                onChange={onChangeHandler}
            />
        </form>
    </>
  )
}
