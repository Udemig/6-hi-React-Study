import React, { useEffect, useState } from "react";
import PopupView from "./PopupView";
import axios from "axios";

const PopupController = ({ setShowPopup, userName }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts?user=${userName}`)
      .then((response) => setData(response.data));
  }, [userName]);

  return <PopupView userName={userName} data={data} setShowPopup={setShowPopup} />;
};

export default PopupController;
