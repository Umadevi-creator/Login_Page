function Student()
{
var firstname=document.getElementById("fname").value;
console.log(fname);

var lastname=document.getElementById("lname").value;
console.log(lname);

var password=document.getElementById("password").value;
console.log(password);
var encodedString;
var baseString=document.getElementById("password").value;
encodedString=window.btoa(baseString);
document.getElementById("password").value=encodedString;
console.log(encodedString);

var DOB=document.getElementById("dob").value;
console.log(dob);

var email=document.getElementById("email").value;
console.log(email);

var Phonenumber=document.getElementById("mno").value;
console.log(Phonenumber);

var Address=document.getElementById("Address").value;
console.log(Address);

var City=document.getElementById("city").value;
console.log(City);

var Pincode=document.getElementById("pincode").value;
console.log(Pincode);

var state=document.getElementById("State").value;
console.log(state);

var country=document.getElementById("country").value;
console.log(country);

var hobbies=document.getElementsByName("option");
var Hobbies_res='';
for(i=0;i<hobbies.length;i++)//using forloop
   {
	   if(hobbies[i].checked)
	   {
		   if(Hobbies_res!=='')
		   {
			   Hobbies_res+=',';
		   }
		   Hobbies_res+=hobbies[i].value
	   }
	}

var course=document.getElementsByName("options");
var course_res='';
for(var temp of course)
	{
	   if(temp.checked)
	   {
		   //console.log(temp.value);
		  course_res=temp.value;
	   }
	}

var c10A=document.getElementById("X1").value;
var c10B=document.getElementById("X2").value;
var c10c=document.getElementById("X3").value;


var c12A=document.getElementById("X11").value;
var c12b=document.getElementById("X12").value;
var c12c=document.getElementById("X13").value;

var ga=document.getElementById("G1").value;
var gb=document.getElementById("G2").value;
var gc=document.getElementById("G3").value;


var ma=document.getElementById("M1").value;
var mb=document.getElementById("M2").value;
var mc=document.getElementById("M3").value;



var stu=window.open(" ","Student Registraction Form","width=300,height=300");
stu.document.write("firstname - "+firstname+"<br>");
stu.document.write("lastname - "+lastname+"<br>");
stu.document.write("password - "+encodedString+"<br>");
stu.document.write("dob - "+DOB+"<br>");
stu.document.write("mail - "+email+"<br>");
stu.document.write("Number - "+Phonenumber+"<br>");
stu.document.write("Address - "+Address+"<br>");
stu.document.write("city - "+City+"<br>");
stu.document.write("pincode- "+Pincode+"<br>");
stu.document.write("state - "+state+"<br>");
stu.document.write("country - "+country+"<br>");
stu.document.write("Hobbies - "+Hobbies_res+"<br>");
stu.document.write("course - "+course_res+"<br>");
stu.document.write("class X - "+c10A+" "+c10B+" "+c10c+"<br>");
stu.document.write("class XII - "+c12A+" "+c12b+" "+c12c+"<br>");
stu.document.write("graduation - "+ga+" "+gb+" "+gc+"<br>");
stu.document.write("Master - "+ma+" "+mb+" "+mc+"<br>");


}