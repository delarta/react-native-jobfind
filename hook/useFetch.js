import { useEffect, useState } from "react";
import axios from "axios";

// use dummy data for now
import { petList } from "../dummyData/petData";
import { petServices } from "../dummyData/petServices";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState(petList.data);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  // const options = {
  //   method: "GET",
  //   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   params: {
  //     ...query,
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": rapidApiKey,
  //     "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //   },
  // };

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.request(options);
  //     setData(response.data.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     alert("There is an error");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    if (query.query === "petServices") {
      setData(petServices);
    }
  }, [query]);

  // const refetch = () => {
  //   setIsLoading(true);
  //   fetchData();
  // };

  return { data, isLoading, isError };
};

export default useFetch;
