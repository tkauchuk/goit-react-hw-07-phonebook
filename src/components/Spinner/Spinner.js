import { Fragment } from "react";
import Loader from 'react-loader-spinner';

function Spinner () {
  return (
    <Fragment>
      <Loader
        type="ThreeDots"
        width={40}
        height={40}
        color="#D4E09B"
      />
    </Fragment>
  );
}

export default Spinner;