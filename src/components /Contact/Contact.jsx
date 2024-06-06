import "./Contact.css";

function Contact() {
  return (
    <section>
      <div className="contact-container">
        <h1>Contanct Section</h1>
        <form className="">
          <label> Leave Contact Information</label>
          <input placeholder="Full Name" type="text" onSubmit="submit" />
          <input placeholder="Phone Number" type="text" onSubmit="submit" />
          <input placeholder="Email" type="text" onSubmit="submit" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
