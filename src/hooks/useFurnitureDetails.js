import { useEffect, useState } from "react";

const useFurnitureDetails = ({ furnitureId }) => {
  const [furniture, setFurniture] = useState([]);
  useEffect(() => {
    fetch(`https://lit-brook-11922.herokuapp.com/furnitures/${furnitureId}`)
      .then((res) => res.json())
      .then((data) => setFurniture(data));
  }, [furnitureId, furniture]);
  return [furniture];
};
export default useFurnitureDetails;
