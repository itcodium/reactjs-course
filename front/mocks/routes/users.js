// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

// products data
const PRODUCTS = [
  {
    id: 1,
    category: 1,
    title: "John",
    price: 25.3,
    stock: 0,
    imageUrl: "https://live.staticflickr.com/4115/4777704064_7c9eacc798_b.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
  },
  {
    id: 2,
    category: 2,
    title: "Joe",
    price: 5.3,
    stock: 2,
    imageUrl: "https://live.staticflickr.com/4027/4518144704_273b98ef81_w.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
  },
  {
    id: 3,
    category: 2,
    title: "Doen",
    price: 34.5,
    stock: 5,
    imageUrl: "https://live.staticflickr.com/8471/8076906297_1c3fcd7961_n.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
  },
  {
    id: 4,
    category: 2,
    title: "Doe",
    price: 33.5,
    stock: 7,
    imageUrl: "https://live.staticflickr.com/7888/46485996115_90ef86c2cf_w.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
  },
  {
    id: 5,
    category: 3,
    title: "Do en1b",
    price: 77.5,
    stock: 6,
    imageUrl: "https://live.staticflickr.com/3737/12410422355_13ed826e59_b.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
  },
  {
    id: 6,
    category: 3,
    title: "Doe n2b",
    price: 145.5,
    stock: 4,
    imageUrl: "https://live.staticflickr.com/3786/8783496185_eede57d206_b.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
  },
  {
    id: 7,
    category: 1,
    title: "Doe n3",
    price: 93.5,
    stock: 3,
    imageUrl: "https://live.staticflickr.com/3268/2394450343_b250eb2666_b.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
  },
  {
    id: 8,
    category: 1,
    title: "Do en4",
    price: 44.5,
    stock: 1,
    imageUrl: "https://live.staticflickr.com/4753/40483032541_02f3f584a6_b.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
  },
];

module.exports = [
  {
    id: "get-products", // id of the route
    url: "/api/products", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: PRODUCTS, // body to send
        },
      },
      {
        id: "error", // id of the variant
        response: {
          status: 400, // status to send
          body: {
            // body to send
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "get-product", // id of the route
    url: "/api/products/:id", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: PRODUCTS[0], // body to send
        },
      },
      {
        id: "real", // id of the variant
        response: (req, res) => {
          const userId = req.params.id;
          const product = PRODUCTS.find((userData) => userData.id === Number(userId));
          if (product) {
            res.status(200);
            res.send(product);
          } else {
            res.status(404);
            res.send({
              message: "User not found",
            });
          }
        },
      },
    ],
  },
];
