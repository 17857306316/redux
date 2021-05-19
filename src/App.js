import axios from "axios";
import React, { useEffect } from "react";
import { request } from "./axios/request";
function App() {
  useEffect(() => {
    request({
      url: "/posts/1",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div className="App">1</div>;
}

export default App;
