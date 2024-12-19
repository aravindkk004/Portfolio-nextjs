"use client";
import { useState } from "react";
import Gradient from "./Gradient";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: name,
          to_name: "ARAVIND K K",
          from_email: email,
          to_email: "aravind463kk30@gmail.com",
          message: message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Email sent successfully!");
          setLoading(false);
          setEmail("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send email.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-secondary w-full md:pt-[130px] md:pb-[140px] pt-[100px] pb-[50px] md:px-[40px] px-[20px]"
    >
      <Gradient />
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <form className="md:w-[80%] w-[90%] z-[9]" onSubmit={handleForm}>
            <p className="text-white font-bold text-3xl">Get in Touch</p>
            <div>
              <div className="flex flex-col">
                <label className="text-white text-xl mt-5 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="What's your Good name?"
                  className="border-2 px-2 py-3 rounded-md border-primary"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white text-xl mt-5 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="What's your Email address?"
                  className="border-2 px-2 py-3 rounded-md border-primary"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white text-xl mt-5 mb-2">
                  Your Message
                </label>
                <textarea
                  type="text"
                  placeholder="What you want to say?"
                  className="resize-none h-[150px] border-2 px-2 py-3 rounded-md border-primary"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-primary my-5 rounded-md w-full py-2 md:text-xl"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img src="./images/contact.png" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
