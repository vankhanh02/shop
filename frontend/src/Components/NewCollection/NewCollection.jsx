import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./NewCollection.css";
//import new_collection from '../Assets/new_collections'
const BASE_URL = process.env.REACT_APP_BASE_URL;
const NewCollection = () => {
  const [new_collection, setNew_collection] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/api/product/newcollection`)
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);

  return (
    <div className="collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collect">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
