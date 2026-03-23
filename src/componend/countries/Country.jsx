import React, { useState } from 'react';

const Country = ({ country, handleVisitedCountries }) => {
    const commonName = country.name.common;
    const officialName = country.name.official;
    const flag = country.flags.flags.png;
    const alt = country.flags.flags.alt;
    const capital = country.capital.capital;
    const languages = country?.languages?.languages ? Object.values(country.languages.languages) : [];

    const currencyObj = country?.currencies?.currencies;
    const currency = currencyObj ? Object.values(currencyObj)[0] : null;
    const currencyName = currency?.name || "N/A";
    const currencySymbol = currency?.symbol || "";

    const population = country.population.population;
    const countryArea = country?.area?.area || 0;

    const region = country?.region?.region || 0;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // setVisited(visited ? false : true);
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        <div className="country-card">
            <div className="flag-container">
                <img src={flag} alt={alt} className="country-flag" />
            </div>
            <div className="country-details">
                <h2 className="common-name">{commonName}</h2>
                <h4 className="official-name">{officialName}</h4>
                <div className="info-row">
                    <span className="label">Capital:</span>
                    <span className="value">{capital}</span>
                </div>
                <div className="info-row">
                    <span className="label">Population:</span>
                    <span className="value">{population.toLocaleString()}</span>
                </div>
                <div className="info-row">
                    <span className="label">Region:</span>
                    <span className="value">{region}</span>
                </div>
                <div className="divider"></div>
                <div className="languages-section">
                    {languages.length > 0 ? (
                        <>
                            <p className="lang-text">
                                <strong>Languages:</strong> {languages.join(', ')}
                            </p>
                            <span className="lang-badge">
                                {languages.length} Language{languages.length > 1 ? 's' : ''}
                            </span>
                        </>
                    ) : (
                        <p className="no-data">No language info available</p>
                    )}
                </div>
                <div className="info-row area-section">
                    <span className="label">Total Area:</span>
                    <span className="value">
                        {countryArea > 0 ? `${countryArea.toLocaleString()} sq km` : "N/A"}
                    </span>
                </div>
                <div className="currency-section">
                    {currencyObj ? (
                        <div className="currency-badge">
                            <strong>Currency:</strong> {currencyName}
                            <span className="symbol">{currencySymbol}</span>
                        </div>
                    ) : (
                        <p className="no-data">No Currency Info</p>
                    )}
                </div>
                <div className="visited-container">
                    <button
                        onClick={handleVisited}
                        className={`visit-btn ${visited ? 'is-visited' : ''}`}>
                        <span className="btn-icon">
                            {visited ? '✔' : '📌'}
                        </span>
                        {visited ? 'Visited' : 'Want to Visit'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Country;