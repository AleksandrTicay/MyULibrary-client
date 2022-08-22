export function fetchingApi() {
    const url = "http://localhost:8000/api/v1/books";

    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(url, params)
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return err;
      });
  }

  