import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setContact((preVal) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preVal.lName
        };
      } else if (name === "lName") {
        return {
          fName: preVal.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>

      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={handleChange}
        />

        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={handleChange}
        />

        <input name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
