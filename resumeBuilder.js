/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // Data Types - var loveJS=true; https://classroom.udacity.com/courses/ud804/lessons/1930528550/concepts/19177285960923#
 $("#main").append("MABC");
 var firstName2 = "Miguel";
 var age2 = 40;
 var age3 = 10;
 console.log("Edad:" + age3);
 
 
 
 // Save & .append()
 var awesomeThoughts = "I am Miguel and I am AWESOME";
 console.log(awesomeThoughts);
 
 
 
 // string.replace() replace udacity with gmail;
 var email = "cameron@udacity.com";
 var newEmail = email.replace("udacity", "gmail");
 console.log(email);
 console.log(newEmail);
 
 
 
 // 2 string.replace() replace udacity with gmail;
 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 console.log(awesomeThoughts);
 console.log(funThoughts);
 $("#main").append(funThoughts);
 
 
 
 // Format Data, Build a ...
 var formattedName = HTMLheaderName.replace("%data%", "Miguel");
 var formattedRole = HTMLheaderRole.replace("%data%", "WebDesigner");
  
 console.log(HTMLheaderName);
 console.log(HTMLheaderRole);
 
 console.log(formattedName);
 console.log(formattedRole);
 $("#header").append(formattedName + " " + formattedRole);
 
 
 
 // Lesson Data Types - Quiz: String Manipulation Quiz 1
 var audacity = "audacity";
 var Udacity = audacity.replace('u', 'U');
 var Udacity = Udacity.slice(1, 8);
 
 console.log(Udacity);
 // console.log(String.replace(audacity, /a/, 'U'));
 
 
 
 // Lesson Data Types - Arrays
 var skills = ["awesomeness", "programming", "teaching", "JS"];
 // $("#main").append(skills);
 //$("#main").append(skills[0]);
 //$("#main").append(skills.length); 
 
 
 
 // Lesson Data Types - Quiz: Array Manipulation
 var numbers = [2, 4, 6, 10];
 
 numbers.forEach(function(item, index, numbers) {
	 console.log(item, index);
 });

 
 var lastnumber = numbers[numbers.length-1] + 1;
 numbers.pop();
 numbers.push(lastnumber);
 
 
 numbers.forEach(function(item, index, numbers) {
	 console.log(item, index);
 });
 
 
 
 
 

 
 