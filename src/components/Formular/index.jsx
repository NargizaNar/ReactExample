import { useState } from "react";

export default function Formular() {
  const [user, setUser] = useState({
    name: "test name",
    email: "test email",
  });

  return (
    <>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <form className="contact">
        <h1>This is Contact</h1>
        <button>Submit</button>
      </form>
    </>
  );
}
