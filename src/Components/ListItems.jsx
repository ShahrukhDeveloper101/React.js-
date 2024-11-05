function ListItems({list}) {
    return (
      <>
        <ul className="list-group">
            {list.map((item, index) => (
                <li key={index} className="list-group-item d-flex">
                    <div className="col-6">{item}</div>
                </li>
            ))}
        </ul>
      </>
    )
  }
  
  export default ListItems
  