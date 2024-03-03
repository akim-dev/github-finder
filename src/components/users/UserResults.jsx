import { useContext, useEffect } from "react";
import Spiner from "../layout/Spiner";
import UserItem from "../users/UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading, fetchUser } = useContext(GithubContext);
  // console.log(users);

  useEffect(() => {
    fetchUser();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {users.map((user) => (
          <div key={user.id}>
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  } else {
    return <Spiner />;
  }
}

export default UserResults;
