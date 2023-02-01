import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Demon Slayer' ]);
    const onAddCategory = (newCategory) => {
        
        setCategories([...categories, newCategory])

    };

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ setCategories } 
        />

        <ol>
            { 
                categories.map( category => {
                    return <li key={category}>{category}</li>
                }) 
            }
        </ol>
    </>
  )
}
