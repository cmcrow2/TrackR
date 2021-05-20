# TrackR
<br />
<p align="left">
  <h1 align="left">Job Search Logger for Bootcamp Graduates</h1>

  <p align="left">
    This is a project that I initially built in two days. The main functionality of the project is to log a user's application data (i.e. how far the user got in the interview process). The user can select from 4 radio buttons (application sent, phone screening, interview, and job offer) to log that application's final progress. My goal for the future is to add the ability for the user to add the company and title information for each application and dynamically render that list. Another goal is to add a status to the application as in-progress and complete, so that if the application process is still pending, its data is not counted towards the user's conversion rates.
    <br />
    <h3 align="left">
     <strong>Author »</strong>
    <a href="https://github.com/cmcrow2">Cam Crow</a>
     </h3>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#stack">Built With</a></li>
      </ul>
    </li>
    <li><a href="#system-design">System Design</a></li>
    <li><a href="#database-and-etl">Database and ETL</a></li>
    <li><a href="#api-server">API Server</a></li>
    <li><a href="#optimization">Optimization</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#stress-testing">Stress Testing</a></li>
    <li>
     <a href="#workflow">Workflow</a>
     <ul>
      <li><a href="#trello">Trello</a></li>
      <li><a href="#version-control">Version Control</a></li>
     </ul>
    </li>
    <li>
     <a href="#development">Development</a>
     <ul>
      <li><a href="#repo">Repo</a></li>
      <li><a href="#install">Install</a></li>
      <li><a href="#start-scripts">Start Scripts</a></li>
     </ul>
    </li>
  </ol>
</details>

# About
I was tasked with re-engineering the backend of the "Reviews" service of a mock fashion website frontend. I designed:
  * RESTful API to handle requests to a database system of my own choosing
  * ETL (Extract, Transform, Load) process on a raw, flawed data set consisting of over thirty million records
  * Design and build an API server to provide data to the client in the format specified by the API documentation
  * Optimize database and query methods for speed and response
  * Deploy to the cloud using AWS
  * Stress test all API routes, checking for RPS (requests per second), latency, and error rate via loader.io

The final product, when tested with <a href="https://loader.io">loader.io</a> with a maximum of 676 users per second, registered an average response time of 14 ms with a 0.0% error rate.

![](./loaderio.png)


# Stack

<table>
  <tbody>
    <tr>
      <th>Programming Languages</th>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
        <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Tools & Technologies</th>
      <td>
        <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?&style=for-the-badge"/>
        <img alt="Postgres" src ="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Utilities</th>
      <td>
        <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
        <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" />
        <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
      </td>
    </tr>
     <tr>
      <th>Workflow</th>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
        <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
        <img alt="Slack" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/>
        <img alt="Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
        <img alt="Zoom" src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Deployment</th>
      <td>
        <img alt="AWS" src="https://img.shields.io/badge/AWS-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"/>
      </td>
    </tr>
  </tbody>
</table>


# Workflow
Our team used Agile workflow for this project.

## Trello
A Trello board was used to create and track tickets. We held daily standup meetings to discuss accomplishments, challenges, and upcoming tickets. We utilitized Discord, Slack, and Zoom in order to maintain effective remote collaboration and allow for quick communication when necessary.

## Version Control
We utilized Git Feature Branch workflow. All pull requests in Github were reviewed by another team member before being merged into the main branch.

# Development

## Repo
`git clone https://github.com/Team-San-Antonio/SDC-Reviews-Service.git`

## Install
`npm install`

## Start Scripts
```
npm start
```

## Install Postgres
<a href="https://brew.sh/">Install Homebrew</a>

`brew install postgres`

<a href="https://www.postgresql.org/download/">Postgres Documentation</a>
