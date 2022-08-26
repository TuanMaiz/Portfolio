import React from "react";
import "./Contact.css";
import ContactImg from "../assets/img/contact-img.svg";
function Contact() {
  return (
    <section id="contact" className="h-fit flex justify-center items-center py-10">
      <img className="contact-img mr-20" src={ContactImg} alt="" />
      <div>
        <h2 className="text-white mb-4 text-4xl font-semibold">Contact me</h2>
        <form>
            <div className="flex justify-between">
                <input type="text" className="col-half mr-2" placeholder="Your name" />
                <input type="email" className="col-half" placeholder="Your email" />
            </div>
            <input type="text" className="w-full" placeholder="Description" />
            <input type="text" className="w-full message" placeholder="Message" />
        </form>
        <button className="bg-white py-4 px-10">Send</button>
      </div>

    </section>
  );
}

export default Contact;
