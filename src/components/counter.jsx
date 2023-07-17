import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        {/* <img src={this.state.imgUrl} alt="" />  */}
        <span style={{ fontSize: 15 }} className={classes}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
    // return count === 0 ? <h1>zero</h1> : count;
  }
}

export default Counter;
