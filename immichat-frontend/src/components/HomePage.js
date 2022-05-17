import React from 'react';
import CreatePost from './CreatePost';
import Sidebar from './Sidebar';
import Feed from './Feed';

const HomePage = (props) => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='col-lg-2 col-4 bg-white py-5'>
                <Sidebar />
            </div>
            <div className="col-lg-6 col-8 bg-muted border-start border-end border-dark">
                <CreatePost />
                <Feed />
            </div>
            <div className="col-lg-3 bg-muted"></div>
            
        </div>  
    );
}
 
export default HomePage;