 const express = require('express');
  const router = express.Router();
  var teachers = []
  console.log(teachers);
  var students =[]
  console.log(students);
  var parents = []
  console.log(parents);
  var subjects = []
  console.log(subjects);
  var courses = []
  console.log(courses);
  var colleges = []
  console.log(colleges);
  var scores =[]
  console.log(scores);
 var attendances = []
 console.log(attendances);
 var timetables = []
 console.log(timetables);
 var fees = []
 console.log(fees);
 var librarys = []
 console.log(librarys);
 var generalsettings = []
console.log(generalsettings);

router.get('/', (req, res, next) => {
    res.status(200).json  ({
        message: 'HANDLING GET REQUEST TO /product',
        teachers : teachers,
    });

});

router.post('/', (req, res, next) => {
    const teacher = {
          name: req.body.name,
          age: req.body.age,
          designation: req.body.designation,
          subject: req.body.subject,
          address: req.body.address,
          contact: req.body.contact,
          gender: req.body.gender,
          jobrole: req.body.jobrole,
          username: req.body.username,
          password: req.body.password,
          email: req.body.email
          
              };
            teachers.push(teacher)
          
      res.status(201).json  ({
          message: 'HANDLING POST REQUEST TO /product',
        createdTeacher: teacher
  
      });
  
  });
  
  router.get('/students', (req, res, next) => {
    res.status(200).json  ({
        message: 'HANDLING GET REQUEST TO /students',
        students: students
    });
});

router.post('/students', (req, res, next) => {   
  const student = {
        name: req.body.name,
        section: req.body.section,
        photo: req.body.photo,
        studentid: req.body.studentid,
        contact: req.body.contact,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
        
            };
          students.push(student)
        
    res.status(201).json  ({
        message: 'HANDLING POST REQUEST TO /students',
      createdStudent: student

    });
});


router.get('/parents', (req, res, next) => {
    res.status(200).json  ({
        message: 'HANDLING GET REQUEST TO /parents',
        parents: parents
    });

});
router.post('/parents', (req, res, next) => {   
    const parent = {
          name: req.body.name,
          photo: req.body.photo,
          parentid: req.body.parentid,
          username: req.body.username,
          password: req.body.pasword,
          email: req.body.email,
          phone: req.body.phone
          
              };
            parents.push(parent)
          
      res.status(201).json  ({
          message: 'HANDLING POST REQUEST TO /parents',
        createdParent: parent
  
      });
  
  });

  router.get('/subjects', (req, res, next) => {
    res.status(200).json ({
        message : 'HANDLING GET REQUSRT TO /subjects',
        subjects: subjects
    });
});

  router.post('/subjects', (req, res, next)  => { 
      const subject = {
          name: req.body.name,
          department: req.body.department,
          subjectcode: req.body.subjectcode
      };
      subjects.push(subject)

    res.status(201).json ({
         message: 'HANDLING POST REQUEST TO /subjects',
         createdSubject: subject
    });  

  });

  router.get('/courses', (req, res, next) => {
    res.status(200).json ({
        message: 'HANDLING GET REQUEST TO /courses',
        courses: courses
    });
});
  router.post('/courses', (req, res, next) => {
      const course = {
          name: req.body.name,
          duration: req.body.duration,
          totalstudents: req.body.totalstudents
      };
       courses.push(course)
      res.status(201).json ({
          message: 'HANDING PST REQUEST TO /courses',
          createdCourse: course
      });
  });

  router.get('/colleges', (req, res, next) => {
      res.status(200).json ({
          message: 'HANDLING GET REQUEST TO /colleges',
          colleges: colleges
      });
  });

  router.post('/colleges', (req, res, next) => {
      const college = {
          name: req.body.name,
          location: req.body.location,
          state: req.body.state
      };
      colleges.push(college)
      res.status(201).json ({
          message: 'HANDLING POST REQUEST TO /colleges',
          createdCollege: college
      });
  });

  router.get('/scores', (req, res, next) => {
    res.status(200).json ({
        message: 'HANDLING GET REQUEST TO /scores',
         scores: scores
        
    });

});

router.post('/scores', (req, res, next) => {
    const score = {
       subject: req.body.subject,
       student: req.body.student,
       marks: req.body.marks
    };
    scores.push(score)
      res.status(201).json ({
          message: 'HANDLING POST REQUEST TO /scores',
          createdScore: score
      });
});

router.get('/attendances', (req, res, next) => {
    res.status(200).json  ({
        message: 'HANDLING GET REQUEST TO /attendances',
        attendances: attendances
    });
});

router.post('/attendances', (req, res, next) => {
    const attendance = {
       student: req.body.student,
       teacher: req.body.teacher,
       subject: req.body.subject,
       day: req.body.day
       
    };
    attendances.push(attendance)
      res.status(201).json ({
          message: 'HANDLING POST REQUEST TO /attendances',
          createdAttendance: attendance
      });
});



router.get('/timetables', (req, res, next) => {
    res.status(200).json  ({
        message: 'HANDLING GET REQUEST TO /timetables',
        timetables: timetables
    });
});

router.post('/timetables', (req, res, next) => {
    const timetable = {
       day: req.body.day,
       period1: req.body.period1,
       period2: req.body.period2,
       period3: req.body.period3,
       period4: req.body.period4,
       period5: req.body.period5,
       period6: req.body.period6,
       period7: req.body.period7,
       
    };
    timetables.push(timetable)
      res.status(201).json ({
          message: 'HANDLING POST REQUEST TO /timetables',
          createdTimetable: timetable
      });
});

router.get('/fees', (req, res, next) => {
    res.status(200).json  ({
        message: 'HANDLING GET REQUEST TO /fees',
        fees: fees
    });
});

router.post('/fees', (req, res, next) => {
    const fee = {
       studentid: req.body.studentid,
       parentid: req.body.parentid,
       amount: req.body.amount,
       date: req.body.date
       
    };
    fees.push(fee)
      res.status(201).json ({
          message: 'HANDLING POST REQUEST TO /fees',
          createdFee: fee
      });
});



router.get('/librarys', (req, res, next) => {
    res.status(200).json  ({
        message: 'HANDLING GET REQUEST TO /librarys',
        librarys: librarys
    });
});

router.post('/librarys', (req, res, next) => {
    const library = {
       bookid: req.body.bookid,
       nameofbook: req.body.nameofbook,
       dateofissue: req.body.dateofissue,
       dateofsubmission: req.body.dateofsubmission,
       numberofbook: req.body.numberofbook
       
    };
    librarys.push(library)
      res.status(201).json ({
          message: 'HANDLING POST REQUEST TO /librarys',
          createdLibrary: library
      });
});

router.get('/generalsettings', (req, res, next) => {
    res.status(200).json  ({
        message: 'HANDLING GET REQUEST TO /generalsettings',
        generalsettings: generalsettings
    });
});

router.post('/generalsettings', (req, res, next) => {
    const generalsetting = {
       platformname: req.body.platformname,
       platformlogo: req.body.platformlogo,
       address: req.body.address,
       phone: req.body.phone,
       email: req.body.email,
       about: req.body.about,
       primarycolor: req.body.primarycolor,
       secondarycolor: req.body.secondarycolor
    };
    generalsettings.push(generalsetting)
      res.status(201).json ({
          message: 'HANDLING POST REQUEST TO /generalsettings',
          createdGeneralsetting: generalsetting
      });
});


router.put('/', (req, res, next) => {
    const teacher = {
        name: req.body.name,
        age: req.body.age,
        designation: req.body.designation,
        subject: req.body.subject,
        address: req.body.address,
        contact: req.body.contact,
        gender: req.body.gender,
        jobrole: req.body.jobrole,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    };
    res.status(201).json  ({
        message: 'HANDLING PUT REQUEST TO /product',
      createdTeacher: teacher
    });

});

router.get('/:productID', ( req, res, next) => {
    const id = req.params.productID;
    if (id ==='special') {
       res.status(200).json ({
          message: 'YOU DISCOVERD SPECIAL ID',
           id: id
       });
      }
       else {
           res.status(200).json ({
              message: 'YOU PASSED AN ID'
           });

       
      }
 });

 router.patch('/:productID', (req, res, next) => {
      res.status(200).json ({
           message: 'UPDATED PRODUCT'
      });
 });

 
 router.delete('/:productID', (req, res, next) => {
    res.status(200).json ({
         message: 'DELETED PRODUCT'
    });
});
 module.exports = router;