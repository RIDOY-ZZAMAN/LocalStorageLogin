import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { currentLocalStorageUserData } from "../LocalStorgae/AddToDB";

const Home = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const getUserData = currentLocalStorageUserData();
    const parseGetUserData = JSON.parse(getUserData);
    parseGetUserData?.map((item) => setUserName(item.name));
  }, []);

  return (
    <div className="Home">
      <Header userName={userName}></Header>
    </div>
  );
};

export default Home;
