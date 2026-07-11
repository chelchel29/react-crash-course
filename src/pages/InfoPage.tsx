import { useNavigate, useParams, useSearchParams } from "react-router";

function InfoPage() {
  const { id } = useParams();
  const [serarchParams] = useSearchParams();
  const query = serarchParams.get("query");
  const key = serarchParams.get("key");

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div>
      InfoPage - {id} - {query} - {key}
      <button onClick={navigateToHome}>click me</button>
    </div>
  );
}

export default InfoPage;
