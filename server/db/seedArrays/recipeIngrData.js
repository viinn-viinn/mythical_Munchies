const recipe_ingredients = [
  {
    recipe_name: "Ham Ramen",
    ingredient_name: "Ramen",
    amount: "1",
    unit: "Pack",
  },
  {
    recipe_name: "Ham Ramen",
    ingredient_name: "Scallion",
    amount: "1",
    unit: "",
  },
  {
    recipe_name: "Ham Ramen",
    ingredient_name: "Pork Belly",
    amount: "2",
    unit: "Slices",
  },
  {
    recipe_name: "Hot Honey Milk",
    ingredient_name: "Milk",
    amount: "1",
    unit: "Cup",
  },
  {
    recipe_name: "Hot Honey Milk",
    ingredient_name: "Honey",
    amount: "1",
    unit: "Heaping teaspoon",
  },
  {
    recipe_name: "Hot Honey Milk",
    ingredient_name: "Cinnamon",
    amount: "1",
    unit: "Pinch to sprinkle on top",
  },
  {
    recipe_name: "Bacon and Eggs",
    ingredient_name: "Thick Cut Bacon",
    amount: "3",
    unit: "Slices",
  },
  {
    recipe_name: "Bacon and Eggs",
    ingredient_name: "Egg(s)",
    amount: "4",
    unit: "",
  },
  {
    recipe_name: "Bacon and Eggs",
    ingredient_name: "Bread",
    amount: "1",
    unit: "Loaf",
  },
  {
    recipe_name: "Bacon and Eggs",
    ingredient_name: "Cheddar",
    amount: "1",
    unit: "Wedge",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Milk",
    amount: "1/4",
    unit: "Cup",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Cocoa Powder",
    amount: "5",
    unit: "Teaspoons",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Granulated Sugar",
    amount: "1/3",
    unit: "Cup",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Cake Flour",
    amount: "1/3",
    unit: "Cup",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Baking Soda",
    amount: "1/4",
    unit: "Teaspoon",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Cream of Tartar",
    amount: "3/4",
    unit: "Teaspoon",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Kosher Salt",
    amount: "1",
    unit: "Pinch",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Chili Powder",
    amount: "1",
    unit: "Pinch",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Egg(s)",
    amount: "3",
    unit: "Yolks",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Egg(s)",
    amount: "4",
    unit: "Whites",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Canola Oil",
    amount: "2.5",
    unit: "Tablespoons",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Heavy Whipping Cream",
    amount: "1",
    unit: "Cup",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Powdered Sugar",
    amount: "2.5",
    unit: "Tablespoons",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Cornstarch",
    amount: "1",
    unit: "Tablespoons",
  },
  {
    recipe_name: "Calcifer Snacks",
    ingredient_name: "Matcha",
    amount: "2.5",
    unit: "Teaspoon",
  },
  {
    recipe_name: "Sophie's Tea",
    ingredient_name: "Water",
    amount: "1",
    unit: "Cup",
  },
  {
    recipe_name: "Sophie's Tea",
    ingredient_name: "Loose Leaf Hibiscus Tea",
    amount: "1.5",
    unit: "Teaspoons",
  },
  {
    recipe_name: "Sophie's Tea",
    ingredient_name: "Ginger",
    amount: "1",
    unit: "Quarter Inch Root, Pealed",
  },
  {
    recipe_name: "Sophie's Tea",
    ingredient_name: "Honey",
    amount: "2",
    unit: "Teaspoons",
  },
  {
    recipe_name: "Sophie's Tea",
    ingredient_name: "Japanese Whiskey",
    amount: "1",
    unit: "Splash",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    ingredient_name: "Brown Sugar",
    amount: "1",
    unit: "Cup",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    ingredient_name: "Water",
    amount: "2",
    unit: "tablespoons",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    ingredient_name: "Salt",
    amount: "1/2",
    unit: "teaspoon",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    ingredient_name: "Apple Cider Vinegar",
    amount: "1/2",
    unit: "teaspoon",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    ingredient_name: "Vanilla Extract",
    amount: "1/2",
    unit: "teaspoon",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    ingredient_name: "Cream Soda",
    amount: "4",
    unit: "cups",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    ingredient_name: "Heavy Cream",
    amount: "1",
    unit: "cup",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    ingredient_name: "Butter",
    amount: "1/4",
    unit: "cup",
  },
  {
    recipe_name: "Lembas Bread",
    ingredient_name: "All-purpose flour",
    amount: "3",
    unit: "cups",
  },
  {
    recipe_name: "Lembas Bread",
    ingredient_name: "Baking powder",
    amount: "1",
    unit: "tablespoon",
  },
  {
    recipe_name: "Lembas Bread",
    ingredient_name: "Salt",
    amount: "1/2",
    unit: "teaspoon",
  },
  {
    recipe_name: "Lembas Bread",
    ingredient_name: "Butter",
    amount: "1",
    unit: "cup",
  },
  {
    recipe_name: "Lembas Bread",
    ingredient_name: "Honey",
    amount: "1",
    unit: "cup",
  },
  {
    recipe_name: "Lembas Bread",
    ingredient_name: "Vanilla extract",
    amount: "1",
    unit: "teaspoon",
  },
{
      recipe_name: "Second Breakfast",
      ingredient_name: "Eggs",
      amount: "2",
      unit: ""
    },
    {
      recipe_name: "Second Breakfast",
      ingredient_name: "Bacon",
      amount: "4",
      unit: "slices"
    },
    {
      recipe_name: "Second Breakfast",
      ingredient_name: "Toast",
      amount: "2",
      unit: "slices"
    },
    {
      recipe_name: "Second Breakfast",
      ingredient_name: "Mushrooms",
      amount: "1",
      unit: "cup"
    },
    {
      recipe_name: "Second Breakfast",
      ingredient_name: "Tomato",
      amount: "1",
      unit: ""
    },
    {
      recipe_name: "Second Breakfast",
      ingredient_name: "Butter",
      amount: "2",
      unit: "tablespoons"
    },
    {
      recipe_name: "Second Breakfast",
      ingredient_name: "Salt",
      amount: "to taste",
      unit: ""
    },
    {
      recipe_name: "Second Breakfast",
      ingredient_name: "Pepper",
      amount: "to taste",
      unit: ""
    },









  {
    recipe_name: "Arya's Direwolf Bread",
    ingredient_name: "All-purpose flour",
    amount: "3",
    unit: "cups",
  },
  {
    recipe_name: "Arya's Direwolf Bread",
    ingredient_name: "Active dry yeast",
    amount: "2 1/4",
    unit: "teaspoons",
  },
  {
    recipe_name: "Arya's Direwolf Bread",
    ingredient_name: "Sugar",
    amount: "1",
    unit: "tablespoon",
  },
  {
    recipe_name: "Arya's Direwolf Bread",
    ingredient_name: "Salt",
    amount: "1",
    unit: "teaspoon",
  },
  {
    recipe_name: "Arya's Direwolf Bread",
    ingredient_name: "Warm water",
    amount: "1 1/4",
    unit: "cups",
  },
  {
    recipe_name: "Tyrion's Mulled Wine",
    ingredient_name: "Red wine",
    amount: "1",
    unit: "bottle",
  },
  {
    recipe_name: "Tyrion's Mulled Wine",
    ingredient_name: "Orange",
    amount: "1",
    unit: "",
  },
  {
    recipe_name: "Tyrion's Mulled Wine",
    ingredient_name: "Cloves",
    amount: "8",
    unit: "",
  },
  {
    recipe_name: "Tyrion's Mulled Wine",
    ingredient_name: "Cinnamon sticks",
    amount: "2",
    unit: "",
  },
  {
    recipe_name: "Tyrion's Mulled Wine",
    ingredient_name: "Star anise",
    amount: "2",
    unit: "",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    ingredient_name: "Beef stew meat",
    amount: "1",
    unit: "pound",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    ingredient_name: "Potatoes",
    amount: "2",
    unit: "large",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    ingredient_name: "Carrots",
    amount: "2",
    unit: "medium",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    ingredient_name: "Onion",
    amount: "1",
    unit: "large",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    ingredient_name: "Garlic",
    amount: "3",
    unit: "cloves",
  },
  {
    recipe_name: "Lon Lon Milkshake",
    ingredient_name: "Vanilla ice cream",
    amount: "2",
    unit: "cups",
  },
  {
    recipe_name: "Lon Lon Milkshake",
    ingredient_name: "Milk",
    amount: "1",
    unit: "cup",
  },
  {
    recipe_name: "Lon Lon Milkshake",
    ingredient_name: "Honey",
    amount: "2",
    unit: "tablespoons",
  },
  {
    recipe_name: "Lon Lon Milkshake",
    ingredient_name: "Banana",
    amount: "1",
    unit: "",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    ingredient_name: "All-purpose flour",
    amount: "2",
    unit: "cups",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    ingredient_name: "Butter",
    amount: "1",
    unit: "cup",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    ingredient_name: "Granulated sugar",
    amount: "1",
    unit: "cup",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    ingredient_name: "Egg",
    amount: "1",
    unit: "",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    ingredient_name: "Vanilla extract",
    amount: "1",
    unit: "teaspoon",
  },
  {
    recipe_name: "Blue Milkshake",
    ingredient_name: "Vanilla ice cream",
    amount: "2",
    unit: "cups",
  },
  {
    recipe_name: "Blue Milkshake",
    ingredient_name: "Milk",
    amount: "1",
    unit: "cup",
  },
  {
    recipe_name: "Blue Milkshake",
    ingredient_name: "Blue food coloring",
    amount: "Few drops",
    unit: "",
  },
  {
    recipe_name: "Blue Milkshake",
    ingredient_name: "Whipped cream",
    amount: "For topping",
    unit: "",
  },







];
module.exports = { recipe_ingredients };
