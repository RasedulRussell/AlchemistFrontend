import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'; 
import { Home, Sports, Entertainment, Bangladesh, Others } from './pages'
import './App.css'; 

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Sports' component={Sports}/>
      <Route exact path='/Entertainment' component={Entertainment} />
      <Route exact path='/Bangladesh' component={Bangladesh} />
      <Route exact path='/other' component={Others}/>
    </Switch>
  </main>
)

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light  bg-light">
      <Link className="navbar-brand" to="/">Home</Link>
      <ul className="navbar-nav">
        <NavLink path="/Sports" text="Sports" />
        <NavLink path="/Entertainment" text="Entertainment" />
        <NavLink path="/Bangladesh" text="Bangladesh" />
        <NavLink path="/other" text="Others" />
      </ul>
    </nav>
  </div>
)

class NavLink extends Component {
  render() {
      return (
        <li className="nav-item" >
                  <Link className="nav-link" to={this.props.path}>{this.props.text}</Link>
        </li>
      );
  }
}

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;