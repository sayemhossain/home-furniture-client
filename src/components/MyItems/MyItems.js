import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `https://lit-brook-11922.herokuapp.com/items?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        setItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
        }
      }
    };
    getItems();
  }, []);
  return (
    <div>
      <h5>my items</h5>
      <h4>Your orders: {items.length}</h4>
    </div>
  );
};

export default MyItems;
