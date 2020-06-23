import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput(prevValue => ({ ...prevValue, [name]: value }));
  }

  return (
    <div>
      <form
        onSubmit={event => {
          props.addNote(input);
          setInput({ title: "", content: "" });
          event.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          value={input.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={input.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
