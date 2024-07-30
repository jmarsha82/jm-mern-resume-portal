import * as React from 'react';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';

const FullSkillDetails = () => {
  return (
    <div>
      <div className="current-skill-details">
          <Tooltip title={"Used Daily"} placement="top">
            <Button variant="contained" href={"https://visualstudio.microsoft.com/"} target="_blank">{"Visual Studio Code / Enterprise"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Using VSCode for Python and React Projects and Visual Studio Professional for C++, C# and some Xamarin"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Daily"} placement="top">
            <Button variant="contained" href={"https://www.ibm.com/garage/method/practices/code/practice_test_driven_development/"} target="_blank">{"Test-Driven Development"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Incorporated into all work related development and most hobby codding.  It is a standard"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Daily"} placement="top">
            <Button variant="contained" href={"https://docs.flightsimulator.com/html/Programming_Tools/SimConnect/SimConnect_SDK.htm"} target="_blank">{"SimConnect"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"An flight simulator api used to talk to Microsoft Flight Simulator in C++ .exe and webassembly"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Daily"} placement="top">
            <Button variant="contained" href={"https://www.w3schools.com/"} target="_blank">{"HTML, CSS, Typescript, Javascript"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Used in all web apps and sites as part of my job"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Daily"} placement="top">
            <Button variant="contained" href={"https://azure.microsoft.com/en-us/products/devops/"} target="_blank">{"Azure Dev Ops"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Used for Source Control, Work Tracking, Testing, Ci/CD setup and monitoring, VM creation, etc."}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Frequently"} placement="top">
            <Button variant="contained" href={"https://www.sqltutorial.org/"} target="_blank">{"SQL"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"A coding and testing tool for implementing most backends of all web applications I have worked on"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Frequently"} placement="top">
            <Button variant="contained" href={"https://www.postman.com/"} target="_blank">{"Postman"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Testing tool for new backend apis"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Ocassionally"} placement="top">
            <Button variant="contained" href={"https://www.virtualbox.org/"} target="_blank">{"Virtual Box (setting up Vagrant, Ubuntu, Kali Linux)"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Set up several VM images and have used other OS for security testing and distributed application"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Ocassionally"} placement="top">
            <Button variant="contained" href={"https://spring.io/guides"} target="_blank">{"Spring Framework"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Used on multiple projects in java and kotlin with Pivotal or Gitlab as the cloud plaform"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Ocassionally"} placement="top">
            <Button variant="contained" href={"https://junit.org/"} target="_blank">{"JUnit"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Used for testing Java backends of applications"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Occasionally"} placement="top">
            <Button variant="contained" href={"https://www.java.com/en/"} target="_blank">{"Java"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Used on multiple applications and all throughout schooling.  Like riding a bike"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Occasionally"} placement="top">
            <Button variant="contained" href={"https://aws.amazon.com/"} target="_blank">{"AWS"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Set up EC2 for machine learning IoT communication in python with custom made smart devices"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Occasionally"} placement="top">
            <Button variant="contained" href={"https://www.jetbrains.com/idea/"} target="_blank">{"IntelliJ"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Preferred IDE when working in Java if I have the license for Enterprise"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Rarely"} placement="top">
            <Button variant="contained" href={"https://www.thymeleaf.org/"} target="_blank">{"Thymeleaf"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Use with Javascript and a java Spring Framework"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Rarely"} placement="top">
            <Button variant="contained" href={"https://developer.apple.com/swift/"} target="_blank">{"Swift"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Used on mulitple mobile apps for the iPhone"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Rarely"} placement="top">
            <Button variant="contained" href={"https://www.oracle.com/database/sqldeveloper/"} target="_blank">{"Oracle SQL Developer"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Backend testing tool"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Rarely"} placement="top">
            <Button variant="contained" href={"https://www.linux.org/pages/download/"} target="_blank">{"Linux"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Worked in a linux system with file management and scripting in both Ubuntu and Kali"}</div>
      </div>
      <div className="current-skill-details">
          <Tooltip title={"Used Rarely"} placement="top">
            <Button variant="contained" href={"https://kotlinlang.org/"} target="_blank">{"Kotlin"}</Button>
          </Tooltip>
        <div className="current-skill-details-desc">{"Very similiar to Java.  Used with Spring Framework and ReactJS frontend"}</div>
      </div>
    </div>
  )
}

export default FullSkillDetails
