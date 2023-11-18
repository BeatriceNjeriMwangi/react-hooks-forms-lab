import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('Produce')
  function setItemCategory(itemCategory) {
    setItemCategory(itemCategory)
  }
  // function handleSubmit(e) {
  //   e.preventDefault()
  //   onItemFormSubmit(itemName, itemCategory)
  // }
  

  
  // function handleSubmit() {
  //   const newItem = {
  //     id: uuid(),
  //     name: itemName,
  //     category: itemCategory
  //   }
  //   props.addItem(newItem)
  //   setItemName('')
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   handleSubmit()
  // }

  
  return (
    <form className="NewItem" onSubmit={handleSubmit(e)}>
      <label>
        Name:
        <input type="text" value={itemName}
          onChange={(e) => setItemName(e.target.value)} />
      </label>

      <label>
        Category:
        <select value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
