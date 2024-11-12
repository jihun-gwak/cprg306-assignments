"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) {
        console.error(response.statusText);
        return [];
      }
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return [];
    }
  }

  async function loadMealIdeas() {
    if (ingredient) {
      const mealData = await fetchMealIdeas(ingredient);
      setMeals(mealData);
    } else {
      setMeals([]);
    }
  }
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);
  return (
    <div className={`p-4 m-4 bg-slate-500 w-80 rounded-md shadow-lg`}>
      {meals.length > 0 && (
        <h2 className="text-xl font-semibold">
          Here are some meal ideas using {ingredient}
        </h2>
      )}
      <ul className="text-xl font-medium">
        {meals.length > 0 ? (
          meals.map(
            (meal) => (
              console.log(meal),
              (
                <li className="bg-sky-500 m-4 px-5 py-2" key={meal.idMeal}>
                  <h2>{meal.strMeal}</h2>
                </li>
              )
            )
          )
        ) : (
          <h2>No meal ideas found for the {ingredient}</h2>
        )}
      </ul>
    </div>
  );
}
