import PropTypes from 'prop-types'
import React from 'react';

function Employee({name,age}) {

  return (
<div>
  <h2>Employee Details</h2>
  <p>Name: {name}</p>
  <p>Age: {age}</p>
</div>
  );
}

Employee.PropTypes={
    // name : PropTypes.string,
    // age : PropTypes.number,
    // salary : PropTypes.number,
    // isPermanent : PropTypes.bool
}


export default Employee;