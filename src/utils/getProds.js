export const getProds = async (path) => {
  const res = await fetch(`https://fakestoreapi.com/products`+ path);
  if (res.ok) {
    const data = await res.json();
    return data;
  }
};
