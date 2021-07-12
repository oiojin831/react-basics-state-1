import React, { useState } from 'react';
import './style.css';

export default function App(props) {
  const [data, setData] = useState(undefined);
  const [name, setName] = useState(props.name);
  function handleClick() {
    setData(goods);
  }
  return (
    <div>
      <button onClick={handleClick}>load data</button>
      <div>{name}</div>
      {/* {data?.map(d => {
        return (
          <GoodComponent
            name={d.name}
            location={d.location}
            price={d.location}
          />
        );
      })} */}
      {data?.map(GoodComponent)}
    </div>
  );
}

function GoodComponent({ price, name, location }) {
  return <div>{`${name} - ${location} - ${price}`}</div>;
}

const goods = [
  {
    name: 'jordan',
    location: 'box1',
    price: 100000
  },
  {
    name: 'force',
    location: 'box2',
    price: 200000
  },
  {
    name: 'max97',
    location: '현관',
    price: 300000
  }
];
