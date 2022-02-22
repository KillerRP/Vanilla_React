import { useParams } from "react-router-dom";

function withParams(Details) {
  return () => <Details params={useParams()} />;
}

export default withParams;
