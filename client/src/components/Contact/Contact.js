"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
require("./Contact.scss");
const Contact = () => {
    return (<div className="contact-wrapper">
      <div className="form-container">
        <div className="left">
          <h2>We help you buy or sell your property quickly</h2>
        </div>
        <div className="right">
          <form action="">
            <h2>Get in Touch</h2>
            <p>
              Fill out this form and one of our agents will be in touch with you
              in latest 1 hour from your inquiry.
            </p>
            <div>
              <input type="text" name="" id="" placeholder="your name"/>
            </div>
            <div>
              <input type="text" name="" id="" placeholder="your email"/>
            </div>
            <div>
              <input type="text" name="" id="" placeholder=" your phone"/>
            </div>
            <div>
              <textarea rows={8} placeholder="your message"/>
            </div>
          </form>
        </div>
      </div>
    </div>);
};
exports.Contact = Contact;
