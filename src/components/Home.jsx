import { useContext } from "react";
import userContext from "../userContext";

const components = {
  Home: function () {
    const { user } = useContext(userContext);
    return (
      <>
        <h1>Homepage</h1>
        <h3>Hello {user}</h3>
      </>
    );
  }
};

export default components;
