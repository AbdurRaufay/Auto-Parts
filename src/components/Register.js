import { React, useState } from "react";
import registermiddle from "../assets/img/regmiddle.png";
import regbackmiddle from "../assets/img/regbackmiddle.png";
import lgN from "../assets/img/regN.png";
import regyoutube from "../assets/img/youtubereg.png";
import dottedimg from "../assets/img/dotted.png";
import bottomright from "../assets/img/bottomrightimg.png";
import lgsquareshape from "../assets/img/regsquareshape.png";
import cross from "../assets/img/cross.png";
import mobilemg from "../assets/img/mobilemg.png";
import {
  Col,
  Container,
  Row,
  Input,
  FormGroup,
  Form,
  Button,
  Label,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import {  toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
const Register = () => {
  const navigate=useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const data = await axios.post(
        "/api/register",
        {
          firstName,
          lastName,
          email,
          password,
        },
        config
      );
      console.log(data, "data");
      toast.success("Your Account Successfully Created");
      setFirstName("")
      setLastName("")
      setPassword("")
      setEmail("")
      navigate("/login")
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col md="6" className="px-0 d-md-flex d-none">
          <div className="auth__form__bg auth__form__spec d-flex justify-content-center align-items-center">
            <img
              src={regbackmiddle}
              alt=""
              className="auth__form__bg__middle--img "
            />
            <img
              src={registermiddle}
              alt=""
              className="auth__form__bg__rgman--img position-absolute img-fluid"
            />
            <img
              src={regyoutube}
              alt=""
              className="auth__form__bg__regyoutube--img "
            />
            <div className="auth__form__bg__lgN ">
              <img src={lgN} alt="" className="w-100" />
            </div>
            <div className="auth__form__bg__middle__square">
              <img
                src={lgsquareshape}
                alt="square top"
                className="img-fluid w-75"
              />
            </div>
            <img src={cross} alt="" className="auth__form__bg__cross" />
            <div>
              <img
                src={dottedimg}
                alt=""
                className="auth__form__bg__dotted--img"
              />
            </div>
            <div>
              <img
                src={bottomright}
                alt=""
                className="auth__form__bg__halfsqr--img"
              />
            </div>
          </div>
        </Col>
        {/* small screen */}
        <Col md="6" className="px-0 d-md-none d-flex">
          <div className="auth__form__bg d-flex justify-content-center align-items-center">
            <div className="auth__form__bg__mobile">
              <img
                src={mobilemg}
                alt=""
                className="auth__form__bg__mobile__obg"
              />
              <img
                src={registermiddle}
                alt=""
                className="auth__form__bg__mobile__regmobile position-absolute "
              />
              <img
                src={cross}
                alt=""
                className="auth__form__bg__mobile__crossmb"
              />
              <img
                src={lgsquareshape}
                alt="square top"
                className="img-fluid  auth__form__bg__mobile__squaremb"
              />
            </div>
          </div>
          {/* <img src={lglock} alt="" className="auth__form__bg__lglockmob--img img-fluid" /> */}
        </Col>
        <Col md="6" className="px-0 auth__form d-flex">
          <div className="auth__form__rightsection m-auto">
            <h3 className="auth__form__rightsection__head mb-4 mt-5 mr-auto">
              Create an account
            </h3>
            <Form onSubmit={submitHandler}>
              <Row>
                <Col md="6" sm="6" xs="6">
                  <FormGroup>
                    <Input
                      placeholder="First Name"
                      type="text"
                      required
                      className=" auth__form__rightsection__input"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="6" xs="6">
                  <FormGroup>
                    <Input
                      placeholder="Last Name"
                      required
                      type="text"
                      className=" auth__form__rightsection__input"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input
                  placeholder="Email"
                  required
                  type="email"
                  className=" auth__form__rightsection__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Password"
                  required
                  type="password"
                  className=" auth__form__rightsection__input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup check className="py-3">
                <Input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      document.getElementById(
                        "signup_btn"
                      ).style.pointerEvents = "visible";
                    } else {
                      document.getElementById(
                        "signup_btn"
                      ).style.pointerEvents = "none";
                    }
                  }}
                  className="auth__form__rightsection__checkbox--input"
                />{" "}
                <Label
                  check
                  className=" auth__form__rightsection__checkbox__label"
                >
                  By creating an account you agree to the
                  <Link
                    to="#"
                    className="auth__form__rightsection__checkbox__label--link"
                  >
                    {" "}
                    terms of use
                  </Link>
                  <span className="auth__form__rightsection__checkbox__label--span">
                    {" "}
                    and our
                  </span>
                  <Link
                    to="#"
                    className="auth__form__rightsection__checkbox__label--link"
                  >
                    privacy policy
                  </Link>
                </Label>
              </FormGroup>
              <div className="text-center">
                {/* <Link to="#"> */}
                <Button
                  id="signup_btn"
                  className="auth__form__rightsection__signinbtn  w-100 "
                  // onClick={toggle}
                  type="submit"
                >
                  Sign Up
                  {/* {loading ? <Spinner size="sm" /> : "Sign up"} */}
                </Button>
                {/* </Link> */}
              </div>
            </Form>
            <Row>
              <div className="text-center auth__form__rightsection__dntaccount mt-3 ml-auto">
                Don't have an account?
                <Link
                  to="/login"
                  className="ml-2  auth__form__rightsection__link"
                >
                  Sign in
                </Link>
              </div>
            </Row>
            {/*  */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
