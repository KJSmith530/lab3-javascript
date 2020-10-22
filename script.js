"use strict";

// const passed = (score) => {
//   return score >= 60;
// };

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];
//2.
const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
//testing if one was added
addSubmission(submissions, "Kyle", 101, "2020-10-21");
console.log(submissions);

//3.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
//testing if one was deleted
deleteSubmissionByIndex(submissions, 2);
console.log(submissions);

//4.
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    return item.name === name;
  });
  deleteSubmissionByIndex(array, index);
};
deleteSubmissionByName(submissions, "Joe");
console.log(submissions);

//5.
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 0, 59);
console.log(submissions);

//6.
const findSubmissionByName = (array, name) => {
  let findName = array.find((item) => {
    return item.name === name;
  });
  return findName;
};
console.log(findSubmissionByName(submissions, "Kyle"));

//7.
const findLowestScore = (array) => {
  let currentLowest = array[0];
  array.forEach((item) => {
    if (item.score < currentLowest.score) {
      currentLowest = item;
    }
  });
  return currentLowest;
};
console.log(findLowestScore(submissions));

//8.
const findAverageScore = (array) => {
  let totalScore = 0;
  for (let i = 0; i < array.length; i++) {
    totalScore += array[i].score;
  }
};
console.log(findAverageScore(submissions));

//9.
const filterPassing = (array) => {
  let passingArray = array.filter((item) => {
    return item.passed === true;
  });
  return passingArray;
};
console.log(filterPassing(submissions));

//10.
const filter90AndAbove = (array) => {
  let aboveNinety = array.filter((item) => {
    return item.score >= 90;
  });
  return aboveNinety;
};
console.log(filter90AndAbove(submissions));
