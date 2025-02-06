const efikIbibioMeals = [
  {
    category: "Soups & Swallows",
    items: [
      { name: "Editan Soup", price: "₦15,500" },
      { name: "Afang Soup", price: "₦17,500" },
      { name: "Atama Soup", price: "₦13,500" },
      { name: "Ukodo (Plantain Pepper Soup)", price: "₦10,000" },
      { name: "Fisherman Soup", price: "₦15,000" },
      { name: "Anyan Ekpang", price: "₦5,500" },
      { name: "Ọtọng Soup", price: "₦10,000" },
      { name: "Edikang Ikong", price: "₦14,500" },
      { name: "Afia Efere (White Pepper Soup)", price: "₦13,000" },
      { name: "Ofe Ọha", price: "₦16,000" },
      { name: "Ofe Owerre", price: "₦35,000" },
      { name: "Ofe Onugbu", price: "₦14,500" },
      { name: "Egusi Soup (Bitterleaf)", price: "₦15,000" },
      { name: "SeaFood Okro Soup", price: "₦30,000" },
      { name: "Ukwọghọ Etidod", price: "₦14,000" },
      { name: "Atama Abak", price: "₦10,000" },
      {name:"Goat Meat Peppersoup", price:"₦10,000"},
      {name: "Chicken Peppersoup", price: "₦13,000"},
      {name: "Turkey Peppersoup", price: "₦15,000"},
      {name: "Fresh Fish Peppersoup", price: "₦13,000"},
    ],
  },
  {
    category: "Breakfast Menu",
    items:  [
        {name: "Akara with akamu/custard", price: "₦7,500"},
        { name: "Moi Moi with akamu/custard/gari Ijebu", price: "₦12,500" },
      { name: "Buns with Tea", price: "₦4,000" },
      { name: "Yam(Fried or Boiled) with Scrambled Eggs", price: "₦13,000" },
      {name: "Plantain(Fried or Boiled) with Scrambled Eggs", price: "₦9,500"},
//       { name: "Moi Moi with akamu/custard/gari Ijebu", price: "₦12,500" },
//     { name: "Buns with Tea", price: "₦4,000" },
//     { name: "Yam(Fried or Boiled) with Scrambled Eggs", price: "₦13,000" },
//     {name: "Akara with akamu/custard", price: "₦7,500"},
//     { name: "Moi Moi with akamu/custard/gari Ijebu", price: "₦12,500" },
//   { name: "Buns with Tea", price: "₦4,000" },
//   { name: "Yam(Fried or Boiled) with Scrambled Eggs", price: "₦13,000" },
  
    
      
    ],
  },
  {
    category: "Swallow Options",
    items: [
      { name: "Fufu", price: "₦1,500" },
      { name: "Garri", price: "₦2,000" },
      { name: "Pounded Yam", price: "₦3,000" },
    ],
  },
  {
    category: "Rice & Starch Meals",
    items: [
      { name: "Coconut Rice", price: "₦13,500" },
      { name: "Native Jollof Rice (Efik Style)", price: "₦13,500" },
      { name: "Ekpan Nkukwo (Water Yam Pottage)", price: "₦14,500" },
      { name: "Rice with Stew", price: "₦7,000" },
    ],
  },
  {
    category: "Protein & Side Dishes",
    items: [
      { name: "Goat Meat (Nkwobi Style)", price: "₦4,000" },
      { name: "Saika (Cowleg with Plantain)", price: "₦4,000" },
      { name: "Ekọki", price: "₦2,500" },
      { name: "Moi Moi", price: "₦1,500" },
      { name: "Peppered Turkey", price: "₦15,500" },
      { name: "Peppered Chicken", price: "₦13,500" },
      { name: "Peppered Snails", price: "₦10,000/3" },
      { name: "Isi Ewu", price: "₦12,000" },
      { name: "Assorted", price: "10,000" },
    ],
  },
];


import  { useState } from "react";

type CartItem = {
  name: string;
  price: string;
  quantity: number;
};

type OrderType = "pickup" | "delivery";

export default function Menu() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState<OrderType>("pickup");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState<{
    items: CartItem[];
    total: string;
    type: OrderType;
    address?: string;
    time?: string;
  } | null>(null);

  const addToCart = (item: { name: string; price: string }) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemName: string) => {
    setCart(cart.filter((item) => item.name !== itemName));
  };

  const updateQuantity = (itemName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemName);
    } else {
      setCart(
        cart.map((item) =>
          item.name === itemName ? { ...item, quantity } : item
        )
      );
    }
  };

  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) =>
          total +
          parseFloat(item.price.replace("₦", "").replace(",", "")) *
            item.quantity,
        0
      )
      .toLocaleString("en-NG", { style: "currency", currency: "NGN" });
  };

  const handleCheckout = () => {
    if (orderType === "delivery" && !deliveryAddress) {
      alert("Please enter a delivery address.");
      return;
    }
    if (orderType === "pickup" && !pickupTime) {
      alert("Please select a pickup time.");
      return;
    }

    const order = {
      items: cart,
      total: calculateTotal(),
      type: orderType,
      address: orderType === "delivery" ? deliveryAddress : undefined,
      time: orderType === "pickup" ? pickupTime : undefined,
    };

    setOrderDetails(order);
    setOrderPlaced(true);
  };

  if (orderPlaced && orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Order Successful!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your order. Here are the details:
          </p>
          <div className="text-left space-y-4">
            <p>
              <strong>Order Type:</strong>{" "}
              {orderDetails.type === "delivery" ? "Delivery" : "Pickup"}
            </p>
            {orderDetails.type === "delivery" && (
              <p>
                <strong>Delivery Address:</strong> {orderDetails.address}
              </p>
            )}
            {orderDetails.type === "pickup" && (
              <p>
                <strong>Pickup Time:</strong> {orderDetails.time}
              </p>
            )}
            <p>
              <strong>Total:</strong> {orderDetails.total}
            </p>
            <ul>
              {orderDetails.items.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} x {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => setOrderPlaced(false)}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            🥘 MENU
          </h2>
          <p className="text-lg text-gray-600">
            Savor the rich flavors of authentic Nigerian food.
          </p>
        </div>

        {/* Menu Sections */}
        <div className="space-y-8">
          {efikIbibioMeals.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Section Header */}
              <div className="bg-black p-4">
                <h3 className="text-2xl font-bold text-white">
                  {section.category}
                </h3>
              </div>

              {/* Menu Items */}
              <ul className="divide-y divide-gray-100">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-4 hover:bg-yellow-50 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-800">
                        {item.name}
                      </span>
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-semibold text-black">
                          {item.price}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-6">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.name, parseInt(e.target.value))
                      }
                      className="w-16 px-2 py-1 border border-gray-300 rounded-lg"
                      min="1"
                    />
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <div className="mt-6">
              <p className="text-xl font-bold text-black">
                Total: {calculateTotal()}
              </p>

              {/* Order Type Selection */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-black mb-2">
                  Order Type
                </h3>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setOrderType("pickup")}
                    className={`px-4 py-2 rounded-lg ${
                      orderType === "pickup"
                        ? "bg-black text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    Pickup/Eat-In
                  </button>
                  <button
                    onClick={() => setOrderType("delivery")}
                    className={`px-4 py-2 rounded-lg ${
                      orderType === "delivery"
                        ? "bg-black text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    Take-Out/Delivery
                  </button>
                </div>
              </div>

              {/* Delivery Address or Pickup Time */}
              {orderType === "delivery" ? (
                <div className="mt-6">
                  <label
                    htmlFor="deliveryAddress"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    id="deliveryAddress"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter your delivery address"
                  />
                </div>
              ) : (
                <div className="mt-6">
                  <label
                    htmlFor="pickupTime"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pickup Time
                  </label>
                  <input
                    type="datetime-local"
                    id="pickupTime"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              )}

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}