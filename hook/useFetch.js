import { useEffect, useState } from "react";
import axios from "axios";

// use dummy data for now
import { popularjobs } from "../dummyData/popularJobData";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState(popularjobs.data);
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

  // useEffect(() => {
  //   fetchData();
  // });

  // const refetch = () => {
  //   setIsLoading(true);
  //   fetchData();
  // };

  return { data, isLoading, isError };
};

export default useFetch;
