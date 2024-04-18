import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';
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

  if (error) {
    return <Error title="Failed to load meals" message={error} />;
  }

  return (
    <ul id="meals">
      {mealsLoaded.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
