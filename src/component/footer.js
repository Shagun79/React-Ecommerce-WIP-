import React from "react";
const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="box-top" style={{ bottom: `${props.height}rem` }}>
          <div className="text-left">
            <p>Ready to get started?</p>
            <p>Talking to us today</p>
          </div>
          <div className="btn-right">
            <button className="get-start"> GET STARTED</button>
          </div>
        </div>

        <div className="main-footer">
          <div className="box-1">
            {" "}
            <p>Thapa Technical</p>{" "}
            <p>
              {" "}
              Lorem ipsum dolor, sit amet <br /> consectetur adipiscing elit.
            </p>{" "}
          </div>
          <div className="box-2">
            <p>Subcribe to get important updates</p>
            <input
              type="mail"
              name="mail"
              autoComplete="off"
              placeholder="YOUR E-MAIL"
              className="your-mail"
            />{" "}
            <br /> <br />
            <button className="Btn"> SUBSCRIBE</button>{" "}
          </div>
          <div className="box-3">
            {" "}
            <p> Follow Us</p>{" "}
            <div className="icons">
              {" "}
              <a href="#" className="fa fa-facebook   iconN"></a>
              <a href="#" className="fa fa-twitter iconN">
                {" "}
              </a>{" "}
              <a href="#" className="fa fa-instagram iconN"></a>
            </div>
          </div>
          <div className="box-4">
            {" "}
            <p>Call Us</p> <p> +91 12345678</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
