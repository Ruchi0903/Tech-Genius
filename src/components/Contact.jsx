import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact</h1>
        <form action="">
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Your name here" />
          </div>

          <div>
            <label>Email</label>
            <input type="text" required placeholder="Your email id here" />
          </div>

          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query"
            />
          </div>


          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
