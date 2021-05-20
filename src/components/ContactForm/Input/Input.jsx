import "./stylesInput.css";

export default function Input({
  className,
  label,
  onChange,
  value,
  messageErr,
  onBlur,
}) {
  return (
    <div className={`input ${className}`}>
      <p> {label} </p>
      <input
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        style={{
          borderColor: !!messageErr ? "rgb(243, 136, 136)" : null,
          color: !!messageErr ? "rgb(243, 136, 136)" : null,
        }}
      />
      {!!messageErr && <span> {messageErr} </span>}
    </div>
  );
}
