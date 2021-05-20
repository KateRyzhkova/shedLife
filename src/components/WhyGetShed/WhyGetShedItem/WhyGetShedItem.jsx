import "./stylesWhyGetShedItem.css";

export default function WhyGetShedItem({ color, text, img }) {
  return (
    <div className="whyGetShedItem" style={{ background: color }}>
      <img src={img} alt="" />
      <p className="whyGetShedItem-text">{text}</p>
    </div>
  );
}
