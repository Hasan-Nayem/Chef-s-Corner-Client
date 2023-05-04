import React from 'react';
import './Loader.css';
import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="container progress-bar-container">
            <span className="progress-bar ">
                <ProgressBar
                    height="80"
                    width="80"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{ }}
                    wrapperClass="progress-bar-wrapper"
                    borderColor = '#f93f23'
                    barColor = '#212529'
                ></ProgressBar>
            </span>
        </div>
    );
};

export default Loader;