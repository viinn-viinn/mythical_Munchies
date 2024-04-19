const ingredients = [
  { name: "Milk", description: "Your choice of dairy or plant-based" },
  {
    name: "Peanut Butter",
    description: "Can also be subbed out for your favorite nut or seed butter",
  },
  { name: "Coconut Oil", description: "" },
  { name: "Brown Sugar", description: "Light or dark is fine" },
  { name: "Vanilla Extract", description: "" },
  { name: "Baking Soda", description: "" },
  {
    name: "Kosher Salt",
    description:
      "If subbing for table salt, check salt conversion measurements",
  },
  {
    name: "Table Salt",
    description:
      "If subbing for kosher salt, check salt conversion measurements",
  },
  { name: "Coconut Flour", description: "Can be subbed for plain flour" },
  { name: "Confectioners Sugar", description: "" },
  { name: "Powdered Sugar", description: "" },
  { name: "Light Corn Syrup", description: "" },
  { name: "Cocoa Powder", description: "" },
  { name: "Tequila", description: "Alcohol" },
  { name: "Lime Juice", description: "" },
  { name: "Triple Sec", description: "Alcohol" },
  { name: "Beet Juice", description: "" },
  { name: "Cayenne Powder", description: "" },
  { name: "Lime", description: "" },
  { name: "Rice Vinegar", description: "" },
  { name: "Shaoxing Wine", description: "" },
  { name: "Soy Sauce", description: "" },
  { name: "Hoisin Sauce", description: "" },
  { name: "Oyster Sauce", description: "" },
  { name: "Chili Oil", description: "" },
  { name: "Chicken Wings", description: "" },
  { name: "Five Spice Powder", description: "" },
  { name: "Scallion", description: "Green onions" },
  { name: "Bell Pepper", description: "Any color is fine" },
  { name: "Habanero Pepper", description: "" },
  { name: "Cumin", description: "" },
  { name: "Honey", description: "Local is best" },
  { name: "Cilantro", description: "Can be subbed with parsley" },
  { name: "Canola Oil", description: "" },
  { name: "Orange Juice", description: "" },
  { name: "Curry Powder", description: "" },
  { name: "Allspice", description: "" },
  { name: "Large Shrimp", description: "" },
  { name: "Ramen", description: "" },
  { name: "Egg(s)", description: "" },
  { name: "Pork Belly", description: "" },

  { name: "Thick Cut Bacon", description: "" },
  { name: "Bread", description: "" },
  { name: "Cheddar", description: "" },

  {
    name: "Loose Leaf Hibiscus Tea",
    description: "Can be subbed for 1 tea bag",
  },
  { name: "Japanese Whiskey", description: "" },
  { name: "Granulated Sugar", description: "" },
  {
    name: "Cake Flour",
    description: "Not to be confused with self-rising or bread flour",
  },
  { name: "Cream of Tartar", description: "" },
  { name: "Heavy Whipping Cream", description: "" },
  { name: "Chili Powder", description: "" },
  { name: "Cornstarch", description: "" },
  { name: "Matcha", description: "Green tea powder" },
  { name: "Salt", description: "" },
  { name: "Apple Cider Vinegar", description: "" },
  { name: "Cream Soda", description: "" },
  { name: "Heavy Cream", description: "" },

  { name: "All-purpose flour", description: "" },
  { name: "Baking powder", description: "" },
  { name: "Active dry yeast", description: "" },
  { name: "Sugar", description: "" },
  { name: "Warm water", description: "" },
  { name: "Red wine", description: "" },
  { name: "Orange", description: "" },
  { name: "Cinnamon sticks", description: "" },
  { name: "Star anise", description: "" },
  { name: "Beef stew meat", description: "" },

  { name: "Vanilla ice cream", description: "" },
  { name: "Banana", description: "" },
  { name: "Blue food coloring", description: "" },

  { name: "Bacon", description: "" },
  { name: "Toast", description: "" },
  { name: "Sausages", description: "" },
  { name: "Tomatoes", description: "Sliced" },
  { name: "Mushrooms", description: "Sliced" },
  { name: "Butter", description: "For spreading" },
  { name: "Black pasta", description: "Cooked" },
  { name: "Black olives", description: "Sliced" },
  { name: "Mozzarella cheese", description: "Shredded" },
  { name: "Cherry tomatoes", description: "Halved" },
  { name: "Fresh basil leaves", description: "Chopped" },
  { name: "Olive oil", description: "" },
  { name: "Garlic", description: "Minced" },
  { name: "Pepper", description: "To taste" },
  { name: "Granulated sugar", description: "" },
  { name: "Cocoa powder", description: "" },
  { name: "Eggs", description: "" },
  { name: "Buttermilk", description: "" },
  { name: "Vegetable oil", description: "" },
  { name: "Vanilla extract", description: "" },
  { name: "Boiling water", description: "" },
  { name: "Confectioners' sugar", description: "For dusting" },
  { name: "Clear lemon-lime soda", description: "" },
  { name: "Green food coloring", description: "" },
  { name: "Whipped cream", description: "" },
  { name: "Maraschino cherry", description: "" },
  { name: "Milk chocolate", description: "Chopped" },
  { name: "Marshmallows", description: "Mini" },
  { name: "Peanuts", description: "Chopped" },
  { name: "Cabbage", description: "Shredded" },
  { name: "Carrots", description: "Chopped" },
  { name: "Potatoes", description: "Diced" },
  { name: "Onion", description: "Chopped" },
  { name: "Vegetable broth", description: "" },
  { name: "Corn syrup", description: "" },
  { name: "Food coloring", description: "" },
  {
    name: "Flavor extracts (e.g., cherry, blueberry, lemon)",
    description: "",
  },
  { name: "Citric acid", description: "" },
  { name: "Ground beef", description: "" },
  { name: "Hamburger buns", description: "" },
  { name: "Lettuce", description: "Shredded" },
  { name: "Tomato", description: "Sliced" },
  { name: "Cheese", description: "Sliced" },
  { name: "Pickles", description: "Sliced" },
  { name: "Ketchup", description: "" },
  { name: "Mustard", description: "" },
  { name: "Corn on the cob", description: "Cut into halves or thirds" },
  { name: "Barbecue sauce", description: "" },
  { name: "Chili powder", description: "" },
  { name: "Garlic powder", description: "" },
  { name: "Black pepper", description: "" },
  { name: "Fresh cilantro", description: "Chopped, for garnish" },
  { name: "Bread slices", description: "" },
  { name: "Jellyfish jelly", description: "" },
  { name: "Cinnamon", description: "Ground" },
  { name: "Nutmeg", description: "Ground" },
  { name: "Cardamom", description: "Ground" },
  { name: "Cloves", description: "Ground" },
  { name: "Ginger", description: "Ground" },
  { name: "Black tea leaves", description: "" },
  { name: "Cinnamon stick", description: "" },
  { name: "Cardamom pods", description: "" },
  { name: "Fresh Ginger", description: "Fresh, sliced" },
  { name: "Water", description: "" },
  { name: "Basmati rice", description: "" },
  { name: "Bell pepper", description: "Chopped" },
  { name: "Cumin seeds", description: "" },
  { name: "Coriander seeds", description: "" },
  { name: "Turmeric", description: "Ground" },
  { name: "Cayenne pepper", description: "" },
  { name: "Chicken thighs", description: "Bone-in, skin-on" },
  { name: "Ground cumin", description: "" },
  { name: "Ground coriander", description: "" },
  { name: "Ground cinnamon", description: "" },
  { name: "Ground turmeric", description: "" },
  { name: "Chicken broth", description: "" },
  { name: "Lemon", description: "Juiced" },
  { name: "Thyme", description: "Fresh" },
  { name: "Rosemary", description: "Fresh" },

  { name: "Sliced Lemon", description: "Sliced, for garnish" },

  // {"name":"",
  // "description":""
  // },
];
module.exports = { ingredients };
