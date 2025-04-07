import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import GiftPage from './GiftsPage';

const RouterFile = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/items" element={<GiftPage />}/>
                </Routes>
            </Router>
        </>
    );
};

export default RouterFile;
