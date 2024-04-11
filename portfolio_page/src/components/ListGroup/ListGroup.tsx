import React, { useState } from "react";

interface Props {
  items: string[],
  title: string,
  onSelectItem: (item:string) => void
}

function ListGroup({items, title, onSelectItem}:Props) {
  // State hook for selecting element in list
  const [selectedIndex,setSelectedIndex] = useState(-1);



  return (
    <div>
      <h1>Hello World from ListGroup Component with title: {title}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li key={item} className= 
          {selectedIndex === index ? 'list-group-item active': 'list-gorup-item'} 
          onClick={()=>{ 
            setSelectedIndex(index); 
            onSelectItem(item);
            }}
            >
            {item}
          </li>
        ))}
      </ul>
      </div>
  );
}

export default ListGroup;
