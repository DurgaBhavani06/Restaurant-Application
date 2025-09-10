console.log("Welcome to DINE DIVINE");

let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


const mainCourses = [
  {
    name: "Gobi Manchurian",
    description: "Crunchy cauliflower tossed in a spicy Indo-Chinese sauce.",
    price: 180,
    image: "images/gobi.jpg"
  },
  {
    name: "Paneer Tikka",
    description: "Soft paneer cubes grilled to smoky perfection.",
    price: 220,
    image: "images/paneer.webp"
  },
  {
    name: "Crispy Corn",
    description: "Golden-fried sweet corn kernels with a tangy, spicy seasoning — irresistibly crunchy!",
    price: 240,
    image: "images/crispycorn.png"
  },
  {
    name: "Mushroom Pepper Fry",
    description: "Juicy mushrooms sautéed with crushed pepper and aromatic South Indian spices.",
    price: 245,
    image: "images/mushroom pepper fry.png"
  },
  {
    name: "Chilli Chicken",
    description: "Juicy chicken chunks tossed in a zesty Indo-Chinese chilli sauce — bold and fiery.",
    price: 265,
    image: "images/chilli.jpg"
  },
  {
    name: "Chicken 65",
    description: "Crispy South Indian-style chicken bites.",
    price: 250,
    image: "images/chicken65.png"
  },
  {
    name: "Boiled Egg Fry",
    description: "Halved eggs pan-fried with spices and herbs for a quick, tasty treat.",
    price: 150,
    image: "images/boiled egg.png"
  },
  {
    name: "Egg Pakoda",
    description: "Sliced boiled eggs coated in a spiced gram flour batter and deep-fried till golden.",
    price: 200,
    image: "images/egg pakoda.jpg"
  },
  {
    name: "Roti",
    description: "Traditional whole wheat flatbread, soft and light — perfect with any curry.",
    price: 20,
    image: "images/roti.png"
  },
  {
    name: "Butter Naan",
    description: "Soft, fluffy tandoori bread brushed with melted butter — rich and satisfying.",
    price: 30,
    image: "images/butter naan.png"
  },
  {
    name: "Phulka",
    description: "Light and puffed Indian bread made without oil — simple, healthy, and homely.",
    price: 20,
    image: "images/phulka.png"
  },
  {
    name: "Kaju Curry",
    description: "Creamy and rich curry with smooth cashew paste and mild spices.",
    price: 280,
    image: "images/kaju curry.png"
  },
  {
    name: "Mushroom Curry",
    description: "Tender mushrooms simmered in a flavorful onion-tomato gravy.",
    price: 260,
    image: "images/mushroom.png"
  },
  {
    name: "Paneer Curry",
    description: "Soft paneer cubes cooked in a luscious, spiced tomato-based sauce.",
    price: 240,
    image: "images/paneer curry.jpeg"
  },
  {
    name: "Methichaman Curry",
    description: "A delightful blend of fresh fenugreek leaves with paneer in a creamy gravy.",
    price: 230,
    image: "images/methichaman.png"
  },
  {
    name: "Butter Chicken Curry",
    description: "Tender chicken simmered in a creamy tomato and butter sauce — classic comfort food.",
    price: 290,
    image: "images/butter chicken.png"
  },
  {
    name: "Chicken Mughlai Curry",
    description: "A rich, aromatic curry with a royal blend of spices and creamy texture.",
    price: 270,
    image: "images/mughali.png"
  },
  {
    name: "Mutton Kurma Curry",
    description: "Slow-cooked mutton in a fragrant, spiced coconut-based gravy.",
    price: 300,
    image: "images/mutton kurma.png"
  },
  {
    name: "Gongura Mutton Curry",
    description: "Tangy and spicy mutton curry made with flavorful gongura leaves.",
    price: 260,
    image: "images/gongura mutton.jpeg"
  },
  {
    name: "Kaju Nut Curry Biryani",
    description: "Flavored kaju with some masala rice.",
    price: 230,
    image: "images/kajunut biryani.jpg"
  },
  {
    name: "Gongura Biryani",
    description: "A tangy and spicy Andhra-style biryani infused with sour gongura leaves and tender meat or veggies.",
    price: 250,
    image: "images/gongura biryani.jpg"
  },
  {
    name: "Veg Biryani",
    description: "A tangy and spicy Andhra-style biryani infused with sour gongura leaves and tender meat or veggies.",
    price: 200,
    image: "images/veg biryani.webp"
  },
  {
    name: "Egg Biryani",
    description: "A flavored egg masala rice.",
    price: 230,
    image: "images/egg biryani.jpg"
  },
  {
    name: "Chicken Dum Biryani",
    description: "Slow-cooked chicken and fragrant basmati rice, bursting with rich spices and aroma.",
    price: 300,
    image: "images/chicken dum.webp"
  },
  {
    name: "Hyderabadi Dum Biryani",
    description: "The royal biryani from Hyderabad — a perfect blend of spices, meat, and rice sealed with love.",
    price: 330,
    image: "images/hyderabadi dum.jpg"
  },
  {
    name: "Mutton Biryani",
    description: "Tender mutton cooked to perfection with saffron-infused rice in traditional dum style.",
    price: 300,
    image: "images/mutton.jpg"
  },
  {
    name: "Curd Rice",
    description: "Slow-cooked chicken and fragrant basmati rice, bursting with rich spices and aroma.",
    price: 300,
    image: "images/curd rice.jpg"
  }
];

const desserts = [
  {
    name: "Chocolate Milkshake",
    description: "Rich and creamy chocolate blended to perfection.",
    price: 120,
    image: "images/chocolate milkshake.jpg"
  },
  {
    name: "Oreo Milkshake",
    description: "Crunchy Oreo cookies in chilled milk.",
    price: 130,
    image: "images/oreo.jpg"
  },
  {
    name: "KitKat Milkshake",
    description: "Decadent KitKat chunks swirled into a velvety chocolate shake.",
    price: 150,
    image: "images/kitkat.webp"
  },
  {
    name: "Strawberry Ice Cream",
    description: "Fresh and fruity strawberry goodness.",
    price: 90,
    image: "images/strawberry.jpg"
  },
  {
    name: "Vanilla Ice Cream",
    description: "Classic smooth and creamy vanilla — a timeless favorite.",
    price: 80,
    image: "images/vanilla icecream.jpg"
  },
  {
    name: "Mango Ice Cream",
    description: "Sweet and tropical mango bliss in every creamy scoop.",
    price: 60,
    image: "images/mango icecream.webp"
  },
  {
    name: "Butterscotch Ice Cream",
    description: "Fresh and fruity butterscotch goodness.",
    price: 100,
    image: "images/butterscotch icecream.jpg"
  },
  {
    name: "Virgin Mojito",
    description: "Refreshing mint and lime fizz without the alcohol — pure delight.",
    price: 90,
    image: "images/virgin.jpg"
  },
  {
    name: "Mint Mojito",
    description: "Cool mint leaves blended with tangy lime and sparkling soda — ultimate refreshment.",
    price: 80,
    image: "images/mint.jpg"
  },
  {
    name: "Blue Lagoon Mojito",
    description: "Tropical blue twist with citrus and mint, vibrant and invigorating.",
    price: 120,
    image: "images/blue.jpg"
  },
  {
    name: "Classic Lemon Mojito",
    description: "Zesty lemon, fresh mint, and bubbly soda — the perfect summer cooler.",
    price: 70,
    image: "images/classic.jpg"
  }
];
const cart = [];

function displayMenu(menuArray, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  menuArray.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="price">₹${item.price}</div>
      <label>Quantity:
        <input type="number" id="qty-${containerId}-${index}" min="1" value="1">
      </label><br>
      <label>Preference:
        <input type="text" id="pref-${containerId}-${index}" placeholder="e.g. Less spicy">
      </label><br>
      <label>Toppings:
        <input type="text" id="top-${containerId}-${index}" placeholder="e.g. Extra cheese">
      </label><br>
      <button onclick='addToCart(${JSON.stringify(item)}, "${containerId}", ${index})'>Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

let currentMenu = mainCourses;

function renderMenu(menuArray) {
  const containerId = currentMenu === mainCourses ? "mainMenu" : "dessertMenu";
  displayMenu(menuArray, containerId);
}

function showMenu(type) {
  document.getElementById("search").value = "";
  currentMenu = (type === "main") ? mainCourses : desserts;
  renderMenu(currentMenu);
}

function addToCart(item, containerId, index) {
  const qty = parseInt(document.getElementById(`qty-${containerId}-${index}`).value) || 1;
  const preference = document.getElementById(`pref-${containerId}-${index}`).value;
  const toppings = document.getElementById(`top-${containerId}-${index}`).value;

  const cartItem = {
    ...item,
    quantity: qty,
    preference,
    toppings,
    total: item.price * qty
  };

  cart.push(cartItem);
  alert(`${item.name} added to cart!`);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartContainer = document.getElementById("cartItems");
  const totalDisplay = document.getElementById("totalAmount");
  cartContainer.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    total += item.total;
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
      ${item.name} x${item.quantity} - ₹${item.total}
      <br><small>Pref: ${item.preference || 'None'}, Toppings: ${item.toppings || 'None'}</small>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });

  totalDisplay.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Checkout
const checkoutForm = document.getElementById("checkoutForm");
const checkoutMessage = document.getElementById("checkoutMessage");

checkoutForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("custName").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const method = document.getElementById("paymentMethod").value;

  if (!name || !address || !method) {
    checkoutMessage.textContent = "❌ Please fill all fields.";
    return;
  }

  if (cart.length === 0) {
    checkoutMessage.textContent = "❌ Your cart is empty!";
    return;
  }

  saveOrderToHistory(cart);

  checkoutMessage.innerHTML = `
    ✅ Thank you, <strong>${name}</strong>!<br>
    Your order has been placed and will be delivered to:<br>
    <em>${address}</em><br>
    <strong>Payment Method:</strong> ${method}
  `;

  checkoutForm.reset();
  cart.length = 0;
  updateCartDisplay();
});

function saveOrderToHistory(cartItems) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser || !currentUser.email) return; // only if user is logged in

  const key = `orderHistory_${currentUser.email}`;
  const rawHistory = localStorage.getItem(key);
  let orderHistory = rawHistory ? JSON.parse(rawHistory) : [];

  const newOrder = {
    date: new Date().toLocaleString(),
    items: cartItems
  };

  orderHistory.push(newOrder);
  localStorage.setItem(key, JSON.stringify(orderHistory));
}

// Set today's date as the min for reservation
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("resDate").setAttribute("min", today);
});

// Reservation System
const reservationForm = document.getElementById("reservationForm");
const resTime = document.getElementById("resTime");
const confirmationMessage = document.getElementById("confirmationMessage");

const slots = [
  "12:00 PM", "12:30 PM", "1:00 PM",
  "1:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM"
];

// Populate time slots
function populateTimeSlots() {
  resTime.innerHTML = "";
  slots.forEach(slot => {
    const option = document.createElement("option");
    option.value = slot;
    option.textContent = slot;
    resTime.appendChild(option);
  });
}

populateTimeSlots(); // Initial call on load


reservationForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const date = document.getElementById("resDate").value;
  const time = document.getElementById("resTime").value;
  const partySize = parseInt(document.getElementById("resParty").value);
  const currentUser = JSON.parse(localStorage.getItem("currentUser")); // op

  if (date && time && partySize > 0) {
    try {
      const response = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date,
          time,
          partySize,
          user: currentUser?.email || "Guest"  // Make sure you're saving email during login
        })
      });

      const data = await response.json();

      if (response.ok) {
        confirmationMessage.textContent = `✅ Reservation confirmed for ${partySize} people on ${date} at ${time}.`;
        confirmationMessage.style.color = "green";
        reservationForm.reset();
        populateTimeSlots();

        // 👉 Load and show reservation history, then redirect
        loadReservationHistory();
      } else {
        confirmationMessage.textContent = `❌ Reservation failed: ${data.error || "Please try again."}`;
        confirmationMessage.style.color = "red";
      }
    } catch (err) {
      confirmationMessage.textContent = `❌ Error: ${err.message}`;
      confirmationMessage.style.color = "red";
    }
  } else {
    confirmationMessage.textContent = "❌ Please fill all fields correctly.";
    confirmationMessage.style.color = "red";
  }
});


async function loadReservationHistory() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const reservationList = document.getElementById("reservationList");

  if (!currentUser || !currentUser.email || !reservationList) {
    reservationList.innerHTML = "<li>⚠️ You must be logged in to see reservations.</li>";
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/reservations");
    const allReservations = await response.json();

    // Filter reservations by the logged-in user's email
    const userReservations = allReservations.filter(res => res.user === currentUser.email);

    reservationList.innerHTML = "";

    if (userReservations.length === 0) {
      reservationList.innerHTML = "<li>No reservations found.</li>";
      return;
    }

    userReservations.forEach(res => {
      const li = document.createElement("li");
      li.textContent = `📅 ${res.date} ⏰ ${res.time} 👥 Party of ${res.partySize}`;
      reservationList.appendChild(li);
    });

    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);

  } catch (error) {
    console.error("Error loading reservation history:", error);
    reservationList.innerHTML = "<li>❌ Failed to load reservations.</li>";
  }
}




function displayOrderHistory() {
  const orderList = document.getElementById("orderList");
  if (!orderList) return;

  // ✅ Get the current logged-in user
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser || !currentUser.email) {
    orderList.innerHTML = "<li>Please log in to view your order history.</li>";
    return;
  }

  // ✅ Use the user's email to fetch their order history
  const key = `orderHistory_${currentUser.email}`;
  const orderHistory = JSON.parse(localStorage.getItem(key) || "[]");

  orderList.innerHTML = "";

  if (orderHistory.length === 0) {
    orderList.innerHTML = "<li>No past orders found.</li>";
    return;
  }

  orderHistory.forEach((order) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>Date:</strong> ${order.date}<br>
      <strong>Items:</strong>
      <ul>
        ${order.items.map((item) => `
          <li>${item.name} × ${item.quantity} - ₹${item.price * item.quantity}</li>
        `).join("")}
      </ul>
    `;
    orderList.appendChild(li);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const clearButton = document.getElementById("clearOrderHistory");
  const orderList = document.getElementById("orderList");

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userEmail = currentUser?.email;

  function getOrderHistoryKey() {
    return userEmail ? `orderHistory_${userEmail}` : "orderHistory";
  }

  function displayOrderHistory() {
    const key = getOrderHistoryKey();
    const history = JSON.parse(localStorage.getItem(key) || "[]");

    orderList.innerHTML = "";

    if (history.length === 0) {
      orderList.innerHTML = "<li>No past orders found.</li>";
      return;
    }

    history.forEach(order => {
      const li = document.createElement("li");
      li.textContent = `🛒 Order on ${order.date} - ${order.items.length} item(s)`;
      orderList.appendChild(li);
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your order history?")) {
        const key = getOrderHistoryKey();
        localStorage.removeItem(key);
        alert("✅ Order history cleared.");
        displayOrderHistory(); // Refresh
      }
    });
  }

  // Show history on load
  displayOrderHistory();
});



// ✅ This runs when the form is submitted
function handleAuth(event) {
  event.preventDefault(); // stop form from reloading page

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Send login request to backend
  fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        // ✅ Save the logged-in user's email
        localStorage.setItem("currentUser", JSON.stringify({
          email: data.email,
          token: data.token
        }));

        document.getElementById("authMessage").textContent = "Login successful!";
        displayOrderHistory(); // show their order history
      } else {
        document.getElementById("authMessage").textContent = "Login failed!";
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById("authMessage").textContent = "Error logging in.";
    });

  // Clear form
  document.getElementById("authForm").reset();
}

// ✅ Connect the form with the function
document.addEventListener("DOMContentLoaded", () => {
  const authForm = document.getElementById("authForm");
  if (authForm) {
    authForm.addEventListener("submit", handleAuth);
  }
});

function logout() {
  // ✅ Remove user
  localStorage.removeItem("currentUser");

  // ✅ Show message (will disappear on redirect)
  alert("Logged out successfully!");

  // ✅ Redirect to login page
  window.location.href = "login.html";
}

function showReservationHistory() {
  const section = document.getElementById("reservationHistory");
  const reservationList = document.getElementById("reservationList");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!section || !reservationList) return;

  // Scroll to section
  section.scrollIntoView({ behavior: "smooth" });

  if (!currentUser || !currentUser.email) {
    reservationList.innerHTML = "<li>⚠️ Please log in to view reservations.</li>";
    return;
  }

  // Fetch and show reservation history
  fetch("https://restaurant-application-app.onrender.com")
    .then((res) => res.json())
    .then((allReservations) => {
      const userReservations = allReservations.filter(
        (res) => res.user === currentUser.email
      );

      reservationList.innerHTML = "";

      if (userReservations.length === 0) {
        reservationList.innerHTML = "<li>No reservations found.</li>";
        return;
      }

      userReservations.forEach((res) => {
        const li = document.createElement("li");
        li.textContent = `📅 ${res.date} ⏰ ${res.time} 👥 Party of ${res.partySize}`;
        reservationList.appendChild(li);
      });

      // ❌ No redirect now
      // setTimeout(() => {
      //   window.location.href = "index.html";
      // }, 3000);
    })
    .catch((err) => {
      console.error("Failed to load reservations", err);
      reservationList.innerHTML = "<li>❌ Error loading reservations.</li>";
    });
}

    


// On page load
window.onload = () => {
  displayMenu(mainCourses, "mainMenu");
  displayMenu(desserts, "dessertMenu");
  updateCartDisplay();
  displayOrderHistory();
  populateTimeSlots();
  
};
