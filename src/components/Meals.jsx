import useHttp from '../hooks/useHttp.js';
import MealItem from './MealItem.jsx';

const requestConfig = {};

export default function Meals() {
  const {
    data: mealsLoaded,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  return (
    <ul id="meals">
      {mealsLoaded.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
