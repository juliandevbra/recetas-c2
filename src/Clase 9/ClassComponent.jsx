import { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
    };
    console.log(1, "Constructor");
  }

  componentDidMount() {
    console.log(2, "Montaje");
  }
  //   componentDidUpdate(){}
  //   componentWillUnmount(){}

  render() {
    console.log(3, "Render");
    return <div>ClassComponent</div>;
  }
}
