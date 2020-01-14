export const AUTH_TOKEN = 'auth-token';

export const loggedIn = () => {
  const token = getToken();
  return !!token
};

export const getToken = () => {
  // Retrieves the user token from localStorage
  return localStorage.getItem(AUTH_TOKEN)
};

export const setToken = (token) => {
  return localStorage.setItem(AUTH_TOKEN, token)
}