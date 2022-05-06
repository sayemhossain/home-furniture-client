import { useEffect, useState } from "react";

const useFurnitureDetails = ({ furnitureId }) => {
  console.log(furnitureId);
  const [furniture, setFurniture] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/furnitures/${furnitureId}`)
      .then((res) => res.json())
      .then((data) => setFurniture(data));
  }, [furnitureId]);
  return [furniture];
};
export default useFurnitureDetails;
