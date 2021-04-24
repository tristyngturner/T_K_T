import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Quiz from './components/Quiz'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Home/>
      <Footer/>

      <Switch>
        <Route exact path="/Quiz">
            <Quiz />
          </Route>
        </Switch>
      
    </div>
    </Router>

  );
}

export default App;
