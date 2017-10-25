//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
 
  
  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
    reverseIt:function r(s){return s===""?s:s[s.length-1]+r(s.slice(0,s.length-1));},

    removeDups:function(a){
	for(let i=0;i<a.length;i++){
	    if(a.indexOf(a[i])!==i){
		a.splice(i,1);
		i--;
	    }
	}
	return a;
    },
    
  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

    titleIt:function(s){return s.split(" ").map(x=>x[0].toUpperCase()+x.slice(1,x.length)).join(" ");},

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

    vowelCounter:function(s){
	return s.match(/[aeiou]/gi).length;
    },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

    isPrime:function(n){
	if(typeof n !== 'number'){return false;}
	if(n<2){return false;}
	for(let i=2;i<n;i++){
	    if(n%i===0){return false;}
	}
	return true;
    },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

    foo:'1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

    log1:'Hello World',
    log2:undefined //should be 'ReferenceError: bar is not defined' or at least 'Hello' + undefined which
    // javascript aparently thinks should be the string: 'Helloundefined' !!!
}


