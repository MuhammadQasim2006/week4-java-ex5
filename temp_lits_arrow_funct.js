const multilineString = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since 1966.
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;

console.log("--- Task 1 ---");
console.log(multilineString);

const generateUserCard = (username, role) => {
  return `
    <div class="user-card">
      <h3>User: ${username}</h3>
      <p>Role: ${role}</p>
    </div>
  `;
};

console.log("\n--- Task 2 ---");
console.log(generateUserCard("Muhammad Qasim Moos", "Software Developer"));

const addNumbers = (a, b) => a + b;

const greetUser = name => `Welcome back, ${name}!`;

console.log("\n--- Task 3 ---");
console.log(`5 + 7 = ${addNumbers(5, 7)}`);
console.log(greetUser("Muhammad Qasim"));

const inventory = [
  { item: "Laptop", price: 9500, inStock: true },
  { item: "Mouse", price: 250, inStock: false },
  { item: "Keyboard", price: 750, inStock: true }
];

const itemNames = inventory.map(product => product.item);

const availableItems = inventory.filter(product => product.inStock);

console.log("\n--- Task 4 ---");
console.log("All Items:", itemNames);
console.log("In Stock:", availableItems);