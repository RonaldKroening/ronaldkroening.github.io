import logo from './logo.svg';
import './App.css';
import jobs from 'resitems.json';
import projs from 'featured_projects.json';
app.js
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
console.log(jobs);
console.log(projs);
function App() {
  app.get('/',function(req,res) {
    res.sendFile('index.html');
  });
}

export default App;
