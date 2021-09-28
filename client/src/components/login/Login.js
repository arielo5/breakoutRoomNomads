import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../../utils/mutations";
import { ADD_USER } from "../../utils/mutations";

export default function Login() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN);
  const [addUser, { err }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { dataL } = await login({ variables: { ...userFormData } });
      console.log(dataL);
      Auth.login(dataL.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    try {
      const { dataA } = await addUser({ variables: { ...userFormData } });
      console.log(dataA);
      Auth.login(dataA.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="loginContainer">
      <div className="login" alt="LOGIN">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div>Login</div>
            </div>
            <div className="flip-card-back">
              {/* <div className="margin">Email:</div>
              <input className="margin"></input>
              <div className="margin">Password:</div>
              <input className="margin"></input>
              <button className="margin">Let's Go!</button>
             */}
              <Form
                noValidate
                validated={validated}
                onSubmit={handleFormSubmit}
              >
                <Alert
                  dismissible
                  onClose={() => setShowAlert(false)}
                  show={showAlert}
                  variant="danger"
                >
                  Something went wrong with your login credentials!
                </Alert>
                <Form.Group>
                  <div className="margin">Email:</div>
                  <Form.Control
                    type="text"
                    placeholder="Your email"
                    name="email"
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Email is required!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <div className="margin">Password:</div>
                  <Form.Control
                    type="password"
                    placeholder="Your password"
                    name="password"
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Password is required!
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  disabled={!(userFormData.email && userFormData.password)}
                  type="submit"
                  variant="success"
                >
                  Let's Go!
                </Button>
                {error && <div>Login failed</div>}
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="login" alt="SIGNUP">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div>Signup</div>
            </div>
            <div className="flip-card-back">
              {/* <div className="margin">First Name:</div>
              <input className="margin"></input>
              <div className="margin">Last Name:</div>
              <input className="margin"></input>
              <div className="margin">Email:</div>
              <input className="margin"></input>
              <div className="margin">Password:</div>
              <input className="margin"></input>
              <div className="margin">Confirm Password:</div>
              <input className="margin"></input>
              <button className="margin">Let's Go!</button> */}

              <Form
                noValidate
                validated={validated}
                onSubmit={handleFormSubmit}
              >
                {/* show alert if server response is bad */}
                <Alert
                  dismissible
                  onClose={() => setShowAlert(false)}
                  show={showAlert}
                  variant="danger"
                >
                  Something went wrong with your signup!
                </Alert>

                <Form.Group>
                <div className="margin">Name:</div>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="firstName"
                    onChange={handleInputChange}
                    value={userFormData.firstName}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Name is required!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                <div className="margin">Last Name:</div>
                  <Form.Control
                    type="text"
                    placeholder="Your Last Name"
                    name="lastName"
                    onChange={handleInputChange}
                    value={userFormData.lastName}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Last Name is required!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                <div className="margin">Email:</div>
                  <Form.Control
                    type="email"
                    placeholder="Your email address"
                    name="email"
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Email is required!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                <div className="margin">Password:</div>
                  <Form.Control
                    type="password"
                    placeholder="Your password"
                    name="password"
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Password is required!
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  disabled={
                    !(
                      userFormData.firstName &&
                      userFormData.lastName &&
                      userFormData.email &&
                      userFormData.password
                    )
                  }
                  type="submit"
                  variant="success"
                >
                  Submit
                </Button>
                {err && <div>Sign up failed</div>}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
