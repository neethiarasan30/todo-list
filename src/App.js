import React, { useState } from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import { AddItems } from './components/AddItems';
import { SearchItems } from './components/SearchItems';

function App() {

  let[items,setItems] = useState(JSON.parse(localStorage.getItem("todo-list")))

  let[newItems, setNewItems] = useState([])

  let[searchItem, setSearchItem] = useState("")

  let handleChange = (id) => {
    const updatedItems =  items.map((item) => item.id === id ? {...item, checked:!item.checked} : item)
    
    setItems(updatedItems)

    localStorage.setItem("todo-list",JSON.stringify(updatedItems))
  }
  let handleDelete = (id) => {
    const updatedItems =  items.filter((item) => item.id !== id)
    
    setItems(updatedItems)

    localStorage.setItem("todo-list",JSON.stringify(updatedItems))

  }

  let handleSubmit = (e) => {
      e.preventDefault()
      
      let id = (items.length) ? items[items.length-1].id+1 : 1

      let inputItems = {id:id,checked:false, item:newItems} 

      let listItems = [...items,inputItems]

      setItems(listItems)

      localStorage.setItem("todo-list",JSON.stringify(listItems))


      setNewItems("")
  }


  return (
      <div className="App">
        <Header/>
        <AddItems newItems={newItems} setNewItems={setNewItems} handleSubmit={handleSubmit}/>
        <SearchItems searchItem={searchItem} setSearchItem={setSearchItem}/>
        <Content items={items} handleChange={handleChange} handleDelete={handleDelete}/>
        <Footer itemsLength={items.length}/>
      </div>
  );
}

export default App;
