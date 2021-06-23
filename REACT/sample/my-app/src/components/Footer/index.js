import "./styles.css";

import React, { PureComponent, Component, Fragment } from "react";

class PlacesGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      v: null,
    };
  }
  render() {
    return (
      <Fragment>
        <div className="form-group row">
          <input
            className="form-control mr-2 col-md-5"
            placeholder="Search"
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ v: this.state.value })}
          >
            Submit
          </button>
        </div>
        <Child val={this.state.v} />
      </Fragment>
    );
  }
}

export default PlacesGrid;

class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        {console.log("CHild")}
        <h1>Child compoenent</h1>
        <h1>{this.props.val}</h1>
      </Fragment>
    );
  }
}
