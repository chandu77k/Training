import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Dashboard from "./DashBoard";
const RouterFile = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </>
    );
};

export default RouterFile;
