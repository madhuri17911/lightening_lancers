import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Dashboard from './components/Dashboard';
import CandidateTable from './components/CandidateTable';
import PostJobForm from './components/PostJobForm';
import PostCourseForm from './components/PostCourseForm';
import DetailForm from './components/DetailForm';
import UploadForm from './components/UploadForm';
import HomePage from './components/HomePage';  // Import HomePage component
import PlacedStudentsDetailsPage from './components/PlacedStudentsDetailsPage';  // Import the new page
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [activePage, setActivePage] = useState('dashboard');
    const [extractedData, setExtractedData] = useState(null);

    const handleNext = (data) => {
        setExtractedData(data);
    };

    return (
        <Router>
            <div>
                <TopNavbar onMenuClick={setActivePage} />
                <div className="mt-4">
                    <Switch>
                        <Route path="/dashboard" component={HomePage} />
                        <Route path="/candidates" component={CandidateTable} />
                        <Route path="/post-job" component={PostJobForm} />
                        <Route path="/post-course" component={PostCourseForm} />
                        <Route path="/add-user" exact>
                            {!extractedData ? <UploadForm onNext={handleNext} /> : <DetailForm extractedData={extractedData} />}
                        </Route>
                        <Route path="/placed-students" component={PlacedStudentsDetailsPage} /> {/* New route */}
                        <Route path="/" component={Dashboard} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
