import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const maxImagesShow = 20;
  
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
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar GIFs"
                value={ inputValue }
                onChange={onChangeHandler}
            />
            <label for="limit">Cantidad de imagenes:</label>
            <select id="limit" name="limit">
                {[...Array(maxImagesShow)].map((x, i) => {
                    console.log(typeof i, i)
                    return <option key={i+1}>{i+1}</option>
                })

                }
            </select>
        </form>
    </>
  )
}
