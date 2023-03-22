import React from "react";

const country = ({ data }) => {
  return (
    <div className="mt-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {data.map((country) => {
        const { name, flags, population, timezones, capital, area, cca2 } =
          country;

        return (
          <div className="col">
            <div className="card">
              <img
                src={flags.svg}
                alt="Image hear"
                style={{ height: "250px" }}
                draggable="false"
              />

              <div className="card-body ">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title alert alert-success text-primary">
                    {name.official}
                  </h4>
                  <span
                    type="button"
                    className="badge text-bg-danger "
                    id="liveToast"
                  >
                    {cca2}
                  </span>
                </div>
                <p className="card-text list-group mt-3">
                  <p className="list-group-item list-group-item-action active">
                    Capital :{capital?.["0"]}
                  </p>
                  <p className="list-group-item list-group-item-action">
                    Area : {area}
                  </p>
                  <p className="list-group-item list-group-item-action">
                    Population : {population}
                  </p>
                  <p className="list-group-item list-group-item-action">
                    TimeZone : {timezones}
                  </p>
                </p>
                {/* tost section */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default country;
