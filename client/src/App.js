import "./App.css";
import React, { useState } from "react";
import HomepageLogo from "./components/HomepageLogo";
import Login from "./components/login/Login";
import Title from "./components/title/title";
import VotePage from "./components/votePage/votePage";
import Hamburger from "./components/navbar/Hamburger";
import Contact from "./components/contact/contact";
import LoggedInHamburger from "./components/navbar/LoggedInHamburger";
import LogoThumb from "./components/logoThumb/logoThumb";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/Dashboard";
import Results from "./components/results/results";
import DashboardCards from "./components/dashboardCards/DashboardCards"
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
  const [setIsLoggedIn] = useState(auth.loggedIn());

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            
            {auth.loggedIn() ? (
              <>
                <Route exact path="/dashboard">
                  <LoggedInHamburger />
                  <LogoThumb />
                  <Dashboard />
                  <DashboardCards />
                  <Footer />
                </Route>
                <Route path="/poll">
                  <LoggedInHamburger />
                  <LogoThumb />
                  <Title />
                  <VotePage />
                  <Footer />
                </Route>
                <Route exact path="/contact">
                  <LoggedInHamburger />
                  <Contact />
                  <Footer />
                </Route>
                <Route exact path="/results">
                  <LoggedInHamburger />
                  <Results />
                  <Footer />
                </Route>
              </>
            ) : (
                <>
                <Route exact path="/">
              <Hamburger />
              <HomepageLogo />
              <>
                <Login
                  setLoggedIn={() => {
                    console.log(
                      "if there is justice in the universe this will print"
                    );
                    setIsLoggedIn(true);
                  }}
                />
              </>
            </Route>
            <Route exact path="/contact">
              <Hamburger />
              <Contact />
              <Footer />
            </Route>
                </>
            )}
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
