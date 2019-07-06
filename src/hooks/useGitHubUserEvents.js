import { useState, useEffect } from "react";

import cancellableFetch from "../utils/cancellableFetch";

export default user => {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const { promise, cancel } = cancellableFetch(
      `https://api.github.com/users/${user}/events`
    );
    promise
      .then(response => response.json())
      .then(setEvents)
      .catch(err => {
        //Ignore AbortErrors as the component has already unmounted at that point
        if (err.name !== "AbortError") {
          setError(err);
        }
      });

    return cancel;
  }, [user]);

  return { events, error };
};
