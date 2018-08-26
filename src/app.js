import React from 'react'
import ReactDOM from 'react-dom';
import validator from 'validator';

const template = <p>jsx </p>
var app_id   = document.getElementById("app");

ReactDOM.render(template , app_id);

console.log(validator.isEmail('test@yahoo.com'));