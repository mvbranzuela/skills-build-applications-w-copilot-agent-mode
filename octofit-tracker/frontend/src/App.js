
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';



function App() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Octofit Logo" className="App-logo" />
          Octofit Tracker
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/activities">Activities</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/teams">Teams</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/workouts">Workouts</NavLink></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <div className="card shadow-lg p-4" style={{ maxWidth: '500px' }}>
              <div className="card-body">
                <h1 className="card-title text-center mb-3">Welcome to Octofit Tracker!</h1>
                <p className="card-text text-center">Track your fitness activities, join teams, compete on the leaderboard, and get personalized workout suggestions.</p>
                <div className="d-flex justify-content-center">
                  <NavLink to="/activities" className="btn btn-primary mx-2">View Activities</NavLink>
                  <NavLink to="/leaderboard" className="btn btn-success mx-2">Leaderboard</NavLink>
                </div>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
