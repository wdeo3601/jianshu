import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from "react-router-dom";
import Header from './common/header'
import store from './store'
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <BrowserRouter>
        <Route path='/' exact component={Home}/>
        <Route path='/detail' component={Detail}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
