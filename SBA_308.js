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

// Gathering data
// Making functions
function validateAssignmentGroup (courseInfo, assignmentGroup) {
    if (courseInfo.id !== assignmentGroup.course_id)
    {console.log("The input is invalid.")}
    else 
    {return courseInfo.id === assignmentGroup.course_id;}
}


function validateSubmission (learnerSubmission, assignments) {
    if (assignments.points_possible !== 0 || 
        learnerSubmission.score !== 0) {
            return false;}
    else {
        return true;
    }

}

function calculateWeightedAverage (learnerSubmission, assignments) {
    return (learnerSubmission.score / assignments.points_possible ) * 100;
}



function getLearnerData(course, ag, submissions) {
  
  const result = [];
 const studentData= {};
  
  try {
    if (course.id === undefined) {
        console.log ("Invalid input.");
    } else {

        for (let i = 0; i < submissions.length; i++) {
          
          if (ag.course_id !== course.id) {
            console.log("Mismatched!");
          }
          else {
          break;
          }

        }
        

        //
          //const studentData = {}; // creating empty object for student data
          // submissions.learner_id = id; // pushing objects of interest
          // studentData.avg = avg;
          // studentData.assignment_id = number;
          
          let total_score = 0;
          let total_possible_score = 0;
          let avg = 0;
              

         for (let j = 0; j < ag.assignments.length; j++) {
          //for (const [key, value] of Object.entries(studentData)) {
           console.log("so far ok-1st");


           // now comparing the due dates and submission dates

           const submittedDate = new Date(submissions[j].submission.submitted_at);
           const dueDate = new Date(ag.assignments[j].due_at);
           const currentDate = new Date();
          
          
          
           console.log(submittedDate);
           console.log(dueDate);
           console.log("6!!")


           
           let pointsPossible = ag.assignments[j].points_possible;
           let submissionScore = submissions[j].score;
           let avg = submissionScore / pointsPossible;


          

                if (dueDate < currentDate) {

                  let learnerAssignId = submissions[j].assignment_id;
                  let assignmentId = ag.assignments[j].id;
                  //studentData[j][0] = avg;
                  console.log(avg)

                }

                //if (ag.assignments[j].id === submissions[j].assignment_id) {
                
                if (submittedDate > dueDate) {
                //print out the total average
                //let submissionScore = submissions[j].score;
                studentData[j][0] = avg * 0.9
                console.log(submissionScore);
                  //return avg;
                total_score += submissionScore;
                total_possible_score += pointsPossible;
                console.log("#####")
                  }
                else {
                      total_score += submissionScore;
                      total_possible_score += pointsPossible;
                    }
            

         

        }

        }
     
   } catch (error) {
     console.log(error);
     //studentData["avg"] = total_score / total_possible_score;
    
    
    
     
  }
  //console.log("error message: There is an error.")
  result.push(studentData)
  return result;
}

  // CourseInfo

  // AssignmentGroup

  // LearnerSubmissions
  //result.push(studentData)
  


const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);

console.log(result);
