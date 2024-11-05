import './App.css'
import TodoApp from './Components/TodoApp'
import SearchInput from './Components/SearchInput'
import ListItems from './Components/ListItems'
import Button from './Components/Button'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [groceryList, setGroceryList] = useState(['Milk', 'Eggs', 'Chicken', 'Vegetables', 'Fruits']);
  
  const addItem = () => {
    if(inputValue.trim() !== ""){
      setGroceryList((groceryList) => [...groceryList, inputValue]);
      setInputValue('');
    }
  };

  return (
    <>
      <TodoApp>
        <h4 className='text-primary'>Grocery List</h4>
        <div className="row">
          <div className="col-11 pe-2">
            <SearchInput inputValue={inputValue} setInputValue={setInputValue} addItem={addItem}></SearchInput>
          </div>
          <div className="col-1 p-0">
            <Button addItem={addItem}></Button>
          </div>
        </div>
        <br />
        <ListItems list={groceryList}></ListItems>
      </TodoApp>
    </>
  )
}
export default App
