import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_URL;
const GITHUB_TOKEN = import.meta.env.VITE_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // movie data
  const [movies, setMovies] = useState([]);

  const fetchUser = async () => {
    // Call API to fetch users

    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  // testing api tmdb start

  const fetchTrendingMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=spiderman&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          // Accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_BEAREAR_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    setMovies(data);
  };

  // testing api tmdb stop

  return (
    <GithubContext.Provider
      value={{ users, loading, fetchUser, fetchTrendingMovies, movies }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
