import "./app-background.scss";

export default function AppBackground() {
  return (
    <div className="app-background" aria-hidden="true">
      <div className="app-background__orb app-background__orb--1" />
      <div className="app-background__orb app-background__orb--2" />
      <div className="app-background__orb app-background__orb--3" />
    </div>
  );
}
