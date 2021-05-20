import TopNav from "../Nav/TopNav/TopNav";
import "./stylesHeader.css";

export default function Header() {
  return (
    <div>
      <TopNav />
      <div className="headerTitleSection">
        <h1 className="headerTitleSection-title">
          Create the extra space you’ve always wanted.
        </h1>
      </div>
    </div>
  );
}
