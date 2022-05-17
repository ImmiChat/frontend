import React from 'react';
import Sidebar from './Sidebar';

const HomePage = (props) => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='col-3 bg-white py-5'>
                <Sidebar />
            </div>
            <div className="col-5 border border-dark bg-muted"></div>
            <div className="col-4  bg-muted"></div>
            
        </div>  
    );
}
 
export default HomePage;