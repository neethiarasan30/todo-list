import React from 'react'

export const Footer = ({itemsLength}) => {
    return (
        
        
        <footer>
                <h1>{itemsLength} {itemsLength > 1 ? "items" : "item"} </h1>
        </footer>
  )
}
