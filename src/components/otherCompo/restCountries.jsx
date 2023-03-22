import React, { useEffect, useState } from "react";

function restCountries() {
  return (
    <div>
      <CountryData></CountryData>
    </div>
  );
}

function CountryData() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return <Country countries={countries} />;
}

function Country({ countries }) {
  return (
    <div>
      <h1>Total countries length is : {countries.length}</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `1fr 1fr 1fr 1fr`,
          gridGap: "20px",
        }}
      >
        {countries.map((c) => {
          return (
            <div
              style={{
                background: "tomato",
                padding: "20px",
                textAlign: "center",
                color: "white",
              }}
            >
              <h2> Name : {c.name.common}</h2>
              <h3>Capital : {c.capital}</h3>
              <h3>Area : {c.area}</h3>
              <h3>Borders :{c.borders}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default restCountries;
