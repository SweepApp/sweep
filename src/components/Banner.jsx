export default function Banner(props) {
  return (
    <div className="banner">
      <img src={props.image} alt={props.alt} />
    </div>
  );
}