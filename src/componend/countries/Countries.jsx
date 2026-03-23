import React, { use, useState } from 'react';
import Country from './Country';


const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h3>Not visited yet: {countries.length - visitedCountries.length}</h3>
            <h3>Total Visited: {visitedCountries.length}</h3>
            <div>
                <span><strong>Visited Countries:</strong></span>
                <ol>
                    <span>
                        {
                            visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                        }
                    </span>
                </ol>
            </div>
            <div className='visited-flags'>
                {
                    visitedCountries.map(country => <img key={country.cca3.cca3} src={country.flags.flags.png}></img>)
                }
            </div>
            <div className='country'>
                {
                    countries.map(country => <Country key={country.name.common} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;