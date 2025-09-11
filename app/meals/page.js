import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}></header>
      <h1>
        Delicious meals, created{' '}
        <span className={classes.highlgiht}>by you</span>
      </h1>
      <p>
        Choose your favourite recipe and cook it yourself. It is easy and fun!
      </p>
      <p className={classes.cta}>
        <Link href="/meals/share">Share Tour Favourite Recipe!</Link>
      </p>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
