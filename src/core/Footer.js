import React from "react";
import Logo from "../assets/images/nitc-logo.png";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {/* <MDBIcon icon="gem" className="me-3" /> */}
                <img src={Logo} width="60" />
                NIT,Calicut
              </h6>
              <h5>
                <b>Address :</b>
              </h5>
              <p>National Institute of Technology Calicut,</p>
              <p>NIT Campus P.O 673601,</p>
              <p> Kozhikode, India.</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/about" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="https://nitc.ac.in/" className="text-reset">
                  Visit NITC
                </a>
              </p>

              <p>
                <a href="#" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Hostel Office, NITC.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                hms-support@nitc.ac.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9848623321
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Developed and Managed with ❤️ by:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Hostel Website Development Committe.
        </a>
      </div>
    </MDBFooter>

    // <div className="footer">
    //   <Row className="footerRow">
    //     <Col xs={5} className="m-3">
    //       <Row>
    //         <Col xs={2}>
    //           <img src={Logo} width="60" />
    //         </Col>
    //         <Col xs={10} className="mt-3 clgname">
    //           <h5>National Institute of Technology, Calicut</h5>
    //         </Col>
    //       </Row>
    //     </Col>
    //     <Col xs={5} className="m-3">
    //       <div align="center">
    //         <Nav.Link href="/about">About</Nav.Link>
    //         <Nav.Link href="/contact">Contact us</Nav.Link>
    //         This is developed by Hostel Website Development Team.
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
  );
}

export default Footer;
