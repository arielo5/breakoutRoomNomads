
import "./App.css";
import React from "react";
import HomepageLogo from "./components/HomepageLogo";
import Login from "./components/login/Login";
import Title from "./components/title/title";
import VotePage from "./components/votePage/votePage";
import Hamburger from "./components/navbar/Hamburger";
import LoggedInHamburger from "./components/navbar/LoggedInHamburger"
import LogoThumb from "./components/logoThumb/logoThumb";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/">
              <Hamburger />
              <HomepageLogo />
              <Login />
            </Route>
            <Route exact path="/poll">
              <LoggedInHamburger />
              <LogoThumb />
              <Title />
              <VotePage />

            </Route>
            <Route exact path="/contact">
              <LoggedInHamburger />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;