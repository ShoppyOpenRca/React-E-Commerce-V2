import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./components/Modal";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/ConfigureStore';
import Main from "./components/MainComponent";

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
            <Modal />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
