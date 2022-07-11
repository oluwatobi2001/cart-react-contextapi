import React  from 'react';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'

import { Switch } from 'react-router-dom';


const App = () => {
  
 return (
   
     <div>
     <Header />
     <Switch>
     <div className="App">
       <Route  exact path = "/"> <Home /> </Route>
       <Route  exact path = "/Cart" > <Cart /> </Route>
     </div>
     </Switch>
     </div>
 )


}

export default App;
