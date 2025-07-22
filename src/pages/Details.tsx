import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { CountryDetails } from "../types/Countries";
import { Countryapi } from "../api/api";
import "../styles/Details.css";

export const Details = () => {
  const { countryName } = useParams<{ countryName: string }>();
  const [data, setData] = useState<CountryDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [countryMap, setCountryMap] = useState<{ [code: string]: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (countryName) {
          const decodedName = decodeURIComponent(countryName);
          const response = await Countryapi.GetCountry(decodedName);
          setData(response);
        } else {
          console.log("No country name in URL");
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [countryName]);

  useEffect(() => {
    const savedMap = localStorage.getItem("countryMap");
    if (savedMap) {
      setCountryMap(JSON.parse(savedMap));
    }
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!data) {
    return (
      <div className="error-container">
        <Link to="/">← Back to Home</Link>
        <p>Country not found</p>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="button-container">
        <Link to="/">
          <button className="back-button">← Back</button>
        </Link>
      </div>

      <div className="details-container">
        <div className="country-content">
          <div className="image-container">
            <img src={data.flag} alt={`${data.name} flag`} />
          </div>

          <div className="info-container">
            <div className="row-container">
              <div className="part1">
                <h2>{data.name}</h2>
                <p>
                  <b>Native Name:</b> <span>{data.nativeName}</span>
                </p>
                <p>
                  <b>Population:</b>{" "}
                  <span>{data.population.toLocaleString()}</span>
                </p>
                <p>
                  <b>Region:</b> <span>{data.region}</span>
                </p>
                <p>
                  <b>Sub Region:</b> <span>{data.subregion}</span>
                </p>
                <p>
                  <b>Capital:</b>
                  <span>{data.capital}</span>
                </p>
              </div>

              <div className="part2">
                <p>
                  <b>Top Level Domain:</b> <span>{data.tld.join(", ")}</span>
                </p>
                <p>
                  <b>Currencies:</b>{" "}
                  <span>
                    {" "}
                    {Object.entries(data.currencies)
                      .map(
                        ([code, currency]) =>
                          `${currency.name} (${currency.symbol || code})`,
                      )
                      .join(", ")}
                  </span>
                </p>
                <p>
                  <b>Languages:</b>{" "}
                  <span>{Object.values(data.languages).join(", ")}</span>
                </p>
              </div>
            </div>

            {data.borders && data.borders.length > 0 && (
              <div className="borders-container">
                <p>
                  <b>Border Countries:</b>
                </p>
                <div className="border-buttons">
                  {data.borders.map((border) => (
                    <Link key={border} to={`/country/${countryMap[border]}`}>
                      <button className="border-button">
                        {countryMap[border]}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
