import React from 'react';
import style from './Loading.css';

const Loading = () => {
  return (
    <div className={style.spinner}>
      <div className={style.bounce1}></div>
      <div className={style.bounce2}></div>
      <div className={style.bounce3}></div>
    </div>
  );
};

export default Loading;
