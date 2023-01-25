import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abrtCont = new AbortController();
    fetch(url, { signal: abrtCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not find");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          setIsPending(false);
          setError(error.message);
        }
      });
    return () => abrtCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
