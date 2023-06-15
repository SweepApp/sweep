import { useLocation } from "react-router-dom";

export default function Upperbar(props) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div id="upperbar">
      {splitLocation[1] === "details" && (
        <button className="no" onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      )}
      <h2>{props.title}</h2>
    </div>
  );
}
