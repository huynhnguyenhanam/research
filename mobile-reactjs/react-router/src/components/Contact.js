import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Contact = () => {
  return (
    <div>
      <Modal />
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/alex" className="ui header">
          Alex
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          eaque saepe sed ea ipsum laudantium? Labore dolorem ab pariatur
          deserunt veritatis obcaecati, vero, temporibus quos sequi voluptas
          delectus ipsum repellat.
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/willma" className="ui header">
          Willma
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          eaque saepe sed ea ipsum laudantium? Labore dolorem ab pariatur
          deserunt veritatis obcaecati, vero, temporibus quos sequi voluptas
          delectus ipsum repellat.
        </p>
      </div>
    </div>
  );
};

export default Contact;
