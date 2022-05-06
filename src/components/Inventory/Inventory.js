import React from "react";
import { useParams } from "react-router-dom";
import useFurnitureDetails from "../../hooks/useFurnitureDetails";

const Inventory = () => {
  const furnitureId = useParams();
  const [furniture] = useFurnitureDetails(furnitureId);
  return <div>{furniture.name}</div>;
};

export default Inventory;
