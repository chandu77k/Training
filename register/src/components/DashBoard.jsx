import { useLocation, useNavigate } from "react-router-dom";
import "../css/Dashboard.css";
import Button from "react-bootstrap/Button";
const Dashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleLogout = () =>{
    navigate("/");
  }
  return (
    <div id="container">
      <div className="form-container">
        <h2 className="signup">Dashboard</h2>

        <p><strong>Username:</strong></p>
        <div className="Display">
        <p className="inside-field">{state.username}</p>
        </div>

        <p><strong>Email:</strong></p>
        <div className="Display">
        <p className="inside-field">{state.email}</p>
        </div>

        <p><strong>Password:</strong></p>
        <div className="Display">
        <p className="inside-field">{state.password}</p>
        </div>

        <p><strong>Phone Number:</strong></p>
        <div className="Display">
        <p className="inside-field">{state.phoneNumber}</p>
        </div>

        <p><strong>Join Date:</strong></p>
        <div className="Display">
        <p className="inside-field">{state.startDate}</p>
        </div>

        <div className="logout">
        <Button variant="secondary" type="submit" onClick={handleLogout}>
            Logout
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
