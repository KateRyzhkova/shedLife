import "./stylesTextArea.css";

export default function TextArea({ value, onChange }) {
  return (
    <div className="textArea">
      <p>Message:</p>
      <textarea value={value} onChange={onChange} />
    </div>
  );
}
