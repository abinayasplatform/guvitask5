// create your own resume data in JSON format


let myResume = {


personalDetails : {
    name : 'Abinaya',
    age : 24,
    email : 'abinayaraja1624@gmail.com',
    phone : 9876543210,
    location : {
        address : 'kulalar palayam',
        postalcode : 625513,
        city : 'Theni',
        State : 'Tamil Nadu',
        country : 'India'
                },
    profile : {
        github : ''
              }
    },


education : {
    institue : 'Sri Ramakrishna Institute of Technology',
    department : 'Computer Science and Engineering',
    cgpa : 8.6,
    startYear : 2018,
    endYear : 2022 
},


skills : {
    skillName : 'HTML,Excel,Java',
    level : 'Moderate',
    project : {
        projectTitle : 'Traffic Flow Prediction on Road Transformation System'
    }
},


language : {

    write : 'Tamil, English',
    read : 'Tamil, English',
    speak : 'Tamil, English, Telugu'
}



};

console.log(myResume);


//output


//  {
//     personalDetails: {
//       name: 'Abinaya',
//       age: 24,
//       email: 'abinayaraja1624@gmail.com',
//       phone: 9876543210,
//       location: {
//         address: 'kulalar palayam',
//         postalcode: 625513,
//         city: 'Theni',
//         State: 'Tamil Nadu',
//         country: 'India'
//       },
//       profile: { github: '' }
//     },
//     education: {
//       institue: 'Sri Ramakrishna Institute of Technology',
//       department: 'Computer Science and Engineering',
//       cgpa: 8.6,
//       startYear: 2018,
//       endYear: 2022
//     },
//     skills: {
//       skillName: 'HTML,Excel,Java',
//       level: 'Moderate',
//       project: {
//         projectTitle: 'Traffic Flow Prediction on Road Transformation System'
//       }
//     },
//     language: {
//       write: 'Tamil, English',
//       read: 'Tamil, English',
//       speak: 'Tamil, English, Telugu'
//     }
//   }