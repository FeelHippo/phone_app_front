import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Details from './containers/Details'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path={ '/phone/:id' } component={ Details } />
        </Switch>
      </div>
    </Router>
  );
}

export default App
