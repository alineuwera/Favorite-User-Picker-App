import logo from './logo.svg';
import './App.css';
import { FavoriteUserProvider } from './Components/FavoriteUserContext';
import UserPicker from './Components/UserPicker';
import UserDisplay from './Components/UserDisplay';

function App() {
  return (
    <div className="App">
      <FavoriteUserProvider>
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Favorite User Picker</h1>
        <UserPicker />
        <UserDisplay />
      </div>
      </FavoriteUserProvider>
    </div>
  );
}

export default App;
