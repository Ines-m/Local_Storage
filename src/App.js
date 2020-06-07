import React from "react";
import "./styles.css";

class App extends React.Component {
  setData() {
    //set data with local storage
    let obj = { name: "Ines", age: 24, email: "ines.muenzer@merz-akademie.de" };
    localStorage.setItem("myData", JSON.stringify(obj));
  }
  getData() {
    let data = localStorage.getItem("myData");
    data = JSON.parse(data);
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setData()}>Set Data</button>
        <button onClick={() => this.getData()}>Get Data</button>
      </div>
    );
  }
}
export default App;
