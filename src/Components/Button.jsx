// import styles from './TodoApp.module.css'
function Button({addItem}) {
    return (
      <>
        <button className='btn btn-primary' onClick={addItem}>Add</button>
      </>
    )
  }
  
  export default Button
  