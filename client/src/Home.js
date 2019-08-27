import React from 'react';

export default class extends React.Component {
  state = {
    count: 1,
  }

  render() {
    return (
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
    );
  }
}