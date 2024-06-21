import React from 'react'
import { IoTrashSharp } from "react-icons/io5";


export const Content = ({items,handleChange,handleDelete}) => {

  if(items.length)
    {

      return (
        <main>
              <ul>
                  {items.map((x) => (
                    <li className="item" key={x.id}>
                        <input 
                          type="checkbox"
                          checked={x.checked}
                          onChange={() => {handleChange(x.id)}}
                        />
                        <label style={(x.checked) ? {textDecoration: "line-through"} : null}>{x.item}</label>
                       <IoTrashSharp onClick={() => handleDelete(x.id)}/>
                    </li>
                  ))}
              </ul>
        </main>
      )
    }
    else
    {
      return(<main><p className="item">List is Empty</p></main>)
    }
}
