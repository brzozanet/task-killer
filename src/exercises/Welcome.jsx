import PropTypes from "prop-types";

export function Welcome({ children }) {
  return <p>Welcome {children}!</p>;
}

Welcome.propTypes = {
  children: PropTypes.string,
};
