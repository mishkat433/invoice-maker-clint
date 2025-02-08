import React from 'react';
// import "./DotLoading.css"

const DotLoading = ({ size }: { size: string }) => {
    return (
        // flex items-center gap-1.5 capitalize
        <div className=''>
            {/* <p>Loading</p> */}
            <span className={`loading loading-dots loading-${size}`}></span>
        </div>
    );
};

export default DotLoading;