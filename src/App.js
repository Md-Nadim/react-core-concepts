import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman-sha']
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]

  const productNames = products.map(product => product.name)
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> I am a React Person </p>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[2].name} price={products[0].price}></Product>
        <Person name={nayoks[3]} nayika="Moushumi"></Person>
        <Person name="jasim" nayika="Shabana"></Person>
      
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height: '200px',
    width:'200px',
    float:'left'
  }
  return(
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
      <button>Buy now</button>
    </div>
  )

}

function Person(props){
  return(
    <div style={{border:'2px solid red',margin: '10px', color: 'green'}}>
      <h1>My Name: {props.name} </h1>
      <h3>My Profession: {props.nayika}</h3>
    </div>
  )
 
}

export default App;
