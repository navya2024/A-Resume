import React, {Component} from 'react';
import Education from './Education';
import Profile from './Profile';
import Projects from './Projects';
import Experience from './Experience';
import Extras from './Extras';

export class Resume extends Component {
  state = {
    step: 1,
    // Personal Profile Details...
    firstname:'',
        lastname:'',
        positionapp:'',
        aboutme:'',
        email:'',
        phone:'',
        address:'',
        github:'',
        pinterest:'',
        linkedin:'',
        facebook:'',
        instagram:'', 

    // Education Information
    degree: '',
    collegename: '',
    collegestart: '',
    collegeend: '',
    hsc: '',
    school1: '',
    hscstart: '',
    hscend: '',
    ssc: '',
    school2: '',
    sscstart: '',
    sscend: '',


    // // Project Information...
    title1: '',
    link1: '',
    projectDescription1: '',
    title2: '',
    link2: '',
    projectDescription2: '',
    title3: '',
    link3: '',
    projectDescription3: '',

    // // Experience Information
    institute1: '',
    position1: '',
    duration1: '',
    experienceDescription1: '',
    institute2: '',
    position2: '',
    duration2: '',
    experienceDescription2: '',

    // // Extra Information
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: '',
    skill7: '',
    interest1: '',
    interest2: '',
    interest3: '',
    interest4: '',
    interest5: '',
    interest6: '',
  };

  nextStep = () => {
    const {step} = this.state;
    this.setState ({
      step: step + 1,
    });
  };

  prevStep = () => {
    const {step} = this.state;
    this.setState ({
      step: step - 1,
    });
  };

  handleChange = ({target: {value, name}}) => {
    this.setState ({[name]: value});
  };

  render () {
    const {step} = this.state;
    const {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
      website,
      github,
      linkedin,
      twitter,
      facebook,
      instagram,

      // Education Information
      degree,
        collegename,
        collegestart,
        collegeend,
        hsc,
        school1,
        hscstart,
        hscend,
        ssc,
        school2,
        sscstart,
        sscend,


      // Project Information...
      title1,
      link1,
      projectDescription1,
      title2,
      link2,
      projectDescription2,
      title3,
      link3,
      projectDescription3,

      // Experience Information
      institute1,
      position1,
      duration1,
      experienceDescription1,
      institute2,
      position2,
      duration2,
      experienceDescription2,

      // Extra Information
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      skill7,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
    } = this.state;
    const values = {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
      website,
      github,
      linkedin,
      twitter,
      facebook,
      instagram,

      // Education Information
      degree,
        collegename,
        collegestart,
        collegeend,
        hsc,
        school1,
        hscstart,
        hscend,
        ssc,
        school2,
        sscstart,
        sscend,


      // Project Information...
      title1,
      link1,
      projectDescription1,
      title2,
      link2,
      projectDescription2,
      title3,
      link3,
      projectDescription3,

      // Experience Information
      institute1,
      position1,
      duration1,
      experienceDescription1,
      institute2,
      position2,
      duration2,
      experienceDescription2,

      // Extra Information
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      skill7,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
    };
    switch (step) {
      case 1:
        return (
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto text-center">
              <Profile
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto text-center">
              <Education
               nextStep={this.nextStep}
               prevStep={this.prevStep}
               handleChange={this.handleChange}
               values={values}
               />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="App mt-3">
            <div className="container col-lg-8 mx-auto text-center">
              <Projects
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto text-center">
              <Experience
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto text-center">
              <Extras
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      default: return <div/>;
      }
  }
  

}

export default Resume;
