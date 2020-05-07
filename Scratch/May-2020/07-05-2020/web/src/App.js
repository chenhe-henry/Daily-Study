import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Headroom from "react-headroom";
import cogoToast from "cogo-toast";
import MaterialTable from "material-table";

function App() {
  const clickhandler = () => {
    cogoToast.loading("Loading your data...").then(() => {
      cogoToast.success("Data Successfully Loaded");
    });
  };
  const onclickhandler = () => {
    cogoToast.success("This is success", {
      position: "top-right",
      heading: "Congrats",
    });
  };
  return (
    <div className="App">
      <Headroom
        style={{
          transition: "all .5s ease-in-out",
          backgroundColor: "aqua",
        }}
      >
        <h1>This is the headroom</h1>
      </Headroom>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={clickhandler}
        >
          Loading
        </a>{" "}
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={onclickhandler}
        >
          Success
        </a>
      </header>
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Name", field: "name" },
            { title: "Surname", field: "surname" },
            { title: "Year", field: "birthYear", type: "numeric" },
            {
              title: "City",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
              name: "Chen",
              surname: "f",
              birthYear: 1934,
              birthCity: 12,
            },
            {
              name: "Chen",
              surname: "f",
              birthYear: 1934,
              birthCity: 12,
            },
            {
              name: "Chen",
              surname: "f",
              birthYear: 1934,
              birthCity: 12,
            },
            {
              name: "Chen",
              surname: "f",
              birthYear: 1934,
              birthCity: 12,
            },
            {
              name: "Chen",
              surname: "f",
              birthYear: 1934,
              birthCity: 12,
            },
            {
              name: "Chen",
              surname: "f",
              birthYear: 1934,
              birthCity: 12,
            },
          ]}
          title="Demo Title"
        />
      </div>
    </div>
  );
}

export default App;
