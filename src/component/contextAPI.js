import { createContext, useEffect, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [resJson, setResJson] = useState([]);
  const [featureProducts, setFeatureProducts] = useState([]);

  console.log({ isLoading, isError, resJson, featureProducts });

  const getProducts = async () => {
    const API = "https://api.pujakaitem.com/api/products";
    console.log("Fetching data from API...");
    setIsLoading(true);

    try {
      const response = await fetch(API);
      console.log("API Response:", response);

      const resJson = await response.json();
      console.log("API Data:", resJson);

      const featureData = resJson.filter((currElem) => {
        return currElem.featured === true;
      });

      setResJson(resJson);
      setFeatureProducts(featureData);
      setIsLoading(false);
      console.log("Data successfully dispatched.");
    } catch (error) {
      console.error("API Error:", error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{ isLoading, isError, resJson, featureProducts }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
