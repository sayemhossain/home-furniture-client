import { useEffect, useState } from "react";

const useFurniture = () => {
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/furnitures")
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }, []);
  return [furnitures, setFurnitures];
};
export default useFurniture;
