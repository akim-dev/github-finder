import { createContext, useState } from "react";
import PropTypes from "prop-types";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_URL;
const GITHUB_TOKEN = import.meta.env.VITE_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <GithubContext.Provider value={{ users, loading, fetchUser }}>
      {children}
    </GithubContext.Provider>
  );
};

children.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubContext;
