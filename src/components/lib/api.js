export function fetchingApi() {
  const url = "https://library-uiapi.herokuapp.com/api/v1/books";

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
  const url = "https://library-uiapi.herokuapp.com/api/v1/genres";

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
  const url = `https://library-uiapi.herokuapp.com/api/v1/genres/${id}`;

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

export function fetchingBooks(filter, search) {
  const url = `https://library-uiapi.herokuapp.com/api/v1/${filter}?${
    filter === "books" ? "title[lk]=" : "name[lk]="
  }${search}`;
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
  const url = `https://library-uiapi.herokuapp.com/api/v1/books/${id}`;

  const params = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      amount: amount,
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

export function addingBooks(value) {
  const url = "https://library-uiapi.herokuapp.com/api/v1/books";

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(value)   
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
}

export function signAPI(user) {
  const url = "https://library-uiapi.herokuapp.com/api/login";
  const data = {
    ...user,
    email: user.email.toLowerCase(),
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data),    
  };

  return fetch(url, params)
  .then((response) => {
    if(response.status >= 200 && response.status <= 300) {
      return response.json(); 
    }
    return {message: "Login information is invalid."};
  }).then((result) => {
    return result;
  })
  .catch((err) => {
    return err;

  });
}

export function setToken(token) {
  localStorage.setItem("token", token.access_token);
  localStorage.setItem("user", token.user);
  localStorage.setItem("role", token.role);  
}

export function getToken() {
  return localStorage.getItem("token");
}

export function getUser() {
  return localStorage.getItem("user");
}

export function getRole() {
  return localStorage.getItem("role");
}

export function logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("role");
}
