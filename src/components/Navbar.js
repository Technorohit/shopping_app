import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Navbar = (props)=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shoes Express</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart {props.items.length?<span class="new badge green">{props.items.length}</span>:null}</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

const mapStateToProps= function(state) {
    return {
     items: state.addedItems
    };
 }
export default connect(mapStateToProps)(Navbar);