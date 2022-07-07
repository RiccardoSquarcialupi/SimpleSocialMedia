import React, { useState } from "react";
import "./RightSide.css";
import NavIcons from "../NavIcons/NavIcons";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      {/* Side Navbar */}

      <NavIcons />
      {/* <TrendCard></TrendCard> */}

      {/* Share <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />buttong */}
    </div>
  );
};

export default RightSide;
