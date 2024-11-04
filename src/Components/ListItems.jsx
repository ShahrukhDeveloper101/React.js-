// import styles from './TodoApp.module.css'
function ListItems({list}) {
    return (
      <>
        <ul className="list-group">
            {list.map((item, index) => (
                <li key={index} className="list-group-item d-flex">
                    <div className="col-6">{item}</div>
                    <div className="col-6 text-end">
                        {/* <button className="btn btn-primary btn-sm">Complete</button> */}
                    </div>
                </li>
            ))}
        </ul>
      </>
    )
  }
  
  export default ListItems
  