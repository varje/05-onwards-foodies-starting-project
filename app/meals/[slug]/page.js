export default function MealsDetailsPage({ params }) {
  return (
    <main>
      <h1>Meals details</h1>
      <p>{params.slug}</p>
    </main>
  );
}