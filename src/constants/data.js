import images from "./images";

export const tierPlan = [
  {
    id: 1,
    image: images.free,
    title: "Free Plan",
    listItems: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    price: "Free",
  },
  {
    id: 2,
    image: images.standard,
    title: "Standard Plan",
    listItems: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
    ],
    price: "$9/mo",
  },
  {
    id: 3,
    image: images.premium,
    title: "Premium Plan",
    listItems: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
      "Get New Features",
    ],
    price: "$12/mo",
  },
];

export const brands = [
  {
    brandImage: images.netflix,
  },
  {
    brandImage: images.reddit,
  },
  {
    brandImage: images.amazon,
  },
  {
    brandImage: images.discord,
  },
  {
    brandImage: images.spotify,
  },
];

// We'll add the reviews section later once we decide how to approach it.

export default { images, tierPlan, brands };
