import "./stylesSectionTitle.css";

export default function SectionTitle({ text, color, line }) {
  const textColor = color ? color : "#000";
  return (
    <h2 className="sectionTitle" style={{ color: textColor }}>
      {text ? text : "Title"}
      {line && (
        <span className="sectionTitle-line" style={{ background: textColor }} />
      )}
    </h2>
  );
}
