export default function Upperbar(props) {
  return (
    <div id="upperbar">
      {props.button && (
        <button className="no" onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      )}
      <h2>{props.title}</h2>
    </div>
  );
}
