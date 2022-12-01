let a = 10;
function functionA() {
	console.log("Start function A");
	function functionB(){
		console.log("In function B");
	}
	functionB();
}
functionA();
console.log("GlobalContext");
// =================================================
function funA (a, b) {
    let c = 3;
    let d = 2;
    d = function() {
      return a - b;
    }
  }
  
  funA(3, 2);

  executionContextObj = {
    variableObject: {}, // All the variable, arguments and inner function details of the funA
    scopechain: [], // List of all the scopes inside which the current function is
    this // Value of this 
   }