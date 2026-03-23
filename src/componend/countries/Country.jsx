import React from 'react';

const Country = ({ country }) => {
    const commonName = country.name.common;
    const officialName = country.name.official;
    const flag = country.flags.flags.png;
    const alt = country.flags.flags.alt;
    const capital = country.capital.capital;
    const languages = country?.languages?.languages ? Object.values(country.languages.languages) : [];
    

    return (
        <div style={{ border: '2px solid blue', padding: '20px', borderRadius: '10px', margin: '10px' }}>
            <img src={flag} alt={alt} />
            <h2>Name: {commonName}</h2>
            <h4>Official Name: {officialName}</h4>
            <h5>Capital: {capital}</h5>
            <div>
                {languages.length > 0 ? (
                    <div style={{ marginTop: '10px' }}>
                        <p>
                            <strong>Languages: </strong>
                            <span style={{ color: '#555' }}>{languages.join(', ')}</span>
                        </p>
                        <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#3b82f6' }}>
                            Total Languages Found: {languages.length}
                        </p>
                    </div>
                ) : (
                    <p style={{ color: 'red', fontStyle: 'italic', marginTop: '10px' }}>
                        No official language information available.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Country;