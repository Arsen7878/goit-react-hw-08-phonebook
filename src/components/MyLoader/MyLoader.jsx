import React from 'react';
import Loader from 'react-loader-spinner';
import c from './MyLoader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const MyLoader = () => {
  return (
    <div className={c.spiner}>
      <Loader type="BallTriangle" color="black" height={80} width={80} />
    </div>
  );
};

export default MyLoader;
