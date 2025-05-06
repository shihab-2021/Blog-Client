import "./Contact.css";

const Contact = () => {
  return (
    <div className="myContainer">
      <div className="contact-us">Contact Us</div>
      <h1>Let's Start a Conversation</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>
      <div className="contact-info">
        <div className="working-hours">
          <p className="label">Working hours</p>
          <p className="hours">
            Monday To Friday <br /> 9:00 AM to 8:00 PM
          </p>
          <p className="support">Our Support Team is available 24/7</p>
        </div>
        <div className="contact-details">
          <p className="label">Contact Us</p>
          <p className="details">020 7793 2905</p>
          <p className="email">hello@finsweet.com</p>
        </div>
      </div>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Your Email" required />
        <select required>
          <option value="" disabled selected>
            Query Related
          </option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="other">Other</option>
        </select>
        <textarea placeholder="Message" required />
        <div className="btn">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
