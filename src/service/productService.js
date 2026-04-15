import Headphone from '../assets/Headphone.jpg'

console.log(Headphone)

export const fetchProducts = async () => {
  await new Promise((res) => setTimeout(res, 800));

  return [
    {
      id: 1,
      name: "Headphones x-28m",
      price: 149.99,
      image: {Headphone},
      featured: true,
      description: "Superb sound, sleek design, noise cancellation."
    },
    {
      id: 2,
      name: "eWatch SF 4",
      price: 349.99,
      image: "/images/watch.png",
      featured: false,
      description: "Smartwatch with fitness tracking."
    }
  ];
};