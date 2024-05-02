import { cpp } from './js/subjects/Cpp';
import { java } from './js/subjects/Java';
import { react } from './js/subjects/React';
import { cTeacher } from './js/subjects/Teacher';

console.log("C++:");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("\nJava:");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("\nReact:");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
