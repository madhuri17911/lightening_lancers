import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import DetailForm from './components/DetailForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [extractedData, setExtractedData] = useState(null);

    const handleNext = (data) => {
        console.log('Data received in handleNext:', data); // Check if the data is received
        setExtractedData(data);
    };

    return (
        <div>
            {!extractedData ? (
                <UploadForm onNext={handleNext} />
            ) : (
                <DetailForm extractedData={extractedData} />
            )}
        </div>
    );

};

export default App;
