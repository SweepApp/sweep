import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Upperbar from "../components/Upperbar";

export default function Home() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.usersData.token);

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  return (
    <>
      <Upperbar title="Duo" />
      <div className="Profile">

      </div>
    </>
  )
}