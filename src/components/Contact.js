import React from "react";

const Contact = () => {
 
  return (
    <form
      className="color_light bk_blue"
      action="https://www.actionforms.io/e/r/contact-wap"
      method="any"
    >
      <h2>Contact</h2>
      <div className="form-group">
        <label>Nom</label>
        <input type="text" className="form-control" name="name" />
      </div>
      <div className="form-group">
        <label>Adresse email</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          name="email"
        />
      </div>
      <div className="form-group">
        <label> Message</label>
        <textarea className="form-control" rows="5" name="message"></textarea>
      </div>
      <div>
        <button type="submit" className="bk_light color_blue">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default Contact;
