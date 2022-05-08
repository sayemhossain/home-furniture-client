import { useEffect, useState } from "react";

const useFurniture = () => {
  const [furnitures, setFurnitures] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/furnitures")
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }, [furnitures]);
  return [furnitures, setFurnitures, loading];
};
export default useFurniture;
