import React from "react";
import Notes from "./Notes";
const Home = (props) => {
  const { Showalert } = props;
  return (
    <div>
      <Notes Showalert={Showalert} />
    </div>
  );
};
export default Home;
