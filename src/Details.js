import { Component } from "react";
// import { withRouter } from "react-router-dom";
import withParams from "./wothParams";
class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    console.log(this.state);

    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const DetailWithRouter = withParams(Details);

export default function DetailWithError() {
  return <DetailWithRouter />;
}

// export default withRouter(Details);

// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const Details = (props) => {
//   const params = useParams();

//   useEffect(() => {
//     fetchData();
//   });

//   async function fetchData() {
//     const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${params.id}`);
//     const json = await res.json();
//     return json.pets[0];
//   }
//   const { animal, breed, city, state, description, name } = props;

//   return (
//     <div className="details">
//       <div>
//         <h1>{name}</h1>
//         <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
//         <button>Adopt {name}</button>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default Details;
