import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Viewproduct from './components/Viewproduct';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewproduct" element={<Viewproduct />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )

}

export default App;
