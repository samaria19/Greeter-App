/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * */
 * // hour is 0-11
 * Good Morning!
 **if(hours >=0 && hours<=11 ){
   console.log("Good Morning.")
 }
 
 * // hour is 12-16
 * Good Afternoon! 
 *if(hours >=12 && hours <=16){
console.log("Good Afternoon ")
 }
 * // hour is 17-21
 * Good Evening!
 *if(hours >=17 && hours <=21 ){
   consolelog("Good Evening")
 }
 * // hour is 22-24 
 * Good Night!
 *if(hours >=22 && hours <=24){
   console.log("Good Night ")
 }
 * 
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */