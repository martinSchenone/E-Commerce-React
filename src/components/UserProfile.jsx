import { useEffect ,useContext} from "react";
import { CommerceContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const navigate = useNavigate();
  const { userValues } = useContext(CommerceContext);
  console.log(userValues);
  useEffect(() => {
    !userValues && navigate("/login");
  }, [userValues]);

  return <div>UserProfile</div>;
};
