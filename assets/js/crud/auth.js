const authentication = async (config) => {
  return new Promise((resolve, reject) => {
    fetch("https://api.escuelajs.co/api/v1/auth/login", config)
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) =>
        reject({ status: error.status, statusText: error.statusText })
      );
  });
};

export const auth = async (email, password) => {
  const options = (userEmail, userPassword) => {
    return {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    };
  };

  const token = await authentication(options(email, password));
  console.log(token);

  if (token === null) {
    throw { status: response.status, statusText: response.statusText };
  }

  const json = token.access_token;

  localStorage.setItem("token", json);

  return token !== null ? true : false;
};
