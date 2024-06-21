import React from 'react'
import { IoMdAdd } from "react-icons/io";

export const AddItems = ({newItems, setNewItems, handleSubmit}) => {
  return (
    <div>
        <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor='additems'>Add Items</label>
        <input
            type='text'
            id="additems"
            name="additems"
            placeholder='Add Items'
            value={newItems}
            onChange={(e) => {setNewItems(e.target.value);}}
        />
        <button type="submit"><IoMdAdd/></button>
        </form>
    </div>
  )
}
