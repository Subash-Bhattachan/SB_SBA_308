// The provided course information.
const courseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const assignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const learnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  const result = []; // for the final array output
  const studentData = {}; // object to hold all the details regarding the student
  let total_score = 0;
  let total_possible_score = 0;
  let avg = 0;

  // first running the outer for loop to run through the condition that the course ID is defined everytime one runs the application
  try {
    if (course.id === undefined) {
      console.log("Invalid input.");
    } else {
      for (let i = 0; i < submissions.length; i++) {
        if (ag.course_id !== course.id) {
          console.log("Mismatched!");
        } else {
          break;
        }
      }

      // Running the second for loop to run through the assignments length to extract the required result and hence compare on the basis of that
      for (let j = 0; j < ag.assignments.length; j++) {
        //console.log("so far ok-1st");

        // now comparing the due dates and submission dates

        const submittedDate = new Date(submissions[j].submission.submitted_at);
        const dueDate = new Date(ag.assignments[j].due_at);
        const currentDate = new Date();

        //  console.log(submittedDate);
        //  console.log(dueDate);
        //  console.log("6!!")

        let pointsPossible = ag.assignments[j].points_possible;
        let submissionScore = submissions[j].submission.score;

        if (dueDate < currentDate) {
          learnerAssignId = submissions[j].assignment_id;
          assignmentId = ag.assignments[j].id;
          //studentData[j].avg = avg;
          studentData["id"] = submissions[j].learner_id;
          studentData["avg"] = submissionScore / pointsPossible;
          //console.log("good " + avg)
          // console.log(pointsPossible)
          // console.log(submissionScore)
        }

        if (learnerAssignId === assignmentId) {
          if (submittedDate > dueDate) {
            //take off 10% of the score

            studentData["id"] = submissions[j].learner_id;
            studentData["avg"] = (submissionScore / pointsPossible) * 0.9;
            console.log(submissionScore / pointsPossible);
            total_score += submissionScore * 0.9;
            total_possible_score += pointsPossible;
          } else {
            total_score += submissionScore;
            total_possible_score += pointsPossible;
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  studentData["avg"] = (total_score / total_possible_score).toFixed(2);
  //console.log("error message: There is an error.")
  result.push(studentData);
  return result;
}

const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);

console.log(result);

// All the outputs are not printing yet in my case, through I tried a lot.
// I feel there is something still be figured out in if and else statement as the
// rest of the statements are not being tracked according to the date of submissions made.
