import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  state = {
    count: 1,
  }
  render() {
    return (
      <div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1">Disabled</a>
          </li>
        </ul>
        <div className="jumbotron">
          <h1 className="display-4">{`Hello, world! ${this.state.count}`}</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
          <a
            className="btn btn-primary btn-lg"
            role="button"
            onClick={() => this.setState(state => ({ count: state.count + 1 }))}
          >Learn more</a>
        </div>
      </div>
    );
  }
}

export default App;
