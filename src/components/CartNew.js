import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Checkout from './Checkout'
import './Cart.css'
import {removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
class Cart extends Component{
    
    handleRemove=(id)=>{
        this.props.removeItem(id);
        // this.props.addToCart(id);
    }
    addQuantity=(id)=>{
        this.props.addQuantity(id);
    }
    subtractQuantity=(id)=>{
        this.props.subtractQuantity(id);
    }
    render(){ 
      
        const itemsInCart =this.props.items.length;
        console.log(itemsInCart);
        let addedItems = this.props.items.length ?
            ( 
                this.props.items.map(item=>{
                    return(
                       <div>{console.log('------------',item.id)}
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>

                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart" onClick={()=>{this.addQuantity(item.id)}}><i className="material-icons">arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.subtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>this.handleRemove(item.id)}>Remove</button>
                                    </div>
                               </li>
                       </div>                     
                    )
                    
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>  
                    {itemsInCart? 
                        
                        <Link to="/checkout" Component={{Checkout}}><button className="waves-effect waves-light btn pink remove" onClick={()=><Checkout/>}>Checkout</button></Link>
                        
                        :null}
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        removeItem:(id)=>{dispatch(removeItem(id))},
        addQuantity:(id)=>{dispatch(addQuantity(id))},
        subtractQuantity:(id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)