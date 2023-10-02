# Car-Insurance-Quote-App-with-TDD
This repository contains the code and documentation for building the backend of an insurance purchasing process while following the principles of Test-Driven Development (TDD).


## Tech Stack

**Client** 
> ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Tailwind](	https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Server**
> ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![node js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

**DataBase** 
> ![MySql](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

**Test**
> ![Mocha](https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown)

<br />

<div align="center">

https://github.com/HelenaMission/Car-Insurance-Quote-App-with-TDD/assets/132238788/2f66b0f4-cb3f-411a-bd50-c0016b9d1a8b

</div>

<br/>

## APIs

I worked on three RESTful APIs that are essential for the insurance purchasing process. These APIs are:

**API 1: Convert "Model" and "Year" to a Suggested "Car Value"**
   - This API takes parameters "model" and "year" and returns a suggested car value in JSON format based on specific business rules.

**API 2: Convert "Claim History" to a "Risk Rating"**
   - This API takes the parameter "claim_history" and calculates a risk rating for a driver based on a set of keywords in the claim history text.

**API 3: Convert "Car Value" and "Risk Rating" to a "Quote"**
   - This API takes parameters "car_value" and "risk_rating" and calculates monthly and yearly premium values for an insurance policy.

<br/>

## TDD 

**Task 1: Created Test Cases**
   - Wrote comprehensive test cases for the APIs to verify their functionality.

**Task 2: Implemented Unit Tests**
   - Implemented 5 of the test cases as automated unit tests using the recommended unit testing framework.

**Task 3: Built API**
   - Built the API and continuously tested it against the unit tests to ensure it passed all cases.

<br/>

<div align="center">
  
![Screenshot 2023-10-03 at 9 20 29 AM](https://github.com/HelenaMission/Car-Insurance-Quote-App-with-TDD/assets/132238788/6778d4ef-3adc-4688-b316-66ab5be0f7a4) 

![Screenshot 2023-10-03 at 9 20 41 AM](https://github.com/HelenaMission/Car-Insurance-Quote-App-with-TDD/assets/132238788/ee846ff7-d522-4385-9bf2-0450f033fb69)

</div>



<br/>

## Getting Started

To get started with this mission, follow these steps:

1. Clone this repository to your local development environment.
   ```sh
   git clone https://github.com/HelenaMission/Car-Insurance-Quote-App-with-TDD.git
   ```
2. Set appropriate env file to connect with database.
   
3. Open backend folder in terminal and run dev
   ```sh
   npm run dev
   ```
4. To run test, open backend folder in terminal and run test
   ```sh
   npm run test
   ```
5. Open frontend folder in terminal and run start script
   ```sh
   npm start
   ```

<br/>

Feel free to reach out if you have any questions or need assistance during this mission. 



