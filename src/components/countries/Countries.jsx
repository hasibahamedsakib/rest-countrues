import React, { useEffect, useState } from "react";
import Country from "../country/Country";

const countries = () => {
  const [countries, setCountries] = useState([]);

  const URL = `https://restcountries.com/v3.1/all`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="container">
      <Country data={countries} />
    </div>
  );
};

export default countries;
