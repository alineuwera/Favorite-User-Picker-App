import { useEffect, useState } from "react";
import { useFavoriteUser } from "./FavoriteUserContext";

const UserPicker = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { favoriteUser, setFavoriteUser } = useFavoriteUser();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-gray-500 text-center">Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select Your Favorite User:</h2>
      <div className="space-y-3">
        {users.map((user) => {
          const isSelected =
            favoriteUser &&
            favoriteUser.name === user.name &&
            favoriteUser.email === user.email;

          return (
            <div
              key={user.id}
              className={`flex justify-between items-center p-3 rounded-lg ${
                isSelected ? "bg-green-100 border border-green-300" : "bg-white"
              }`}
            >
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <button
                onClick={() =>
                  setFavoriteUser({ name: user.name, email: user.email })
                }
                className={`px-3 py-1 rounded transition ${
                  isSelected
                    ? "bg-green-600 text-white hover:bg-green-700 animate-pulse"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {isSelected ? "Selected" : "Pick"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserPicker;
