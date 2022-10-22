import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {

  const [data, SetData] = React.useState(null)

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => SetData(data.message));
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>

      {!data ? "Loading ..." : data}
      
    </div>
  );
}

export default App;
