import React from "react";
import Container from "../components/layout/Container";
import Breadcumb from "../components/layout/Breadcumb";
import Heading from "../components/layout/Heading";
import InputBox from "../components/layout/InputBox";
import Button from "../components/layout/Button";

const Contact = () => {
  return (
    <Container>
      <Breadcumb />
      <div className="w-full md:w-2/5">
        <Heading title="Fill up a Form" />
        <InputBox
          className="mb-6 mt-10"
          title="Name"
          as="input"
          placeholder="Your Name Here"
        />
        <InputBox
          className="mb-6"
          title="Email"
          as="input"
          placeholder="Your Email Here"
        />
        <InputBox
          className="mb-7"
          title="Message"
          as="textarea"
          placeholder="Your Message Here"
        />
        <Button title="Post" />
      </div>
    </Container>
  );
};

export default Contact;
