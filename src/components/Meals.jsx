import { useState, useEffect } from 'react';

export default function Meals() {
  const [mealsLoaded, setMealsLoaded] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');

      if (!response.ok) {
      }

      const meals = await response.json();
      setMealsLoaded(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {mealsLoaded.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
