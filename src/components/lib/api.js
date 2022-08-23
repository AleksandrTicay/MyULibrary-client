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

export function fetchingGenresApi() {
  const url = "http://localhost:8000/api/v1/genres";

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

export function fetchingGenre(id) {
  const url = `http://localhost:8000/api/v1/genres/${id}`;

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

export function fetchingBooks(filter,search) {
  const url = `http://localhost:8000/api/v1/${filter}?${filter === 'books'? 'title[lk]=' : 'name[lk]='}${search}`;    
  console.log(url);

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

export function updatingAmount(amount, id) {
  const url = `http://localhost:8000/api/v1/books/${id}`;

  const params = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",      
    },
    body: {
      "amount": amount
    }
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
}

export function addingBooks(value) {
  const url = `http://localhost:8000/api/v1/books/`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",      
    },
    body: value
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
}
