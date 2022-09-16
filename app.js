App.js
import './App.css';
import MyCart from './components/MyCart';
function App() {
 return (
 <div>
 <MyCart />
 </div>
 );
}
export default App;

data.js
export const products = [
 {
 id: 59,
 title: "Spring and summershoes",
 price: 20,
 quantity: 3,
 total: 60,
 discountPercentage: 8.71,
 discountedPrice: 55,
 },
 {
 id: 88,
 title: "TC Reusable Silicone Magic Washing Gloves",
 price: 29,
 quantity: 2,
 total: 58,
 discountPercentage: 3.19,
 discountedPrice: 56,
 },
 {
 id: 18,
 title: "Oil Free Moisturizer 100ml",
 price: 40,
 quantity: 2,
 total: 80,
 discountPercentage: 13.1,
 discountedPrice: 70,
 },
 {
 id: 95,
 title: "Wholesale cargo lashing Belt",
 price: 930,
 quantity: 1,
 total: 930,
 discountPercentage: 17.67,
 discountedPrice: 766,
 },
 {
 id: 39,
 title: "Women Sweaters Wool",
 price: 600,
 quantity: 2,
 total: 1200,
 discountPercentage: 17.2,
 discountedPrice: 994,
 },
];
Helper.js
Component } from 'react'
import {products as data} from '../data/data.js'
import { findSum } from './helper.js';
export class DisplayCart extends Component {
 constructor(props) {
 super(props)

 this.state = {
 totalSum: 0,
 isClicked: false,
 }export const findSum = (array) => {
 const totalSum = array.reduce((acc, item) => {
 return acc + item.discountedPrice;
 }, 0);
 return totalSum;
};
MyCart.js
import React, { Component } from "react";
import DisplayCart from "./DisplayCart";
import FilterData from "./FilterData";
import "./styles.css"
export class MyCart extends Component {
 constructor(props) {
 super(props);
 this.state = {
 displayCart: false,
 displayFilter: false,
 };
 }
 handleClick = e => {
 if(e.target.id === 'show'){
 this.setState({displayCart: true , displayFilter: false})
 }
 else if(e.target.id === 'filter'){
 this.setState({displayFilter: true, displayCart: false})
 }
 }
 render() {
 return <div>
 <h1>My Shopping Cart</h1>
 <div className="box">
 <button className='myButton'
 id='show' onClick={this.handleClick}>Show Cart</button>
 <button className='myButton'
 id='filter' onClick={this.handleClick}>Filter Cart</button>
 <div className='container'>
 {this.state.displayCart && <DisplayCart />}
 {this.state.displayFilter && <FilterData />}
 </div>
 </div>
 </div>;
 }
}
export default MyCart;
DisplayCart.js
import React, { C
 }
 handleClick = () => {
 const total = findSum(data);
 this.setState({totalSum: total, isClicked: !this.state.isClicked});
 }
 render() {
 return (
 <div>
 <table border={1}>
 <tr>
 <th>Name of Item</th>
 <th>Price of Item</th>
 <th>Quantity </th>
 <th>Total </th>
 <th>Discount Percentage </th>
 <th>Discount Price </th>
 </tr>
 {
 data.map((item)=>{
 return (
 <tr key={item.id}>
 <td>{item.title}</td>
 <td>{item.price}</td>
 <td>{item.quantity}</td>
 <td>{item.total}</td>
 <td>{item.discountPercentage}</td>
 <td>{item.discountedPrice}</td>
 </tr>
 )
 })
 }
 </table>
 <button onClick={this.handleClick}>FindSum</button>
 {this.state.isClicked && this.state.totalSum}
 </div>
 )
 }
}
export default DisplayCart
FilterData.js
import { Component } from "react";
import {products} from '../data/data.js';
class FilterData extends Component{
 render(){
 const filteredData = products.filter((item)=>{
 return item.quantity <=2 ? item : '';
 });
 console.log(filteredData);
 return (
 <div>
 <table border={1}>
 <tr>
 <th>Name of Item</th>
 <th>Price of Item</th>
 <th>Quantity </th>
 </tr>
 {
 filteredData.map((item)=>{
 return (
 <tr>
 <td>{item.title}</td>
 <td>{item.price}</td>
 <td>{item.quantity}</td>
 </tr>
 )
 })
 }
 </table>
 </div>
 );
 };
}
export default FilterData;
