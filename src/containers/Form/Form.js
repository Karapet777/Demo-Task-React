import React from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { ValidateRegiser } from "../../Util/Validate";
import { ValidateLogin } from "../../Util/Validate";
import "./Form.css";

class Form extends React.Component {
  state = {
    Name: "",
    Pass: "",
  };

  inpName = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };
  inpPass = (event) => {
    this.setState({
      Pass: event.target.value,
    });
  };
  btnReg = () => {
    ValidateRegiser(this.state.Name, this.state.Pass);
    this.setState({
      Name: "",
      Pass: "",
    });
  };
  btnLog = () => {
    ValidateLogin(this.state.Name, this.state.Pass);
    this.setState({
      Pass: "",
      Name: "",
    });
  };

  render() {
    let ClassesLog = ["Inp show1"],
      ClassesPass = ["Inp show2"],
      ClassesUsName = ["circleUsName"],
      ClassesUsPass = ["circlePass"];

    if (this.state.Name) {
      ClassesUsName.push("green");
    }

    if (this.state.Pass) {
      ClassesUsPass.push("green");
    }

    return (
      <div className="container_form">
        <div className="block_form">
          <div className={ClassesUsName.join(" ")}></div>
          <div className={ClassesUsPass.join(" ")}></div>

          <p className="title_form">Welcome 2021 year</p>
          <Input
            className={ClassesLog.join(" ")}
            value={this.state.Name}
            userText={this.inpName}
            plac={"Login"}
            type="text"
          />
          <Input
            className={ClassesPass.join(" ")}
            value={this.state.Pass}
            userText={this.inpPass}
            plac={"Password"}
            type="password"
          />
          <Button
            className={"btn show33"}
            title={"Login"}
            check={this.btnLog.bind(this)}
          />
          <Button
            className={"btn show3"}
            title={"Register"}
            check={this.btnReg.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Form;
