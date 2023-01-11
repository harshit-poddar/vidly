import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./Components/navbar";
import Movies from "./Components/movies";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import NotFound from "./Components/notFound";
import MovieForm from "./Components/movieForm";
import LoginForm from "./Components/loginform";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="Container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="movies" />
          <Redirect to="/not-found" />
        </Switch>

        {/* What happen if we search for localhost:3000/customers */}
      </main>
    </React.Fragment>
  );
}

export default App;
