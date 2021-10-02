import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../../App.css"
import "./newPoll.css"
import Auth from "../../utils/auth";
import { SAVE_POLL } from "../../utils/mutations"
import { useQuery, useMutation } from "@apollo/react-hooks";

function NewPoll(props) {

    const [pollFormData, setPollFormData] = useState({
        pollName: ""
      });
      const [validated] = useState(false);
      const [showAlert, setShowAlert] = useState(false);
      const [poll, { error }] = useMutation(SAVE_POLL);

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPollFormData({ ...pollFormData, [name]: value });
      };

      const handleFormSubmit = (form, event) => {
        event.preventDefault();
    
        if (form === "poll") {
          poll({ variables: { ...pollFormData } });
        } 
    
        setPollFormData({
          pollName: ""
        });
      };

      useEffect(() => {
        if (poll?.login?.token?.length > 0 ) {
          Auth.login(
            poll ? poll.login.token : ""
          );
          props.setPollCreated()
        }
      }, [props, poll]);

    return (
        <>
            <section>
                <div>
                    <h1 classlist="whiteText" style={{ fontSize: "50px", fontFamily: "'Architects Daughter', cursive" }}>Create New Poll</h1>
                </div>
                <hr></hr>
                <h3 style={{ fontSize: "30px", fontFamily: "'Architects Daughter', cursive" }}>Poll Name</h3>
                <Form
                noValidate
                validated={validated}
                onSubmit={(e) => handleFormSubmit("poll", e)}
              >
                <Alert
                  dismissible
                  onClose={() => setShowAlert(false)}
                  show={showAlert}
                  variant="danger"
                >
                  Something went wrong with your name credentials!
                </Alert>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Poll Name"
                    name="pollName"
                    onChange={handleInputChange}
                    value={pollFormData.pollName}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Name is required!
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  disabled={!(pollFormData.pollName)}
                  type="submit"
                  variant="success"
                >
                  Submit
                </Button>
                {error && <div>Failed</div>}
              </Form>
            </section>
        </>
    )
}
export default NewPoll