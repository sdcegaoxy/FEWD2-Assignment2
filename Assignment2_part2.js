//step1
//COMM644
//Assignment 2, Part 2
//
//Part 1 - Math and Math Functions (5 points)
//Create a new web page and solve these JavaScript Math problems:
//1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
//---------------------------------------------
//var input =prompt("Please input a number");
//var regExp=/^-?\d*\.?\d*$/g;
//if(input.match(regExp)!=null){
//    alert(Math.abs(input));
//}else{
//    alert("You put an error number");
//}
//---------------------------------------------

//2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
//---------------------------------------------
//var input = prompt("Please input a float number");
//var regExp=/^-?\d*\.\d*$/g
//if(input.match(regExp)!=null){
//    alert(Math.ceil(input,0));
//}else{
//    alert("You put an error float number");
//}
//---------------------------------------------

//3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
//---------------------------------------------
//var input = prompt("Please input a float number");
//var regExp=/^-?\d*\.\d*$/g
//if(input.match(regExp)!=null){
//    alert(Math.floor(input,0));
//}else{
//    alert("You put an error float number");
//}
//---------------------------------------------

//4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
//---------------------------------------------
//var input = prompt("Please input 5 numbers as 1,2,3,4,5");
//var regExp1=/-?\d*\.?\d*$/g;
//var regExp2=/,/g;
//var arrays;
//if(checkformat(input)){
//    arrays=input.split(",");
//}
//if(checkvalue(arrays)){
//    arrays=mySort(arrays);
//};
//console.log(arrays);
//console.log("Max number is "+arrays[4]+"|| Min number is "+arrays[0]);
//
////check user input 
//function checkformat(str){
//    var result=false;
//    if(input.match(regExp2).length==4){
//        result=true;
//    }
//    return result;
//}
////check value is number
//function checkvalue(arrays){
//    var res=false;
//   
//    for(var i=0;i<arrays.length;i++){
//       if (arrays[i].match(regExp1)!=null){
//        arrays[i]=parseFloat(arrays[i]);
//        res=true;
//       }else{
//        res=false;
//       }
//    }
//    return res;
//}
////bubble sort
//function mySort(myArray){
//　　　　var length = myArray.length;
//　　　　for(i=0; i<=length-2; i++) {
//　　　　　　for(j=length-1; j>=1; j--) {
//　　　　　　　　if(myArray[j] < myArray[j-1]) {
//　　　　　　　　　　temp = myArray[j];
//　　　　　　　　　　myArray[j] = myArray[j-1];
//　　　　　　　　　　myArray[j-1] = temp;
//　　　　　　　　}
//　　　　　　}
//　　　　}
//    
//    return myArray;
//}
//---------------------------------------------

//5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
//---------------------------------------------
//var input =prompt("Please input a number");
//var regExp=/^-?\d*\.?\d*$/g;
//if(input.length>0&&input.match(regExp)!=null){
//    console.log(Math.pow(input,2));
//}else{
//    alert("You put an error number");
//}
//---------------------------------------------

//Part 2 - Date and Date Functions (6 points)
//Continue with the previously created web page and now solve these JavaScript Date problems:
//6.	Create an application that gets the current date. Display that result within the console window.
//---------------------------------------------
//var d = new Date();
//console.log(d.toDateString());
//---------------------------------------------
//7.	Create an application that gets the number of days in a month. Display that result within the console window.
//---------------------------------------------
//var input = prompt("Please input the month in number");
//var regExp=/([1-9]|0[1-9]|1[0-2])/g;
//if(parseInt( input)<=12&&input.match(regExp)!=null){
//    
//    var date = new Date();
//    var lastDay = new Date(date.getFullYear(), input, 0).getDate();
//    console.log("There is "+lastDay+" days in "+input +" month");
//}else{
//    alert("You put an error month number");
//}
//---------------------------------------------
//8.	Create an application that gets the month name from a particular date. Display that result within the console window.
//---------------------------------------------
//var input= prompt("Please input the date as 2015-09-09");
//var monthNames = ["January", "February", "March", "April", "May", "June",
//  "July", "August", "September", "October", "November", "December"];
//var mydate=new Date(input);
//console.log(monthNames[mydate.getMonth()]);
//---------------------------------------------

//9.	Create an application that tests whether a date is a weekend. Display that result within the console window.
//---------------------------------------------
//var input= prompt("Please input the date as 2015-09-09");
//var regExp=/^\d{4}\-\d{1,2}\-\d{1,2}/g;
//if(input.match(regExp)!=null){
//    var myDate=new Date(input);
//    var myday=myDate.getDay();
//    var isWeekEnd=false;
//    if(myday==6?isWeekEnd=true:isWeekEnd=false);
//    console.log(input+ " is week end. This is "+isWeekEnd);
//}else{
//    alert("You put an error number");
//}
//var mydate=new Date(input);
//console.log();
//---------------------------------------------

//10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
//---------------------------------------------
//var input= prompt("Please input the date as 2015-09-09");
//var regExp=/^\d{4}\-\d{1,2}\-\d{1,2}/g;
//if(input.match(regExp)!=null){
//    var myDate=new Date(input);
//    var myday=myDate.getDay();
//    var isWeekEnd=false;
//    var dayName=["Mon","Tue","Wen","Thu","Fri","Sat","Sun"];
//    myday--;
//    if(myday<0)myday=6;  
//    console.log(dayName[myday]);
//}else{
//    alert("You put an error number");
//}
//var mydate=new Date(input);
//console.log();
//---------------------------------------------

//11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
//---------------------------------------------
//var myday=new Date();
//var dayName=["S","M","T","W","T","F","S"];
//var dayIndex=myday.getDay();
//console.log(dayName[dayIndex]);
//---------------------------------------------

//Part 3 - Conditional Logic and Looping Operations (4 points)
//Continue with the previously created web page and now solve these JavaScript conditional logic and looping problems:
//12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
//---------------------------------------------
//var var1=prompt("input number 1");
//var var2=prompt("input number 2");
//
//var regExp=/^\d/g;
//if(var1.match(regExp)!=null&&var2.match(regExp)!=null){
//	if(var1>=var2){
//		console.log(var1+ " is larger");
//	}else{
//		console.log(var2+ " is larger");
//}
//}else{
//	alert("Error input numb1 or numb2");
//}
//---------------------------------------------

//13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
// 
//Student Name	Marks
//Ursula	80
//Paul	77
//Henry	88
//Tabitha	95
//Lucy	68
//
//The grades are computed as follows:
//
//Range	Grade
//<60	F
//<70	D
//<80	C
//<90	B
//<100	A
//
//---------------------------------------------
//var students=[
//				{"name":"Ursula","mark":"80","grade":""},
//				{"name":"Paul","mark":"77","grade":""},
//				{"name":"Henry","mark":"88","grade":""},
//				{"name":"Tabitha","mark":"95","grade":""},
//				{"name":"Lucy","mark":"68","grade":""}			 
//			 ];
//
//var grademap=new Map();
//	grademap.set(100,"A");
//	grademap.set(90,"B");
//	grademap.set(80,"C");
//	grademap.set(70,"D");
//	grademap.set(60,"E");
//
//for(var i in students){
//	var student=students[i];
//	student.grade=grademap.get(Math.ceil(Math.round(student.mark/10+0.5))*10);
//	console.log(student.name +" grade is "+ student.grade);
//}
//---------------------------------------------

//14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
//---------------------------------------------
//for(var i=1;i<16;i++){
//	if(i%2==0){
//		console.log(i + " is even" );
//	}else{
//		console.log(i +" is odd");
//	}
//}
//---------------------------------------------

//15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
//---------------------------------------------
//var printChar="";
//var isPrintChar=false;
//for(var i=1;i<=100;i++){
//	
//	if(i%3==0){
//		printChar="Fizz";
//		isPrintChar=true;
//	} 
//	
//	if(i%5==0){
//		printChar="Buzz";
//		isPrintChar=true;
//	}
//	
//	if(i%3==0 && i%5==0){
//		printChar="FizzBuzz";
//		isPrintChar=true;
//	}
//	
//	if(isPrintChar){
//		console.log(printChar);
//	}else{
//		console.log(i);
//	}
//	
//	isPrintChar=false;
//}
//---------------------------------------------

//Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)
//In this game you will explore what you’ve learned so far about variables, prompts, alerts, strings, conditionals, and more to create a game similar to the Hitchhiker’s Guide to the Galaxy. To complete the game follow the steps outlined below:
//1.	Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
//2.	Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”
//3.	Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”
//4.	Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”
//5.	Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
//6.	Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.
//---------------------------------------------
//var userchoice=confirm("Are you ready to play your game?");
//if(userchoice){
//	alert("Awesome, our hero is waiting!");
//	alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");//point 2
//	startGame();
//	rateGame();
//	
//}else{
//	alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
//}
//
//function startGame(){
//	
//	var input=prompt("Which direction would you like to head (please enter forward, left, or right)");
//	var regExp=/^forward|^left|^right/g;
//	
//	if(input.trim().match(regExp)!=null){
//		
//		switch (input){
//			case "forward":
//				alert("You walk about 100 yards and safely make your way out of the cave.");
//				break;
//			case "right":
//				alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//				break;
//			case "left":
//				alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//				break;
//		}
//		
//	}else{
//		alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//		startGame();
//	}	
//}
//
//function rateGame(){
//	var input=prompt("Please rate our game on a scale of 1 to 10");
//	var regExp=/\d/g;
//	var feedback=new Map();
//	feedback.set(1,"Thank you, we will continue to make improvements to the game!");
//	feedback.set(2,"Whatever, you weren’t very good at this game anyway!");
//	if(input.match(regExp)!=null&&input<6&&input>0){
//		alert(feedback.get(2));
//	}else{
//		alert(feedback.get(1));
//	}
//}
//---------------------------------------------

//Part 5 - The “Coin Flip” Game (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:
//1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
//2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
//3.	Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
//4.	If the result is heads and the user selects heads, display the following message within an alert: 
//The flip was heads and you chose heads...you win!
//5.	If the result is heads and the user selects tails, display the following message within an alert: 
//The flip was heads but you chose tails...you lose!
//6.	If the result is tails and the user selects heads, display the following message within an alert: 
//The flip was tails but you chose heads...you lose!
//7.	If the result is tails and the user selects tails, display the following message within an alert: 
//The flip was tails and you chose tails...you win!
//8.	Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.
//---------------------------------------------
//var coinFilp=Math.round(Math.random()*10);
//var certainNumb=Math.round(Math.random()*10);
////console.log("coinFilp="+coinFilp);
////console.log("certainNumb="+certainNumb);
//var choice=getInput();
//
//function getInput(){
//	var input=prompt("Heads or Tails?");
//	var regExp=/Heads|Tails/g;
//	if(input.match(regExp)==null){
//		getInput();
//	}else{
//		if(input=="Heads") return true;
//		else return false;
//	}
//}
////console.log("choice="+choice);
//var contentsMap=new Map();
//contentsMap.set(1,"The flip was heads and you chose heads...you win!");
//contentsMap.set(2,"The flip was heads but you chose tails...you lose!");
//contentsMap.set(3,"The flip was tails but you chose heads...you lose!");
//contentsMap.set(4,"The flip was tails and you chose tails...you win!");
//
//var backresult=coinFilp<certainNumb;
////console.log("backresult="+backresult+"||user choice="+choice);
//if(choice==true&&backresult==true)alert(contentsMap.get(1));
//if(choice==false&&backresult==true)alert(contentsMap.get(2))
//if(choice==true&&backresult==false)alert(contentsMap.get(3));
//if(choice==false&&backresult==false)alert(contentsMap.get(4));
//---------------------------------------------

//Part 6 - The “Coin Flip” Game Redux (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:
//1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
//2.	Create a for loop that loops 10 times.
//3.	Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
//4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.
//---------------------------------------------
//var coinFilp;
//var contentsMap=new Map();
//contentsMap.set(0,"Heads");
//contentsMap.set(1,"Tails");
//
//for(var i=0;i<10;i++){
//	coinFilp=Math.round(Math.random());
//	//console.log(i+"||"+coinFilp+"||"+contentsMap.get(coinFilp));
//	console.log(contentsMap.get(coinFilp));
//}
//---------------------------------------------

//Part 7 - The “Coin Flip Streak” Game (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:
//1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
//2.	Create a do while loop.
//3.	Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
//4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
//5.	Set the condition of the do while loop to end once the coinFlip becomes “Tails”.
//---------------------------------------------
//var coinFilp;
//var contentsMap=new Map();
//contentsMap.set(0,"Heads");
//contentsMap.set(1,"Tails");
//
//while(coinFilp!="Tails"){
//	var rnd=Math.round(Math.random());
//	coinFilp=contentsMap.get(rnd);
//	console.log(coinFilp);
//}
//---------------------------------------------

//Part 8 – Looping a Triangle (5 points)
//Write a loop that displays the following triangle within a console window:
//#
//##
//###
//####
//#####
//######
//#######
//---------------------------------------------
//for(var i=0;i<7;i++){
//	var out="#";
//	for(var j=0;j<i;j++){
//		out=out+"#";
//	}
//	console.log(out);
//}
//---------------------------------------------

//Part 9 – Odd or Even? (5 points)
//Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
//Sample Output:
//"0 is even" 
//"1 is odd" 
//"2 is even"
//---------------------------------------------
//for(var i=0;i<16;i++){
//	var out=(i%2==0);
//	if(out){
//		console.log(i +" is even");
//	}else{
//		console.log(i + " is odd")
//	}
//	
//}
//--------------------------------------------- 
