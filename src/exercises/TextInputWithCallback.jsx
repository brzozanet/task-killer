import PropTypes from "prop-types";
import { useState } from "react";

export function TextInputWithCallback({ onTextChange }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="Type something..."
    />
  );
}

TextInputWithCallback.propTypes = {
  onTextChange: PropTypes.string,
};
