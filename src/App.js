import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout'
// import Cart from './components/Cart';
import CartNew from './components/CartNew';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                     <Route path="/Checkout" component={Checkout}/>
                    <Route path="/cart" component={CartNew}/>
                  </Switch>
             </div>
       </BrowserRouter>
    );
  }
}

export default App;
