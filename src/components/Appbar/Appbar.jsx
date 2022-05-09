import "./Appbar.css";

export function Appbar() {
  return (
    <header>
      <div className="headerContent">
        <span className="headerName">Intro to ReactJS</span>
        <div className="navLinks">
          <a href="#Home">About</a>
          <a href="#Projects">Projects</a>
        </div>
      </div>
    </header>
  );
}
