import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://raw.githubusercontent.com/shivam66151/Weather-App/71a7d5d232cebc9e0879d1e325355d125db7b0d7/evergreen.svg"
        alt=""
      />
    </div>
  );
}