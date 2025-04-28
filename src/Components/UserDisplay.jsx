import { useFavoriteUser } from "./FavoriteUserContext";

const UserDisplay = () => {
    const { favoriteUser, setFavoriteUser } = useFavoriteUser();
  
    if (!favoriteUser) return <p className="mt-6 text-center text-gray-500">No favorite user selected.</p>;
  
    return (
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <p className="text-green-800 font-medium">
          Your favorite user is{" "}
          <span className="font-bold">{favoriteUser.name}</span> ({favoriteUser.email})
        </p>
        <button
          onClick={() => {
            localStorage.removeItem("favoriteUser");
            setFavoriteUser(null);
          }}
          className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Clear Favorite
        </button>
      </div>
    );
  };
  

export default UserDisplay;
