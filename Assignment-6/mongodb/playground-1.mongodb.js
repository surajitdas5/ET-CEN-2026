// create / select db
use('cen')

// create collection
// db.createCollection('student')


// insert
// db.student.insertOne({
//     roll: 2,
//     name: "jane",
//     cgpa: 9.2
// })

// db.student.insertMany([
//     {
//         roll: 3,
//         name: "sam"
//     },
//     {
//         roll: 4,
//         name: "smith",
//         mobile: [789456123, 789451258]
//     }
// ])


// find => select
// db.student.find()
// db.student.findOne()

// create collection
//inserMany

// db.empInfo.insertMany([
//     {
//         "eid": "E101",
//         "name": "John Doe",
//         "salary": 60000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E102",
//         "name": "Jane Smith",
//         "salary": 70000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E103",
//         "name": "Amit Patel",
//         "salary": 55000,
//         "dept": "MGR"
//     },
//     {
//         "eid": "E104",
//         "name": "Priya Sharma",
//         "salary": 80000,
//         "dept": "HR"
//     },
//     {
//         "eid": "E105",
//         "name": "Raj Singh",
//         "salary": 75000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E106",
//         "name": "Kavita Gupta",
//         "salary": 60000,
//         "dept": "MGR"
//     },
//     {
//         "eid": "E107",
//         "name": "Sandeep Verma",
//         "salary": 90000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E108",
//         "name": "Ananya Das",
//         "salary": 65000,
//         "dept": "HR"
//     },
//     {
//         "eid": "E109",
//         "name": "Rahul Kapoor",
//         "salary": 70000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E110",
//         "name": "Pooja Khanna",
//         "salary": 80000,
//         "dept": "SDE"
//     }
// ])

// db.empInfo.find()

// chainign function
// sort
// db.empInfo.find().sort({"dept": 1})
// db.empInfo.find().sort({"dept": -1})
// db.empInfo.find().sort({"salary": -1})
// db.empInfo.find().sort({"dept": 1, "salary": -1})

// limit
// db.empInfo.find().limit(2)
// db.empInfo.find().sort({"salary": -1}).limit(1)
// db.empInfo.find().skip(3).limit(2)

// find => where
// find({query},{project})
// getting all names
// db.empInfo.find({}, {name: 1})
// db.empInfo.find({}, {_id: 0, name: 1})
// db.empInfo.find({}, {_id: 0, name: 1, salary: 1})
// db.empInfo.find({}, {_id: 0})


// find details of all the emp of HR
// db.empInfo.find({dept: "HR"})
// db.empInfo.find({eid: "E104"})
// db.empInfo.find({name: "Amit Patel"}) 
// db.empInfo.find({name: "amit patel"}) // no result
// db.empInfo.find({name: "Amit"}) // no result

// serach
// db.empInfo.find({name: /Amit/}) 
// db.empInfo.find({name: /amit/i}) 
// db.empInfo.find({name: /^A/}) 
// db.empInfo.find({name: /a$/}) 


// Operators

// relational operator
// find({<field_name>: {$operator: <value>}})
// db.empInfo.find({"salary": {$gt: 60000}})
// db.empInfo.find({"salary": {$gte: 60000}})
// db.empInfo.find({"dept": {$eq: "MGR"}})
// db.empInfo.find({"dept": {$in: ["MGR", "HR"]}})


// logical operator
// find({$operator: [{exp1}, {exp2},...]})
// dept=SDE & salary >70000
// db.empInfo.find({$and: [{dept: {$eq: "SDE"}}, {salary: {$gt: 70000}}]})
// db.empInfo.find({$and: [{dept: "SDE"}, {salary: {$gt: 70000}}]})
// implicit AND condtion
// db.empInfo.find({dept: "SDE", salary: {$gt: 80000}})

// OR
// dept is HR or MGR
// db.empInfo.find({$or: [{dept: "HR"}, {dept: "MGR"}]})


// update
// set operator
// update<One/Many>({query},{$set: {k1: v1, k2: v2}})
// update name of E101
// db.empInfo.updateOne({eid: "E101"}, {$set: {name: "ABCD XYZ"}});
// db.empInfo.updateOne({eid: "E101"}, {$set: {name: "John Doe", salary: 75000}});
// db.empInfo.updateMany({dept: "MGR"}, {$set: {dept: "Manager"}});

// db.empInfo.find()

// aggregate functions
// aggregation pipeline
// AggregateError([
//     {
//         stage-1
//     },
//     {
//         stage-2
//     },
//     {
//         stage-3
//     }
// ])

// dept wise avg salary
// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           averageSalary: {
//             $avg: "$salary"
//           }
//         }
//     }
// ])
// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           averageSalary: {
//             $avg: "$salary"
//           }
//         }
//     },
//     {
//         $sort: { "averageSalary": -1}
//     },
//     {
//         $limit: 1
//     }
// ])

// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           empCount: {
//             $sum: 1
//           }
//         }
//     }
// ])
// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           empCount: {
//             $sum: 1
//           }
//         }
//     },
//     {
//         $match: {
//           empCount: {$gt: 5}
//         }
//     }
// ])


// db.contactInfo.insertMany([
//     {
//         "eid": "E101",
//         "mobile": "9876543210",
//         "email": "john.doe@example.com",
//         "address": {
//             "city": "Mumbai",
//             "state": "Maharashtra",
//             "zip": 400001
//         }
//     },
//     {
//         "eid": "E102",
//         "mobile": "9876543211",
//         "email": "jane.smith@example.com",
//         "address": {
//             "city": "Delhi",
//             "state": "Delhi",
//             "zip": 110001
//         }
//     },
//     {
//         "eid": "E103",
//         "mobile": "9876543212",
//         "email": "amit.patel@example.com",
//         "address": {
//             "city": "Ahmedabad",
//             "state": "Gujarat",
//             "zip": 380001
//         }
//     },
//     {
//         "eid": "E104",
//         "mobile": "9876543213",
//         "email": "priya.sharma@example.com",
//         "address": {
//             "city": "Chandigarh",
//             "state": "Punjab",
//             "zip": 160001
//         }
//     },
//     {
//         "eid": "E105",
//         "mobile": "9876543214",
//         "email": "raj.singh@example.com",
//         "address": {
//             "city": "Jaipur",
//             "state": "Rajasthan",
//             "zip": 302001
//         }
//     },
//     {
//         "eid": "E106",
//         "mobile": "9876543215",
//         "email": "kavita.gupta@example.com",
//         "address": {
//             "city": "Kolkata",
//             "state": "West Bengal",
//             "zip": 700001
//         }
//     },
//     {
//         "eid": "E107",
//         "mobile": "9876543216",
//         "email": "sandeep.verma@example.com",
//         "address": {
//             "city": "Bangalore",
//             "state": "Karnataka",
//             "zip": 560001
//         }
//     },
//     {
//         "eid": "E108",
//         "mobile": "9876543217",
//         "email": "ananya.das@example.com",
//         "address": {
//             "city": "Hyderabad",
//             "state": "Telangana",
//             "zip": 500001
//         }
//     },
//     {
//         "eid": "E109",
//         "mobile": "9876543218",
//         "email": "rahul.kapoor@example.com",
//         "address": {
//             "city": "Chennai",
//             "state": "Tamil Nadu",
//             "zip": 600001
//         }
//     },
//     {
//         "eid": "E110",
//         "mobile": "9876543219",
//         "email": "pooja.khanna@example.com",
//         "address": {
//             "city": "Pune",
//             "state": "Maharashtra",
//             "zip": 411001
//         }
//     }
// ])

// db.contactInfo.find()
// db.empInfo.aggregate([
//     {
//         $lookup: {
//           from: "contactInfo",
//           localField: "eid",
//           foreignField: "eid",
//           as: "contactInfo"
//         }
//     }
// ])
// db.empInfo.aggregate([
//     {
//         $lookup: {
//           from: "contactInfo",
//           localField: "eid",
//           foreignField: "eid",
//           as: "contactDetails"
//         }
//     },
//     {
//         $project: {
//           "_id": 0,
//           "name": 1,
//           "contactDetails.mobile": 1,
//           "contactDetails.email": 1,
//           "contactDetails.address.city": 1
//         }
//     }
// ])
// db.empInfo.aggregate([
//     {
//         $lookup: {
//           from: "contactInfo",
//           localField: "eid",
//           foreignField: "eid",
//           as: "contactDetails"
//         }
//     },
//     {
//         $project: {
//           "_id": 0,
//           "name": 1,
//           "contactDetails.mobile": 1,
//           "contactDetails.email": 1,
//           "contactDetails.address.city": 1
//         }
//     },
//     {
//         $match: {
//             "contactDetails.address.city": "Chennai"
//         }
//     }
// ])


// delete
// // db.empInfo.deleteOne({"eid": "E102"})
// db.empInfo.deleteMany({dept: "Manager"})

// db.contactInfo.drop()
db.contactInfo.find()