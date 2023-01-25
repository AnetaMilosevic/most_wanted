//1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var coffee = {
    coffee_name: "arabica",
    strength: "strong",
    milk: "2.8% fat",
    sugar: "1 spoon",
}
console.log(coffee)

// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

var favouriteMovie = {
    movie_title: "Twilight",
    actors: ["Robert Pattinson", "Taylor Lautner", "Kristen Stewart", "Billy Burke", "Peter Facinelli", "Elizabeth Reaser", "Ashley Greene"],
    director: "Catherine Hardwicke",
    genre: "Romance, fantasy",
    popularity: "5,3/10",
}
console.log(favouriteMovie.actors)

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project's
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

var project = {
    description: "Practicing objects",
    programming_language:"JavaScript", 
    git_repository: "Bit-pp",
    project_is_in_development: "true",

    project_repository() {
        return this.git_repository
    },
    project_language() {
        if (this.programming_language == "JavaScript"){
            return "Project is written in JavaScript"
        }
        else {
            return "project isn't written in JavaScript"
        }
    }

}
console.log(project.project_repository())
console.log(project.project_language())


// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

var culinaryRecipe = {
    margherita: {
        cuisine: "Italian",
        complexity: "3",
        list_of_ingredients: [
            "2kg cherry tomatoes",
            "1 red onion",
            "4 cloves garlic",
            "3tbspn dried oregano",
            "A splash of olive oil",
            "A handful of basil",
            "1tbspn tomato sauce",
            "600g mozzarella", "coarsely grated",
            "1tbspn sea salt",
            "500g cherry tomatoes on the vine",
            "Fresh basil to serve"],
        preparing_time_in_minutes: "60",
        preparing_instructions: "Prepare the pizza dough by feeding your sourdough starter with flour and water the day before you plan to make it, so it becomes active. Once bubbling, whisk together the sourdough starter and water. Add this to the flour and mix until just coming together. Rest for 30 minutes. Add the salt and oil, mix again and rest for a further half an hour. Tip onto a clean surface and knead for about 5–10 minutes to develop the gluten.Shape into a ball.Cover and return every 30 minutes to pull it out and fold back onto itself four times.Divide the dough in four and roll into smooth balls.Place them on a tray, cover with cling film and refrigerate for 24–48 hours.Remove from the fridge an hour before you plan to bake the pizza. Preheat your oven to 160˚C fan/180˚C/350˚F / gas mark 4. Place the tomatoes onto a baking sheet with the red - onion wedges, garlic cloves and dried oregano, then drizzle over olive oil.Mix everything to coat.Roast in the oven for maximum flavour for 45 minutes.Remove the tomatoes from the oven and squeeze out the garlic from their skins before adding everything to a processor, including the basil and a squeeze of tomato sauce.Process until smooth.If there is too much liquid(the water content in tomatoes can vary), simply place in a saucepan and cook gently to reduce.Store in glass jars until ready to make your pizza.Salting the mozzarella first means you won’t end up with a ‘soupy’ pizza, so grate the mozzarella yourself and then sprinkle over the salt.Place on kitchen paper and leave for an hour.",

        allIngredients() {
            return this.list_of_ingredients;
        },
        preparation_time() {
            if(this.preparing_time_in_minutes < 15) {
                return "meal can be prepared in under 15 minutes."
            }
            else{
                return "meal can't be prepared in under 15 minutes."
            }
        },
        delete_ingredient(numberOfIngredient) {
            delete this.list_of_ingredients[numberOfIngredient]
        },
        change_type_of_cuisine() {
            return this.cuisine = "France"
        }
    },
    indian_chicken_curry: {
        cuisine: "Indian",
        complexity: "",
        list_of_ingredients: [
            "2 pounds skinless, boneless chicken breast halves", 
            "2 teaspoons salt",
            "½ cup cooking oil",
            "1 ½ cups chopped onion",
            "1 tablespoon minced garlic",
            "1 ½ teaspoons minced fresh ginger root", 
            "1 tablespoon curry powder",
            "1 teaspoon ground cumin",
            "1 teaspoon ground turmeric", 
            "1 teaspoon ground coriander",
            "1 teaspoon cayenne pepper", 
            "1 tablespoon water", 
            "1 (15 ounce) can crushed tomatoes",
            "1 cup plain yogurt",
            "1 tablespoon chopped fresh cilantro",
            "1 teaspoon salt",
            "½ cup water", 
            "1 teaspoon garam masala", 
            "1 tablespoon chopped fresh cilantro",
            "1 tablespoon fresh lemon juice"
            ],
            preparing_time_in_minutes: "30",
            preparing_instructions: "Sprinkle the chicken breasts with 2 teaspoons salt. Heat oil in a large skillet over high heat; partially cook the chicken in the hot oil in batches until completely browned on all sides. Transfer browned chicken breasts to a plate and set aside.Reduce the heat to medium and add onion, garlic, and ginger to the oil remaining in the skillet. Cook and stir until onion turns soft and translucent, 5 to 8 minutes. Stir curry powder, cumin, turmeric, coriander, cayenne, and 1 tablespoon of water into the onion mixture; allow to heat together for about 1 minute while stirring. Add tomatoes, yogurt, 1 tablespoon chopped cilantro, and 1 teaspoon salt to the mixture; stir to combine. Return chicken breast to the skillet along with any juices on the plate. Pour in 1/2 cup water and bring to a boil, turning the chicken to coat with the sauce. Sprinkle garam masala and 1 tablespoon cilantro over the chicken. Cover the skillet and simmer until chicken breasts are no longer pink in the center and the juices run clear, about 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Drizzle with lemon juice to serve.",
            allIngredients() {
                return this.list_of_ingredients;
            },
            preparation_time() {
                return this.preparing_time_in_minutes
            },
            preparation_time() {
                if(this.preparing_time_in_minutes < 15) {
                    return "meal can be prepared in under 15 minutes."
                }
                else{
                    return "meal can't be prepared in under 15 minutes."
                }
            },
            delete_ingredient(numberOfIngredient) {
                delete this.list_of_ingredients[numberOfIngredient]
            },
            change_type_of_cuisine() {
                return this.cuisine = "France"
            }
    }
}
console.log(culinaryRecipe.indian_chicken_curry.allIngredients())
console.log(culinaryRecipe.margherita.preparation_time())
culinaryRecipe.margherita.delete_ingredient(2)
console.log(culinaryRecipe.margherita.list_of_ingredients)
culinaryRecipe.margherita.change_type_of_cuisine()
console.log(culinaryRecipe.margherita.cuisine)