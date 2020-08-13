import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Slide } from "@material-ui/core";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {//<<useEffect: run a function on some condition
    
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser, 
        });
      } else {
        //the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //any clean up oparation goes here..
      unsubscribe();
    };
  }, []);
     console.log('USER IS >>>',user);



  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          {/* this is defult route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
