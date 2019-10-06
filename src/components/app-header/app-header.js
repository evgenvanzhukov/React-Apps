import React from 'react';

const Appheader = ({todo,done}) => {
  return (
    <div className="app-header d-flex">
      <h1>My todo list: </h1>
      <h4>{todo} more to do, {done} done</h4>
    </div>
  );
}

export default Appheader;