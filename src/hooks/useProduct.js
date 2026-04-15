import { useEffect, useState } from "react";
import { fetchProducts } from "../service /productService";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    fetchProducts()
      .then((data) => {
        if (mounted) setProducts(data);
      })
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));

    return () => (mounted = false);
  }, []);

  return { products, loading, error };
};