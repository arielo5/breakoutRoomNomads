import "./App.css";
import React, { useState } from "react";
import HomepageLogo from "./components/HomepageLogo";
import Login from "./components/login/Login";
import Title from "./components/title/title";
import VotePage from "./components/votePage/votePage";
import Hamburger from "./components/navbar/Hamburger";
import LoggedInHamburger from "./components/navbar/LoggedInHamburger";
import LogoThumb from "./components/logoThumb/logoThumb";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Dashboard from "./components/dashboard/Dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/react-hooks";
import { setContext } from "@apollo/client/link/context";
import auth from "./utils/auth";

const link = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.loggedIn());

  return (
    <ApolloProvider client={client}>

      {!isLoggedIn ? (
        <>
          <HomepageLogo />

          <Login setLoggedIn={() => { console.log("if there is justice in the universe this will print"); setIsLoggedIn(true); }} />
        </>
      ) : (
        <Router>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Switch>
              <Route exact path="/">
                <Hamburger />
                <HomepageLogo />
              </Route>
              <Route exact path="/poll">
                <LoggedInHamburger />
                <LogoThumb />
                <Title />
                <VotePage />
                <Footer />
              </Route>
              <Route exact path="/dashboard">
                <LoggedInHamburger />
                <LogoThumb />
                <Dashboard />
                <Footer />

              </Route>
              <Route exact path="/contact">
                <LoggedInHamburger />
                <Contact />
                <Footer />

              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </ApolloProvider>
  );
}

export default App;
