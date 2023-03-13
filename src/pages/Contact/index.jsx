import { useState } from "react";
import Footer from "../../components/Footer";
import store from "../../store/Context";

export default function Contact() {
  const { contact } = store().data;
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);

  return (
    <div className="page">
      <h1>{contact.title}</h1>
      <p>{contact.information}</p>

      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>

      <form>
        <label htmlFor="name">
          Name:
          <br />
          <input onChange={onChange} type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email:
          <br />
          <input onChange={onChange} type="email" name="email" />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <Footer />
    </div>
  );
}
