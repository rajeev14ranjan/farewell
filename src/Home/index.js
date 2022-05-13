import "./index.css";
import { useState } from "react";
import Messages from "../Messages";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

const Home = () => {
  const [showMessages, setShowMessages] = useState(false);
  if (showMessages) {
    return <Messages />;
  }
  return (
    <div className="home">
      <label>
        Niranjan, this is what your colleagues have to say about you ...
      </label>
      <ChevronDoubleDownIcon
        className="icon"
        onClick={() => setShowMessages(true)}
      />
    </div>
  );
};
export default Home;
