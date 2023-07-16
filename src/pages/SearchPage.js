import React, {  Component } from "react";
import SearchTodo from "../component/SearchTodo";
import "../pages/SearchPage.css";

export default class TodoPage extends Component {

     render() { 
      return (
        <div className="Search_Data">
          <h1>Search Data</h1>
          <div><SearchTodo/></div>
        </div>
      );
  }

}

  

