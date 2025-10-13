const foods = ["Ramen", "Sashimi","California Maki"]

foods.push("Seafoods")
foods.shift();

for (let food of foods) {
    console.log(food)
}

let likes = foods.map(food => `I like ${food}`)
console.log(likes)