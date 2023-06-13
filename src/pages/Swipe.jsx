import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Upperbar from "../components/Upperbar";

export default function Home() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.usersData.token);

  if (!token) {
    navigate("/login", { replace: true });
  }

  return (
    <>
      <Upperbar title="Duo" />
      <div className="Profile">

      </div>
    </>
  )
}