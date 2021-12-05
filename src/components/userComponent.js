import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component yüklendi.");

let logger1 = new ElasticLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Ataberk", "Kasap", "İzmir");
let user2 = new User(2, "Engin", "Demiroğ", "Ankara");
// userService.add(user1);
// userService.add(user2);


// console.log(userService.list());

// console.log(userService.getById(2));


/*
let customer = {id: 1, firstName: "Engin"};

//prototyping
customer.lastName = "Demiroğ";

console.log(customer.lastName);*/
console.log("--------------------------")
userService.load();

let customerToAdd = new Customer(1, "Seda", "Yılmaz", "Ankara", 21);
customerToAdd.type = "customer";
userService.add(customerToAdd);
console.log("Customers", userService.customers);
console.log("Employees", userService.employees);
console.log("Errors", userService.errors);
console.log(userService.getCustomersSorted());