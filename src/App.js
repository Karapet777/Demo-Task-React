import React from "react";

import Layout from "./components/Layout/Layout";
import Header from "./containers/Header/Header";
import Button from "./components/Button/Button";
import List from "./containers/List/List";
import Form from "./containers/Form/Form";
import "./App.css";

class App extends React.Component {
  state = {
    isWriteList: false,
    isWriteform: false,
  };

  WriteListHeandler = () => {
    this.setState({
      isWriteList: !this.state.isWriteList,
    });
  };

  WriteFormHeandler = () => {
    this.setState({
      isWriteform: !this.state.isWriteform,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />

        <Layout>
          <div className="btn_write">
            <Button
              title="write List"
              check={this.WriteListHeandler.bind(this)}
            />
            <Button
              title="write Form"
              check={this.WriteFormHeandler.bind(this)}
            />
          </div>
          {this.state.isWriteList ? <List /> : null}
          {this.state.isWriteform ? <Form /> : null}
        </Layout>
      </div>
    );
  }
}

export default App;
