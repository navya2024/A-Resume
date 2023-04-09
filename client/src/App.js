import makeStyles from '@mui/styles/makeStyles';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Resumes from './components/navbar/Resumes';
import Header from './components/navbar/Header';
import About from './components/navbar/About';
import Home from './components/navbar/Home';
import Resume from './components/resume/Resume';

const useStyles = makeStyles({});
  


function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
    <Header/>
    <Routes>
    <Route exact path="/" element={<Home/>}  />

        <Route exact path="/resumes" element={<Resumes/>}  />
        <Route exact path="/about" element={<About/>} />
        {/* <Route exact path="/contact" render={<Contact />} /> */}
        <Route exact path="/*" element={<Navigate to ="/"/>} /> 
         <Route exact path="/resume" element={<Resume/>} /> 

        </Routes>
    
    </div>
  );
}

export default App;
