import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../consts/environment";

const useRestApi = <T>(url: string) => {
  const [state, setstate] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/${url}`)
      .then((response) => {
        setstate(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);
  return { state, isLoading };
};

export default useRestApi;
