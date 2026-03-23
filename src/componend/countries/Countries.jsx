import React, { use } from 'react';
import Country from './Country';


const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div >
                {
                    countries.map(country => <Country key={country.name.common} country={country}></Country>)
                }
        </div>
    );
};

export default Countries;