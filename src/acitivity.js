import React from "react";
import { render } from "react-dom";

export class Activity extends React.Component {
  render() {
    return <div>activity</div>;
  }
}

// import React from 'react';
// import { render } from 'react-dom';
// import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

// import { Home } from './home.js';
// import { About } from './about.js';
// import { Contact } from './contact.js';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="about">About</Link></li>
//           <li><Link to="contact">Contact</Link></li>
//         </ul>
//         <div>
//           {this.props.children}
//         </div>
//       </div>
//     );
//   }
// }

// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home} />
//       <Route path="about" component={About} />
//       <Route path="contact" component={Contact} />
//     </Route>
//   </Router>
// ),
//   document.getElementById('app'));
