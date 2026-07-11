import React from "react";
import { useParams, useSearchParams } from "react-router";

function InfoPage() {
  const { id } = useParams();
  const [serarchParams] = useSearchParams();
  const query = serarchParams.get("query");
  const key = serarchParams.get("key");
  return (
    <div>
      InfoPage - {id} - {query} - {key}
    </div>
  );
}

export default InfoPage;
