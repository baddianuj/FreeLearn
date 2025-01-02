import React from 'react'
import ReactDOM from 'react-dom'
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import './style.css'
import About from './views/about'
import Challenges from './views/challenges'
import Connect from './views/connect'
import Future from './views/future'
import Home from './views/home'
import List from './views/list'
import NotFound from './views/not-found'
import Privacy from './views/privacy'
import Sorting from './views/sorting'
import Tandc from './views/tandc'


import PathFinding from './components/PathFinding';
import ScrollToTop from './components/scrolltotop';
import CodeEditor from './views/CodeEditor'; 

const App = () => {
  return (
    <Router>

<ScrollToTop />
      <Switch>
        <Route component={Connect} exact path="/connect" />
        <Route component={Challenges} exact path="/challenges" />
        <Route component={List} exact path="/list" />
        <Route component={Sorting} exact path="/sorting" />
        <Route component={About} exact path="/about" />
        <Route component={Future} exact path="/future" />
        <Route component={Tandc} exact path="/tandc" />
        <Route component={Privacy} exact path="/privacypolicy" />
        <Route component={Home} exact path="/" />
        <Route component={CodeEditor} exact path="/code-editor" />
        {/* <Route component={Blog} exact path="/blog" /> */}
        <Route component={PathFinding} exact path="/path" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
