import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const [usernameMessage, setUsernameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const today = new Date();
  const oneYearFromToday = new Date();
  oneYearFromToday.setFullYear(today.getFullYear() + 1);

  const validateForm = () => {
    let isValid = true;

    if (username.length > 15) {
      setUsernameMessage("Username should be less than 15 characters");
      isValid = false;
    } else {
      setUsernameMessage("");
    }

    if (!email.endsWith("@questk2.com")) {
      setEmailMessage("Email must end with @questk2.com");
      isValid = false;
    } else {
      setEmailMessage("");
    }

    if (password.length < 8) {
      setPasswordMessage("Password should be at least 8 characters");
      isValid = false;
    } else {
      setPasswordMessage("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordMessage("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordMessage("");
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneMessage("Phone number must be 10 digits only");
      isValid = false;
    } else {
      setPhoneMessage("");
    }

    if (startDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0) || startDate > oneYearFromToday) {
        isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        const formData = {
          username,
          email,
          password,
          phoneNumber,
          startDate: startDate.toDateString(),
        };
        navigate("/dashboard", { state: formData });
      }
  };

  return (
    <div id="container">
      <div className="form-container">
        <h2 className="signup">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {usernameMessage && (
            <>
            <Form.Text className="text-danger">{usernameMessage}</Form.Text> <br />
            </>
          )}

          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@questk2.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailMessage && (
            <>
            <Form.Text className="text-danger">{emailMessage}</Form.Text> <br />
            </>
          )}

          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordMessage && (
            <>
            <Form.Text className="text-danger">{passwordMessage}</Form.Text> <br />
            </>
          )}

          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {confirmPasswordMessage && (
            <>
            <Form.Text className="text-danger">{confirmPasswordMessage}</Form.Text> <br />
            </>
          )}

          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {phoneMessage && (
            <>
            <Form.Text className="text-danger">{phoneMessage}</Form.Text> <br />
            </>
          )}

          <Form.Label>Join Date</Form.Label>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={today}
              maxDate={oneYearFromToday}
              required
            />
          </div>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
