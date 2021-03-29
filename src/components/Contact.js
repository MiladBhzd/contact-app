import React from "react";
import "../Contact.css";

const avatar =
  "https://pbs.twimg.com/profile_images/3429216925/8c939abbec650ffcb67cd2984011df3c_400x400.png";
const name = "Milad";
const online = false;

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} />
      <div>
        <h3 className="name">{name}</h3>
        <div className="status">
          <span className={online ? "status-online" : "status-offline"}></span>
          <p className="status-text">{online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;