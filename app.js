// // chapter 1
// window.alert("Welcome Visitors");
// window.alert("Error!Please enter valid password");
// window.alert("Welcome to JS Land \n Happy Coding");

// window.alert("Welcome to JS Land..");
// window.alert("Happy Coding");

// // chapter 2
//  // task 1
//  var userName;
//  // task 2
//  var myName = "sufiyanlakhani";
//  // task 3

//  var message;
//  message = "Hello World";
//  alert(message);

//  // task 4

//  var name = "sufiyanlakhani";
//  var age = 21;
//  var university = "IQRA UNIVERSITY";
//  var course = "Web and Mobile App Development";

//  alert(name);
//  alert(age);
//  alert(university);
//  alert(course);

//  // task 5
//  var abc = "PIZZA\nPIZZ\nPIZ\nPI\nP";
//  alert(abc);

//  //task 6

//  var noOfChilder = 2;
//  var partnerName = "ABCD";
//  var address = "Karachi, Pakistan";
//  var job = "Software Engineer";

//  alert(
//    "You will be a " +
//      job +
//      " in " +
//      address +
//      ", and married to " +
//      partnerName +
//      " with " +
//      noOfChilder +
//      " Kids"
//  );

//  // task 7

//  var email = "sufiyanlakhani609@gmail.com";
//  alert("My Email Address is " + email);

//  //task 8

//  var book = "'A smarter way to learn JavaScript'";
//  alert("I am trying to learn from book " + book);

//  // task 9

//  alert(
//    "My Name is " +
//      name +
//      " i am " +
//      age +
//      " year old and i Study in " +
//      university +
//      " i take " +
//      course +
//      " Module A"
//  );

//  // task 10

//  document.write("Yay! I can write HTML content through Javascript");

//  document.write("<br/><br/><center><h3> The End </h3></center>");

// //  chapter 3
// var age = 18;

// //task 1

// window.alert("i am " + age + " year old.");

// // task 2

// var N;
// N = 18;
// window.alert("You have visit this site " + N + " times");

// // task 3

// var birthYear;
// birthYear = 2001;

// document.write("My Birth Year is " + birthYear);
// document.write("<br />Data Type of my birth year is Number");

// // task 4

// var visitorName = "Hunain";
// var productTitle = "Jeans";
// var quantity = 5;

// document.write(
//   "<br />" +
//     visitorName +
//     " order " +
//     quantity +
//     " " +
//     productTitle +
//     " on XYZ Clothing Store"
// );

// document.write("<br/><br/><center><h3> The End </h3></center>");
// </script>

// // chapter 4
// // task 1

// var var1,var2,var3;

// // task 2

// // legal variable

//  var _name , age, $count,first,var12c;
// alert("Legal Names for variable : _name , age, $count, first, var12c")
//  // Ill Legal Variables

// //  var 12add, #sub , &div , #$mul , 1212mode;   

// alert("Il Legal Name for Variable are : 12add, #sub , &div , #$mul , 1212mode")

// // task 3

// //a 
// document.write("<h1> Rules for Naming Variables </h1> <br/>");
// document.write("* Variable Name can only contain <b>Letter </b>, <b>Number</b>,<b>Dollar Sign</b> and <b>Under Score</b><br/>");
// document.write("  For Example <b> $my_1stVariable</b><br/>");
// document.write("* Variable Must Begin with a <b>Letter</b>, <b>Dollar Sign</b>, <b>Under Score</b><br/>   For Example <b>$name</b>, <b>_name</b>, <b>name</b><br/>");
// document.write("* Variable name are case <b>Sensitive</b><br/>");
// document.write("* Variable names should not be JS <b>keywords</b><br/>");

// document.write("<br/><br/><center><h3> The End </h3></center>")

// // chapter 5 to 7
//  // task 1

//  var num1 = 13,num2 = 9;
//  sum = num1 + num2 ;

//  alert("Sum of "+num1+" and "+num2+" is "+sum);

//  // task 2

//  var sub = num1-num2;    
//  alert("Subtraction of "+num1+" and "+num2+" is "+sub);

//  alert("Multiplication of "+num1+" and "+num2+" is "+num1 * num2);

//  alert("Division of "+num1+" and "+num2+" is "+num1/num2); 

//  // task 3

//  document.write("<h1>Variables</h1>");
//  var num3;
//  document.write("Value after declaration is :"+num3);

//  num3 = 3;

//  document.write("<br />Value after initialization is : "+num3);   
//  num3++;
 
//  document.write("<br />Value after increment is :"+num3);

//  num3 +=7;
//  document.write("<br/>Value after addition is :"+num3);
//  num3--;
//  document.write("<br/>Value after decrement is :"+num3);
//  document.write("<br/>The reminder is : "+num3%3);    
 
//  // task 4

//  var cost = 600;

//  document.write("<br/><br/> Cost of Buy 5 ticket is : ", cost*5);

//  // task 5

//  document.write("<br><br><br><h1>Multiplication Table of 4 </h1><br/>");
//  for(var i=1;i<=10;i++)
//  {
//      document.write("4 X "+i+" = "+(4*i)+"<br/>");
//  }

//  // task 6

//  var celsius = 12;
//  var fahrenheit = (celsius * 9/5) + 32;
//  document.write("<br/><br/><h1>Degree Conversion</h1>");
//  document.write("<br/>12 Degree Celcius is "+fahrenheit+" Degree Fahrenheit<br/>");

//  var far = 68;
//  var cel = (far - 32)*5/9;

//  document.write("68 Degree Fahrenheit is "+cel+" Degree Celcius<br/>");

//  // task 7

//  var item1 = 560;
//  var item2 = 200;
//  var qitem1 = 2;
//  var qitem2 = 5;
//  var shipCharges = 150;
//  document.write("<br/><br/><h1>Shopping Cart</h1>")
//  document.write("<br/>Price of Item 1 is "+item1);
//  document.write("<br/>Quantity of Item 1 is "+qitem1);
//  document.write("<br/>Price of Item 2 is "+item2);
//  document.write("<br/>Quantity of Item 1 is "+qitem2);
//  document.write("<br/><br/>Shipping charges is "+shipCharges);
//  var total=(item1*qitem1)+(item2*qitem2)+(shipCharges);
//  document.write("<br/><br/>Total Cost of your order is "+total+" PKR");


//  // task 8

//  var totalmarks = 1200;
//  var obtainedmarks = 900;
 
//  document.write("<br/><br/><h1>Mark Sheet</h1>")
//  document.write("<br/>Total Marks : "+totalmarks);
//  document.write("<br/>Obtained Marks : "+obtainedmarks);
//  document.write("<br/>Percentage : "+(obtainedmarks/total)*100+"%");


//  // task 9

//  document.write("<br/><br/><h1>Currency Exchange in PKR</h1>");
//  var us = 104;
//  var riyal = 28;
//  var res = (us*10)+(riyal*25);
//  document.writeln("<br/>Total currency in PKR is "+res);

//  // task 10

//  var a = 1;
//  a = (((a+5)*10)/2);
//  alert(a);

//  // task 11

//  document.write("<br/><h1>Age Calculator</h1>");
//  var curryear = 2018;
//  var birthYear = 1997;
//  var exact = curryear - birthYear;
//  var exact2 = exact+1;
//  document.writeln("<br/>They are either "+exact+" or "+exact2+" Year Old");

//  // task 12

//  document.write("<h1>The Geometrizer</h1>");
//  var radius = 12;
//  var circum = 2*3.142*radius;
//  var area = 3.142*radius*radius;
//  document.write("<br/>The Radius is "+radius);
//  document.write("<br/>The Circumference of is ",circum);
//  document.write("<br/>The Area is "+area);

//  // task 13

//  var number = 10;
//  document.write("<h1>Results</h1>");
//  document.write("<br/>The Value of Number is "+number);
//  document.write("<br/>..........................................<br/>");
//  document.write("<br/>The Value of ++Number is "+(++number));
//  document.write("<br/>Now the Value of Number is "+number);
//  document.write("<br/><br/>The Value of Number++ is "+number++);
//  document.write("<br/>Now the Value of Number is "+number);
//  document.write("<br/><br/>The Value of --Number is "+--number);
//  document.write("<br/>Now the Value of Number is "+number);
//  document.write("<br/><br/>The Value of Number-- is "+number--);
//  document.write("<br/>Now the Value of Number is "+number);

//  // task 14

//  var a = 2,b=1;
//  var result = --a - --b + ++b + b--;
//  var res1= --a;
//  var res2 =--a - --b;
//  var res3 = --a - --b + ++b;
//  var res4 = --a - --b + ++b + b--;

//  document.write("<br/><br/>The Output of --a - --b + ++b + b-- is ",result);
//  document.write("<br/>The Output of --a is ",res1);
//  document.write("<br/>The Output of --a - --b is ",res2);
//  document.write("<br/>The Output of --a - --b + ++b is ",res3);
//  document.write("<br/>The Output of --a = --b + ++b + b-- is ",res4);

//  // task 15

//  document.write("<h1>Life Time Supply Calculator</h1>");
//  var fvrtSnack = "Oreo Biscuit";
//  var currAge = 21;
//  var maxAge = 60;
//  var estimate = 2;
//  var estimatedEat = (maxAge - currAge)*2;

//  document.write("<br/>Favorite Snack : ",fvrtSnack);
//  document.write("<br/>Current Age : ",currAge);
//  document.write("<br/>Estimated Maximum age : ",maxAge);
//  document.write("<br/>Amount of Snack per day : ",estimate);
//  document.write("<br/>You will need ",estimatedEat," ",fvrtSnack," to Last you until the ripe old age of ",maxAge);


// //  chapter 8 to 11
//  // task 1

//  var name = prompt("Please Enter Your Name :");
//  alert("Hi, " + name);

//  //task 2

//  var num = prompt("Enter The Number of Table :");
//  num = parseInt(num);

//  document.write("<h1>Multiplication Table of ", num, "</h1><br/>");

//  for (var i = 1; i <= 10; i++) {
//    document.write(num, " X ", i, " = ", num * i, "<br/>");
//  }

//  // task 3

//  var city = prompt("Enter Your City Name :");
//  if (city === "karachi" || city === "Karachi") {
//    alert("Welcome to City Of Light");
//  } else {
//    alert("Sorry !! <br/>You Enter Wrong City");
//  }

//  // task 4

//  var gen = prompt("Please Enter your gender :");
//  if (gen === "male" || gen === "Male") {
//    alert("Good Morning Sir");
//  } else if (gen === "female" || gen === "Female") {
//    alert("Good Morning Ma'am");
//  }

//  // task 5

//  var signal = prompt("Selecet a Traffic Signal :");
//  if (signal === "red" || signal === "Red") {
//    alert("Vehicles Must Stop");
//  } else if (signal === "yellow" || signal === "Yellow") {
//    alert("Vehicles should get ready to move");
//  } else if (signal === "green" || signal === "Green") {
//    alert("Vehicles can move now");
//  } else {
//    alert("Wrong Signal !! ");
//  }

//  // task 6

//  var mage = prompt("Enter Max Age :");
//  var cage = prompt("Enter Current Age :");

//  if (cage <= mage) {
//    alert("You are Welcome");
//  }

//  // task 7

//  var remainFuel = prompt("Enter Remaining Fuel in Car in liters :");
//  if (remainFuel > 0.25) {
//    alert("Please Refill the fuel in car ");
//  }

//  // task 8

//  var a = 4;
//  if (++a === 5) {
//    alert("given condition for variable is true ");
//  }

//  var b = 82;
//  if (b++ === 83) {
//    alert("given condition is true");
//  }
//  var c = 12;
//  if (c++ === 13) {
//    alert("condition 1 is true");
//  }
//  if (c === 13) {
//    alert("condition 2 is true");
//  }
//  if (++c < 14) {
//    alert("condition 3 is true");
//  }
//  if (c === 14) {
//    alert("condition 4 is true");
//  }

//  var materialCost = 20000;
//  var laborCost = 2000;
//  var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost) {
//    alert("The cost equals");
//  }

//  if (true) {
//    alert("True");
//  }
//  if (false) {
//    alert("False");
//  }

//  if ("car" < "cat") {
//    alert("car is smaller than cat");
//  }

//  // task 9

//  var sub1 = prompt("Enter Marks of subject 1 : ");
//  var sub2 = prompt("Enter Marks of Subject 2 : ");
//  var sub3 = prompt("Enter Marks of Subject 3 : ");

//  sub1 = parseInt(sub1);
//  sub2 = parseInt(sub2);
//  sub3 = parseInt(sub3);
//  var tmarks = sub1 + sub2 + sub3;
//  var per = (tmarks / 300) * 100;
//  document.write("<h1>Marks Sheet</h1>");
//  if (per >= 80) {
//    document.write(
//      "Total Marks : 300 <br/>Marks Obtained : ",
//      tmarks,
//      "<br/>Percentage : ",
//      per,
//      "<br/>Grade is A-one <br/>Remarks : Excelent"
//    );
//  } else if (per >= 70) {
//    document.write(
//      "Total Marks : 300 <br/>Marks Obtained : ",
//      tmarks,
//      "<br/>Percentage : ",
//      per,
//      "<br/>Grade is A <br/>Remarks : Good"
//    );
//  } else if (per >= 60) {
//    document.write(
//      "Total Marks : 300 <br/>Marks Obtained : ",
//      tmarks,
//      "<br/>Percentage : ",
//      per,
//      "<br/>Grade is B <br/>Remarks : You need to improve"
//    );
//  } else if (per < 60) {
//    document.write(
//      "Total Marks : 300 <br/>Marks Obtained : ",
//      tmarks,
//      "<br/>Percentage : ",
//      per,
//      "<br/>Grade is Fail <br/>Remarks : Sorry"
//    );
//  }

//  // task 10

//  document.write("<h1>Shopping Cart</h1>");

//  var item1 = prompt("Enter Name of Item 1 :");
//  var pitem1 = prompt("Enter Price of Item 1 :");
//  var oq1 = prompt("Enter Order quantity of Item 1 :");
//  var item2 = prompt("Enter Name of item 2 :");
//  var pitem2 = prompt("Enter Price of Item 2 :");
//  var oq2 = prompt("Enter Order quantity of Item 2 :");
//  var shipcharges = prompt("Enter Shiping charges :");

//  var ti1 = pitem1 * oq1;
//  var ti2 = pitem2 * op2;
//  var tot = ti1 + ti2 + shipcharges;
//  var dis = 0;
//  document.write("Price of ", item1, " is ", pitem1);
//  document.write("<br/>Quantity of ", item1, " is ", oq1);
//  document.write("<br/>Price of ", item2, " is ", pitem2);
//  document.write("<br/>Quantity of ", item2, " is ", oq2);
//  document.write("<br/>Shipping Charges is ", shipcharges);

//  document.write("<br/><br/>Total cost of your order is : ", tot);

//  if (tot >= 2000) {
//    dis = (tot * 10) / 100;
//    tot = tot - dis;
//  }
//  document.write("<br/>Discount Price is : ", tot);

//  // task 11

//  alert("Guess Game :");
//  var n = prompt("Select a number from a range of 1 to 10 ");
//  if (n === 4) {
//    alert("Bingo! Correct");
//  } else if (n > 4) {
//    n--;
//    alert("Close Enough to correct answer");
//  } else if (n < 4) {
//    n++;
//    alert("Close Enough to correct answer");
//  }

//  // task 12

//  var nn = prompt("Enter a Number to check it is divisible by 3 or not :");
//  if (nn % 3 == 0) {
//    alert("Number is Divisible by 3 ");
//  } else {
//    alert("Number is not Divisible by 3 ");
//  }

//  // task 13

//  var name1 = prompt("Enter Name of Team A :");
//  var totscore1 = prompt("Enter Total Score of Team A :");

//  var name2 = prompt("Enter Name of Team B :");
//  var totscore2 = prompt("Enter Total Score of Team B :");

//  if (totscore1 > totscore2) {
//    alert("Team ", name1, " is Won the Game ");
//  } else if (totscore2 > totscore2) {
//    alert("Team ", name2, " is Won the Game ");
//  } else if (totscore1 === totscore2) {
//    alert("Tie between Team ", nam1, " and ", name2);
//  }

//  // task 14

//  var country = "Pakistan";
//  var numbers = 92;
//  var bool = true;

//  alert(country, " is a String ");
//  alert(numbers, " is a Number ");
//  alert(bool, " is a Boolean");

//  // task 15

//  var check = prompt("Enter a number to check its even or odd :");
//  if (check % 2 == 0) {
//    alert("Even Number ");
//  } else {
//    alert("Odd Number ");
//  }

//  // task 16

//  document.write("<h1>Weather Report </h1>");
//  var temp = prompt("Enter Temperature :");

//  if (temp > 40) {
//    document.write("It is too hot outside");
//  } else if (temp > 30) {
//    document.write("<br/>The Weather today is normal");
//  } else if (temp > 20) {
//    document.write("<br/>Today's Weather is Cool");
//  } else if (temp > 10) {
//    document.write("<br/>OMG!! Today's Weather is so cool");
//  }

//  // task 17
//  alert("Calculator");
//  var number1 = prompt("Enter Number 1 :");
//  var number2 = prompt("Enter Number 2 :");
//  var opr = prompt(
//    "Enter Operator : <br/>+ for Addition<br/>- for Subtraction<br/>* for Multiplication<br/>/ for Division"
//  );
//  number1 = parseInt(number1);
//  number2 = parseInt(number2);

//  if (opr == "+") {
//    alert("Addition is ", number1 + number2);
//  } else if (opr == "-") {
//    alert("Subtraction is ", number1 - number2);
//  } else if (opr == "*") {
//    alert("Multiplication is ", number1 * number2);
//  } else if (opr == "/") {
//    alert("Division is ", number1 / number2);
//  }

//  // task 18

//  var day = prompt("Enter name of day :");
//  if (
//    day == "monday" ||
//    day == "tuesday" ||
//    day == "wednesday" ||
//    day == "thursday" ||
//    day == "friday"
//  );
//  {
//    alert("Its a Week Days");
//  }
//  if (day == "saturday") {
//    alert("It's Weekend");
//  } else if (day == "sunday") {
//    alert("Yay! It's holiday");
//  }

//  // task 19

//  var score = prompt("Enter your score ");
//  if (score >= 50) {
//    alert("you are Passed ");
//  } else {
//    alert("Try Again");
//  }

//  // task 20

//  var n1 = prompt("Enter number 1 ");
//  var n2 = prompt("Enter number 2 ");
//  if (n1 > n2) {
//    alert("The greater number between ", n1, " and ", n2, " is ", n1);
//  } else {
//    alert("The greater number between ", n1, " and ", n2, " is ", n2);
//  }

//  // task 21

//  var lang = prompt("Enter any one Language code<br/>zn<br/>en<br/>ur :");
//  if (lang == "zn") {
//    alert("你好，世界。！");
//  } else if (lang == "en") {
//    alert("Hello World !");
//  } else if (lang == "ur") {
//    alert("ہیلو ورلڈ!");
//  }

//  // task 22

//  var nm = prompt(
//    "Enter a number to check whether it's positive or negative"
//  );
//  if (nm < 0) {
//    alert("Negative Number");
//  } else {
//    alert("Positive Number");
//  }

//  // task 23

//  var nmm = prompt("Enter a number ");
//  var noun = prompt("Enter a Noun");
//  alert(nmm, " ", noun);

//  alert("The End");

// //  chapter 12 to 13
//  // task 1

//  var num = prompt(
//     "Enter a number to check whether it's divisible by 3 or not :"
//   );
//   if (num % 3 == 0) {
//     alert("Number is divisible by 3 ");
//   } else {
//     alert("Number is not divisible by 3 ");
//   }

//   // task 2

//   var num1 = prompt("Enter a number to check it's even or odd ");
//   if (num1 % 2 == 0) {
//     alert("Even Number ");
//   } else {
//     alert("Odd Number");
//   }

//   // task 3

//   var age = prompt("Enter your age :");
//   if (age > 18) {
//     alert("Old Enough");
//   } else {
//     alert("Too young");
//   }

//   // task 4

//   var name = prompt("Enter Your Name :");
//   if (name === "Huzaifa khan") {
//     alert("WellCome <br/>", name);
//   }

//   // task 5

//   var userNum1 = prompt(
//     "Question 5. \n Enter a number which is divisible by 3."
//   );
//   switch (userNum1 % 3) {
//     case 0:
//       alert("Question 5. \n Number is divisible by 3.");
//       break;
//     default:
//       alert("Question 5. \n Number is not divisible by 3.");
//   }

//   // task 6
//   var char = prompt("Enter only single character :");
//   if (char >= "A" && char <= 90) {
//     alert("Capital letter ");
//   } else if (char >= "97" && char <= "122") {
//     alert("small letter");
//   } else {
//     alert("Number");
//   }
//   // task 7

//   var number1 = prompt("Enter your first number");
//   var number2 = prompt("Enter your second number");
//   var operator = prompt("Select Operator<br/> +, -, *, / , % ");
//   number1 = parseInt(number1);
//   number2 = parseInt(number2);
//   switch (operator) {
//     case "+":
//       alert(
//         number1 +
//           " " +
//           operator +
//           " " +
//           number2 +
//           " " +
//           "is" +
//           " " +
//           number1 +
//           number2
//       );
//       break;
//     case "-":
//       alert(
//         number1 +
//           " " +
//           operator +
//           " " +
//           number2 +
//           " " +
//           "is" +
//           " " +
//           number1 -
//           number2
//       );
//       break;
//     case "*":
//       alert(
//         number1 +
//           " " +
//           operator +
//           " " +
//           number2 +
//           " " +
//           "is" +
//           " " +
//           number1 * number2
//       );
//       break;
//     case "/":
//       alert(
//         number1 +
//           " " +
//           operator +
//           " " +
//           number2 +
//           " " +
//           "is" +
//           " " +
//           number1 / number2
//       );
//       break;
//     case "%":
//       alert(
//         number1 +
//           " " +
//           operator +
//           " " +
//           number2 +
//           " " +
//           "is" +
//           " " +
//           (number1 % number2)
//       );
//       break;
//     default:
//       alert("Invalid Operator");
//   }

//   // task 8

//   var userTime = prompt(
//     "Enter a time in 24 hour clock format. Like: 1900 = 7pm"
//   );
//   userTime = parseInt(userTime);
//   if (userTime === parseInt(userTime)) {
//     if (userTime >= 0000 && userTime < 1200) {
//       alert("Question 8. \n Good Mornig!");
//     } else if (userTime >= 1200 && userTime < 1700) {
//       alert("Question 8. \n Good Afternoon!");
//     } else if (userTime >= 1700 && userTime < 2100) {
//       alert("Question 8. \n Good Evening!");
//     } else if (userTime >= 2100 && userTime <= 2359) {
//       alert("Question 8. \n Good Night!");
//     }
//   } else {
//     alert("Enter a valid time.");
//   }

//   // task 9

//   var leapYear = prompt("Enter a year to check it's leap year or not ");
//   if (leapYear % 4 == 0) {
//     alert("Leap Year ");
//   } else {
//     alert("Not a Leap Year");
//   }

//   // task 10

//   var corrPassword = "Ghulam Mustafa";
//   var askPassword = prompt("Enter Your Password");
//   if (askPassword == "") {
//     alert("Please Enter Your Password");
//   } else if (askPassword === corrPassword) {
//     alert("Correct Password");
//   } else {
//     alert("Incorrect");
//   }

//   // task 11

//   var firstName = "Hunain";
//   if (firstName === "Usama") {
//     document.write("Hello Fahad!");
//   } else {
//     document.write("<br/> You are not Fahad");
//   }

//   // task 12

//   var greeting;
//   var hour = 13;
//   if (hour < 18) {
//     greeting = "Good day";
//     document.write(greeting);
//   } else {
//     greeting = "Good evening";
//     document.write(greeting);
//   }

//   // task 13

//   var num1 = prompt("Enter Number 1 :");
//   var num2 = prompt("Enter Number 2 :");
//   if (num1 > num2) {
//     alert(num1, " is Greater ");
//   } else if (num2 > num1) {
//     alert(num2, " is Greater ");
//   } else if (num1 == num2) {
//     alert("Both ", num1, " and ", num2, " is Equal");
//   }

//   // task 14

//   var numb3 = prompt("Enter a number");
//   numb3 = parseInt(numb3);
//   if (numb3 === 0) {
//     alert("Zero");
//   } else if (numb3 > 0) {
//     alert("It is a positive number");
//   } else {
//     alert("It is a negative number");
//   }

//   // task 16

//   var varr = true;
//   if (varr == boolean) {
//     alert("Boolean Type ");
//   } else if (varr == "name") {
//     alert("String Type");
//   } else if (varr > 0 && varr <= 100) {
//     alert("Number Type");
//   } else {
//     alert("Undefined");
//   }

// //   chapter 14
//  // Task 3
//  var arr1 = ["Muhammad Talha"];
//  // Task 4
//  var arr2 = [18];]
//  // Task 5
//  var arr3 = [true];
//  // Task 6
//  var arr4 = ["Hello", 34, 45.0, false, "a"];

//  // Task 7
//  var network = ["jazz", "zong", "mobilink", "warid"];

//  // Task 8
//  var education = [
//    "SSC",
//    "HSC",
//    "BCS",
//    "BS",
//    "B.Com",
//    "MSC",
//    "MPhil",
//    "Phd",
//  ];

//  document.writeln(
//    "QUALIFICATION<br /><br />1)" +
//      education[0] +
//      "<br/>2)" +
//      education[1] +
//      "<br/>3)" +
//      education[2] +
//      "<br/>4)" +
//      education[3] +
//      "<br/>5)" +
//      education[4] +
//      "<br/>6)" +
//      education[5] +
//      "<br/>7)" +
//      education[1] +
//      "<br/>8)" +
//      education[1]
//  );

//  // Task 9
//  var movie = [];
//  movie.push("Avengers:Age of Ultron");
//  movie.push("Spectre");
//  movie.push("Jurassic World");
//  movie.push("Inside Out");

//  document.writeln(
//    "<br/><br/><b>TOP MOVIES OF 2015</b> <br/><br/> 1)" +
//      movie[0] +
//      "<br/> 2)" +
//      movie[1] +
//      "<br/> 3)" +
//      movie[2] +
//      "<br/> 4)" +
//      movie[3]
//  );
//  document.writeln("<br /> <br />Length of Array is " + movie.length);

//  // Task 10

//  var cars = ["Audi", "Volvo", "Ford", "Lamborghini"];

//  document.writeln(
//    "<br/><br/><b>Favorite Cars</b> <br/><br/>" +
//      cars[0] +
//      "," +
//      cars[1] +
//      "," +
//      cars[2] +
//      "," +
//      cars[3]
//  );
//  document.writeln(
//    "<br /><br/>First Index of Array is " + cars.indexOf("Audi")
//  );
//  document.writeln("<br />Car at first index of array is " + cars[0]);
//  document.writeln(
//    "<br />Last index of Array is " + cars.indexOf("Lamborghini")
//  );
//  document.writeln("<br />Car at last index of array is " + cars[3]);

//  // Task 11

//  var name = ["Hassan", "Hunain", "Usama"];
//  var num = [470, 420, 430];

//  document.writeln(
//    "<br/><br/>Score of " +
//      name[0] +
//      " is " +
//      num[0] +
//      " .Percentage is " +
//      (num[0] / 500) * 100
//  );
//  document.writeln(
//    "<br/>Score of " +
//      name[1] +
//      " is " +
//      num[1] +
//      " .Percentage is " +
//      (num[1] / 500) * 100
//  );
//  document.writeln(
//    "<br/>Score of " +
//      name[2] +
//      " is " +
//      num[2] +
//      " .Percentage is " +
//      (num[2] / 500) * 100
//  );

//  // Task 12
//  var colors = [];
//  colors = ["red", "green", "blue", "yellow"];

//  // a

//  var a = prompt("What color do you want to enter in the begining : ");

//  document.writeln(
//    "<br /><br />" +
//      colors[0] +
//      "," +
//      colors[1] +
//      "," +
//      colors[2] +
//      "," +
//      colors[3] +
//      "<br />"
//  );
//  colors.unshift(a);
//  document.writeln(
//    colors[0] +
//      "," +
//      colors[1] +
//      "," +
//      colors[2] +
//      "," +
//      colors[3] +
//      "," +
//      colors[4]
//  );

//  // b

//  var b = prompt("What color do you want to enter in the end : ");

//  document.writeln(
//    "<br /><br />" +
//      colors[0] +
//      "," +
//      colors[1] +
//      "," +
//      colors[2] +
//      "," +
//      colors[3] +
//      "<br />"
//  );
//  colors.push(b);
//  document.writeln(
//    colors[0] +
//      "," +
//      colors[1] +
//      "," +
//      colors[2] +
//      "," +
//      colors[3] +
//      "," +
//      colors[4]
//  );

//  // c

//  colors.unshift("purple");
//  colors.unshift("pink");

//  document.writeln(
//    "<br/> <br />" +
//      colors[0] +
//      "," +
//      colors[1] +
//      "," +
//      colors[2] +
//      "," +
//      colors[3] +
//      "," +
//      colors[4] +
//      "," +
//      colors[5] +
//      "," +
//      colors[6]
//  );

//  //d

//  colors.shift();
//  document.writeln(
//    colors[0] + "," + colors[1] + "," + colors[2] + "," + colors[3]
//  );

//  //e
//  colors.pop();
//  document.writeln(
//    colors[0] + "," + colors[1] + "," + colors[2] + "," + colors[3]
//  );

//  var ask1 = prompt("At which index you want to Add new Color :");
//  var askcolor = prompt("what color you want to Add :");

//  colors.splice(ask1, 1, askcolor);

//  document.writeln(
//    colors[0] + "," + colors[1] + "," + colors[2] + "," + colors[3]
//  );
//  //f
//  var ask2 = prompt("To Index :");
//  var ask3 = prompt("From Index :");
//  //g
//  colors.splice(ask2, ask3);
//  for (var i = 0; i < colors.length; i++) {
//    document.writeln("<br />" + colors[i] + ",");
//  }

//  // Task 13

//  var numbers = [320, 230, 480, 120];

//  for (var i = 0; i < numbers.length; i++) {
//    for (var j = i + 1; j < numbers.length; j++) {
//      if (numbers[i] > numbers[j]) {
//        var temp = numbers[i];
//        numbers[i] = numbers[j];
//        numbers[j] = temp;
//      }
//    }
//  }
//  for (var i = 0; i < colors.length; i++) {
//    document.writeln("<br />" + numbers[i] + ",");
//  }

//  //Task 14

//  var fruit = ["strawbery", "apple", "orange", "banana"];
//  for (var i = 0; i < fruit.length; i++) {
//    document.writeln(fruit[i] + " ");
//  }

//  for (var i = 0; i < fruit.length; i++) {
//    for (var j = i + 1; j < fruit.length; j++) {
//      if (fruit[i] > fruit[j]) {
//        var temp = fruit[i];
//        fruit[i] = fruit[j];
//        fruit[j] = temp;
//      }
//    }
//  }
//  document.writeln("<br />After Sort :");
//  for (var i = 0; i < fruit.length; i++) {
//    document.writeln(fruit[i] + " ");
//  }

//  // Task 15

//  var cities1 = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawer"];
//  document.writeln("<br/>Cities List<br/>");
//  for (var i = 0; i < cities1.length; i++) {
//    document.writeln(cities1[i] + " ");
//  }
//  var selectedCities = [];
//  selectedCities = cities1.slice(2, 4);

//  for (var i = 0; i < selectedCities.length; i++) {
//    document.writeln("<br />" + selectedCities[i] + " ");
//  }

//  // Task 16

//  var arrr = ["This", "is", "my", "cat"];
//  var joinArray = "A";
//  joinArray = arrr.concat();
//  document.writeln(joinArray);

//  // Task 17

//  var newArr = [];
//  newArr.unshift("Keyboard", "Mouse", "Printer", "Monitor");

//  document.writeln("<br /><br />Devices :");
//  for (var i = 0; i < newArr.length; i++) {
//    document.writeln(newArr[i] + " ");
//  }
//  for (var i = 0; i < 4; i++) {
//    document.writeln("<br/>OUT : " + newArr.shift());
//  }

//  // Taslk 18

//  var newArr = [];
//  newArr.push("Keyboard", "Mouse", "Printer", "Monitor");

//  document.writeln("<br /><br />Devices :");
//  for (var i = 0; i < newArr.length; i++) {
//    document.writeln(newArr[i] + " ");
//  }
//  for (var i = 0; i < 4; i++) {
//    document.writeln("<br/>OUT : " + newArr.pop());
//  }

//  // Task 22

//  var multiArray = [];
//  multiArray = [
//    [0, 1, 2, 3],
//    [1, 0, 1, 2],
//    [2, 1, 0, 1],
//  ];

//  // Task 21

//  var multiArray = [];
//  multiArray = [
//    [0, 1, 2, 3],
//    [1, 0, 1, 2],
//    [2, 1, 0, 1],
//  ];

//  for (var i = 0; i < multiArray.length; i++) {
//    document.writeln("<br />" + multiArray[i]);
//  }

//  //TAsk 19

//  var ar = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
//  document.getElementById("opt").innerText = ar[0];

// //  chapter 18 to 20
 
//     // task 1

//     for(var i = 0;i<5;i++)
//     {
//         document.write("Hello World !!<br/>");
//     }

//     // task 2
//     document.write("<br/><br/>");
//     for(var i = 1;i<=10;i++)
//     {
//         document.write(i,"<br/>");
//     }

//     // task 3

//     var tab = prompt("Enter table number :");
//     var len = prompt("Enter length of table :");

//     document.write("<h1>Table of Desired Value</h1>");
  
//     for(var i=1;i<=len;i++)
//     {
//         document.write(tab," X ",i," = ",i*tab,"<br/>");
//     }
    
//     // task 4

//     var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
//     document.write("<br/><br/>");
   
//     for(var i=0;i<A.length;i++)
//     {
//         document.write(A[i],"<br/>");
//     }
    
//    // task 5

//    var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
//    document.write("<br/><br/>");
//     for(var i=0;i<A.length;i++)
//     {
//         document.write("Element at index ",i," is ",fruits[i],"<br/>");
//     }
    
//     // task 6

//     var n = prompt("Enter Range of items");
//     var arr=[n];
//     for(var i=0;i<n;i++)
//     {
//         arr[i] = prompt("Enter Value for Index ",i);
//     }
//     document.write("<br/><br/>");
//     document.write("Number of Items : ",n);
//     document.write("<br/>Items:");
//     for(var i=0;i<n;i++)
//     {
//        document.write("<br/>",arr[i]);
//     }
    
//     // task 7
//     var ar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//     document.write("<br/><br/> Counting : ");
//     for(var i=0;i<ar.length;i++)
//     {
//         document.write(ar[i],", ");
//     }
//     document.write("<br/>Reverse : ")
//     for(var i=1;i<=20;i++)
//     {
//         document.write(ar.pop(),", ");
//     }
//     document.write("<br/>Even : ")
//     for(var i=1;i<=20;i++)
//     {
//         if(i% 2 == 0){
//         document.write(i,", ");
//         }
//     }
//     document.write("<br/>Odd : ")
//     for(var i=1;i<=20;i++)
//     {
//         if(i % 2 == 0){
//         continue;
//         }
        
//             document.write(i,", ");
        
//     }
    
//     document.write("<br/>Series : ")
//     for(var i=1;i<=20;i++)
//     {
//         if(i % 2 == 0){
//         document.write(i,"K, ");
//         }
//     }
    
//     // task 8
//     document.write("<br/><h1>Searching Example :</h1>")
//     var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//     var search = prompt("Enter For search :");
//    for(var i = 0;i<A.length;i++){
//     if(search === A[i])
//     {
//         document.write(search," is available at index ",i);
//         break;
//     }
//     else
//     {
//         document.write(search," is not available ");
//         break;
//     }

//    }

//    // task 9

//     var Ar = [24, 53, 78, 91, 12];
//     var largestNumber = 0;
//     for(var i=0;i<Ar.length;i++)
//     {
//         if(largestNumber <= Ar[i])
//         largestNumber = Ar[i];
//     }
//     document.write("<br/><br/> List Item in Array : 24, 53, 78, 91, 12");
//     document.write("<br/>Largest Number is :",largestNumber);

//     // task 10

//     var Ar = [24, 53, 78, 91, 12];
//     var smallestNumebr = 0;
//     for(var i=0;i<Ar.length;i++)
//     {
//         if(Ar[i] >= smallestNumebr)
//         largestNumber = Ar[i];
//     }
//     document.write("<br/><br/> List Item in Array : 24, 53, 78, 91, 12");
//     document.write("<br/>Smallest Number is :",smallestNumebr);

// chapter 21-25

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert(fullName)

// var fav = prompt("What is your favourite mobile phone model?")
// var str = ("My favourite phone is:" + " " + fav)
// var n = fav.length
// alert(str)
// alert("Length of string is" + " " +n)


// var pak = ("Pakistani")
// document.write ("String:" + " " + pak  + "<br>" + "<br>" )  
// document.write ("Index of 'n':" + " "  + pak.indexOf("n")) 

// var last =("Hello World")
// document.write ("String:" + " " + last  + "<br>" + "<br>" )  
// document.write ("Index of 'l':" + " "  + last.lastIndexOf("l"))

// var pak = ("Pakistani")
// document.write ("String:" + " " + pak  + "<br>" + "<br>" )  
// document.write ("Character at index 3:" + " "  + pak.charAt("3")) 

// var str1 = prompt("Enter your first name");
// var str2 = prompt("Enter your last name");
// var fullName = str1.concat( " " +str2)
// alert (fullName)

// var hyd = ("Hyderabad")
// document.write ("City:" + " " + hyd  + "<br>" + "<br>" )  
// document.write ("After replacement:" + " "  + hyd.replace("Hyder" , "Islam")) 

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write (message + "<br>" + "<br>" ) 
// document.write ("After replacement:" + " "  + message.replace(/and/g , "&") ) 

// var val = "472"
// var num = parseInt(val)
// document.write ("Value:" + " " + val + "<br>" + "<br>")
// document.write ("Type: " + typeof( val) + "<br>" + "<br>")
// document.write ("Value:" + " " + num + "<br>" + "<br>")
// document.write ("Type: " + typeof(num) + "<br>" + "<br>")

// var pea = prompt("Write anything")
// document.write ("User input:" + " " + pea  + "<br>" + "<br>" )  
// document.write ("Upper case:" + " "  + pea.toUpperCase()) 

// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//  document.write(sentence.join(" "));
//  return sentence;
//  }
//  titleCase(prompt("enter anything"));

// var num = 35.36
// var string = num.toString()
// document.write ("Number:" + " " + num  + "<br>" + "<br>" )
// document.write ("Result :" + " " + string.replace(".",""))


// var special = prompt("Enter username");
// if (special === "@" || "." || "," || "!") {alert(" Enter a valid username. ")
    
// } else {  alert ("Username confirm") 
// }


// var bake = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am?")
// bake = bake.toLowerCase()    
// var savour = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
// for (var i=0; i<savour.length; i++) {
// if (savour[i] === bake) {alert("We have it at our bakery")      
//      break
// } else {alert("We donot have it at our bakery " ) 
// break
// }}
 

// var pass = prompt("Enter Password");
// if (pass == /[a-z]/g  /[0-9]/g ) {
//     alert("asda")
// } else {
//     alert("asd")
// } 

// var university = "University of Karachi";
// var ar = university.split("") 
// document.write (ar)

// var myString = prompt("Enter anything");
// document.write ("User input:" +" " + myString + "<br>" + "<br>" )
// document.write ("Last character of input:" +" " + myString[myString.length-1])

// var occ = "The quick brown fox jumps over the lazy dog" 
// alert    (occ.match(/the/g)).length




//chapter 26-30

// var num = prompt("Enter any positive integer")
// document.write ("number:" + " " + num + "<br>" + "<br>" )
// document.write ("round off value:" + " " + Math.round(num) + "<br>" + "<br>" )
// document.write ("floor value:" + " " + Math.floor(num) + "<br>" + "<br>" )
// document.write ("ceil value:" + " " + Math.ceil(num))


// var neg = prompt("Enter any negative floating point")
// document.write ("number:" + " " + neg + "<br>" + "<br>" )
// document.write ("round off value:" + " " + Math.round(neg) + "<br>" + "<br>" )
// document.write ("floor value:" + " " + Math.floor(neg) + "<br>" + "<br>" )
// document.write ("ceil value:" + " " + Math.ceil(neg))

// var absol = prompt("Enter any value")
// document.write ("The absolute value of" + " " + absol + " "  + "is " + Math.abs(absol) + "<br>" + "<br>" )


// var dice = Math.random() * 6 + 1;
// var dior = Math.floor(dice);
// document.write ("Random dice value :" + " " + dior)


// var toss = Math.random() * 2 ;
// var floor = Math.floor(toss);
// if (floor === 0 ) {

//     document.write (floor + "<br>" + "Random coin value: Heads" )
    
// } else {
//     document.write (floor + "<br>" + "Random coin value: tails" )
// }

// var ran = Math.floor(Math.random() * 100) + 1;
// document.write ("random number between 1- 100:" + " " + ran)





// var special = prompt("Enter any number between 1 - 10 ")
// if (special == 9) {
//     alert("Congratulations")
    
// } else {
//     alert("Try again")
// }


//chapter 31 - 34

// var a = new Date()
// document.write (a)

// var month = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
// var now = new Date()
// var day = now.getMonth()
// var that = month[day]
// document.write ("Current month:" + " " + that)

// var daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var now = new Date()
// var day = now.getDay()
// var that = daynames[day]
// alert ("Today is" + " " + that.slice(0,3))

// var daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"];
// var now = new Date()
//  var day = now.getDay()
// var that = daynames[day]
// switch (daynames) {
// case "saturday":
//     alert("Its Fun Day");
//     break;
//     case 0:
//        alert("Its Fun Day"); 
//        break;
//        default :
//        alert(that);
// break
// }

// var d = new Date();
// var t = d.getTime();
// var v = t / (1000 * 60  )
// document.write("Current Date: " + " " + d + "<br>" + "<br>")
// document.write("Elapsed Milliseconds since january 1,1970 :" + " " + t + "<br>" + "<br>")
// document.write("Elapsed Minutes since january 1,1970 :" + " " + v + "<br>" + "<br>")

// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime =  ampm;
//     return strTime;
//   }
//   alert(formatAMPM(new Date));

// var actualDate = new Date()
// var eoYear = new Date(actualDate.getFullYear() ,12, 0 )
// alert ("later date:" + " " + eoYear)

//chapter 35 - 38




// function agecalc(){
// var dob = new Date("April 24, 2020")
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24))
// document.write(accuage + " " + "days have passed since 1st Ramadan ,2020");
// }

// agecalc();



// function abc(){
//     var a = new Date()
//     alert(a)
// }
// abc()

// function whole(){
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert(fullName)
// }

// whole()


// function add() {
//     var value1= +prompt("Enter your first value")
//     var value2= +prompt("Enter your second value")
//     var Result = value1 + value2
//     alert (Result)
// }

// add()


// function calc(){
//         var num1 = +prompt("Enter your first value")
// var opr = prompt("Enter operator")
// var num2 = +prompt("Enter your second value")
//     if (opr === "+") {
//         alert (num1 + num2)
//     }
//    else if (opr === "-")
//     {alert (num1 - num2)}

// else if (opr === "*")
//     {alert (num1 * num2)}

// else if (opr === "/")
//     {alert (num1 / num2)}

//     else {
//         alert ("Wrong operator")
//     }
// }
// calc()

// function angle(){
// var base = +prompt ("Enter value for base")
// var perp = +prompt ("Enter value for perpendicular")
// var hyp = (base * base) + (perp * perp)
// alert ("The value of hypotenuse is:" + " " +  hyp)
// }
// angle() 


// Chpter 39-42

//  var a = prompt ("Enter value 1")
//  var b = prompt ("Enter value 2")
//  function power(){
//    alert (a**b)
// }
//  power()
 
//  var  a = prompt ("Enter year")
// function checkLeapYear(a){
//     if (a == 2012 || a == 2016 ||a == 2020 ||a == 2008||a == 2004  ) {
//         alert ( "is leap")    }
//     elabc{
//        alert ("is not leap")
//     }

// }
// checkLeapYear(a)


// function calculateS(a,b,c){
//     var s = (a+b+c)/2
//     return s
// }

// function calculateArea(a,b,c) {
//     var s = calculateS(a,b,c)
//     var area = s*(s-a)*(s-c)*(s-c)
//     return area
    
// }

// console.log(calculateArea(2,2,2))

// function main(a,b,c){
//     var percentage = (a+b+c)/3
//     return percentage
// }

// function average(a,b,c){
//     return (a+b+c)/3
// }

// function calc(a,b,c){
//     var p = average(a,b,c)
//     var a =main(a,b,c)
//     console.log("Average is: ",p)
//     console.log("percentage is: ",a)
// }

// calc(100,50,50)


// function fun(s){
    
//     var vowel = ["a","e","o","u","i"]
//     var abc=""
//     var flag;
//     for (let index = 0; index < s.length; index++) {
//         flag =false

//         for (let index1 = 0; index1 < vowel.length; index1++) {
//             if (s[index]==vowel[index1]) {
//                 flag = true
//                 break
//             }

//         }
//         if (flag==false){
//             abc+=s[index]
//         }

//     }
//     return abc
// }


// var str = "aenoinviosdavnoei"

// console.log(fun(str.toLowerCase()))

// var distance = +prompt ("Enter the distance in km")
// var meters = distance * 1000
// var inch = distance * 39370
// var feet = distance * 3280.8
// var centimeter = distance * 100000
// document.write ("The distance in meter is " + " " + meters +"<br>")  
// document.write ("The distance in inch is " + " " + inch +"<br>")  
// document.write ("The distance in feet is " + " " + feet +"<br>")  
// document.write ("The distance in centimeter is " + " " + centimeter +"<br>")  


// function calc(hour){
//     var c= hour - 40
//     c = c*12
//     return c
// }
// var c = 45.5
// c=Math.floor(c)
// console.log(calc(c))


// var a = prompt("Enter num")
// var hundred = Math.floor(a/100)
// var fifty = Math.floor((a-hundred*100)/50)
// var ten = Math.floor(((a-hundred*100)-50)/10)

// document.write("you will have ",hundred," hundred notes ",fifty," fifty notes ",ten," ten notes")


// 43 - 48

// function li(){
//     alert ('Hello World')
// }

// function buy(){
//     alert ("Thanks for purchasing a phone from us ")
// }

// var x = 0;
// var span = document.queryabclector('span');
// var increment = document.getElementById('increment'); 
// var decrement = document.getElementById('decrement'); 

// increment.addEventListener('click', function () {
//   span.textContent = ++x;
// });

// decrement.addEventListener('click', function () {
//   span.textContent = --x;
// });

// function bikes(id,src) {
//     var bike = document.getElementById(id)
//     bike.src = src
// }



// 49-52

// function sub(){

//     var email=document.getElementById("Email");
//     var password=document.getElementById("Password");

//     document.write("SignUp complete <br>")
//     document.write("Email: "+email.value  +"<br>")
//     document.write("Password: "+password.value  +"<br>")   
// }

// function readMore(){
//     var text = "Lorem ipsum dolor sit, amet conabcctetur adipisicing elit. Ullam repellendus vero cupiditate mollitia ab maxime praeabcntium dolorem blanditiis libero vitae officiis eos, nam sit illum non omnis eum! Velit, tenetur! Lorem ipsum dolor, sit amet conabcctetur adipisicing elit. Et eveniet iste dolorum similique delectus architecto repellendus, quo id eum nisi sapiente beatae expedita quas. Sunt veniam veritatis doloribus eligendi enim!"
//     var paragraph = document.getElementById("paragraph")
//     paragraph.innerHTML = text
// }

// chapter 58 - 67


//var main_content=document.getElementById("main-content");

//console.log(main_content)

//var render=document.getElementsByClassName("render");

//document.write("p tag values <br>")
//document.write((render.item(0)).innerHTML+"<br>");
//document.write((render.item(1)).innerHTML+"<br>");
//document.write((render.item(2)).innerHTML+"<br>");
//document.write((render.item(3)).innerHTML+"<br>");
//document.write((render.item(4)).innerHTML+"<br>");


//var nam=document.getElementById("first-name");
//var Lname=document.getElementById("last-name");
//var email=document.getElementById("email");

//nam.value="hello world";
//Lname.value="hello world";
//email.value="hello world";