import { useEffect, useState } from "react";

const useFurniture = () => {
  const [furnitures, setFurnitures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://lit-brook-11922.herokuapp.com/furnitures")
      .then((res) => res.json())
      .then((data) => {
        setFurnitures(data);
        setLoading(false);
      });
  }, [furnitures]);
  return [furnitures, setFurnitures, loading, setLoading];
};
export default useFurniture;
