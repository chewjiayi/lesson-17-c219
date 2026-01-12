import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const courseRef = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    navigate("/confirmed", {
      state: {
        name: nameRef.current.value,
        email: emailRef.current.value
      }
    });
  }

  return (
    <div className="container">
      <h1>Registration</h1>
      <p>
        Please register the course you are interested!
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={nameRef} required />
        </label>

        <label>
          Email:
          <input type="email" ref={emailRef} required />
        </label>

        <label>
          Course:
          <input type="text" ref={courseRef} required />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
