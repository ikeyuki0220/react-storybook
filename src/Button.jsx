import "./Button.css";

export const Button = ({ label = "", backgroundColor = "" }) => {
  return (
    <a href="" className="btn" data-background-color={backgroundColor}>
      {label}
    </a>
  );
};
