import { Suspense } from 'react';
import './App.css'
import Countries from './componend/countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

const Skeleton = () => (
  <div className="skeleton-wrapper">
    <div className="skeleton-title"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text"></div>
  </div>
);

function App() {

  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
