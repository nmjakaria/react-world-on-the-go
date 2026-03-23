import { Suspense } from 'react';
import './App.css'
import './componend/countries/Country.css';
import Countries from './componend/countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

const Skeleton = () => (
  <div className="skeleton-container">
    <div className="skeleton-line title">API Fetching</div>
    <div className="skeleton-line text">Data Loading...</div>
    <div className="skeleton-line text short">Data loaded.</div>
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
