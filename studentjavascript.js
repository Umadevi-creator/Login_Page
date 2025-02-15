<script type="text/javascript">
    function Student() {
      
      var firstname = document.getElementById("fname").value;
      console.log("First Name: " + firstname);

      var lastname = document.getElementById("lname").value;
      console.log("Last Name: " + lastname);

      var password = document.getElementById("password").value;
      console.log("Password: " + password);

     
      var encodedString = window.btoa(password);
      document.getElementById("password").value = encodedString;  
      console.log("Encoded Password: " + encodedString);

      var DOB = document.getElementById("dob").value;
      console.log("Date of Birth: " + DOB);

      var email = document.getElementById("email").value;
      console.log("Email: " + email);

      var Phonenumber = document.getElementById("mno").value;
      console.log("Phone Number: " + Phonenumber);

      var Address = document.getElementById("address").value;
      console.log("Address: " + Address);

      var City = document.getElementById("city").value;
      console.log("City: " + City);

      var state = document.getElementById("state").value;
      console.log("State: " + state);

      var country = document.getElementById("country").value;
      console.log("Country: " + country);

      // Handling checkboxes for hobbies (multiple values)
      var hobbies = document.getElementsByName("option");
      var Hobbies_res = [];
      for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
          Hobbies_res.push(hobbies[i].value);
        }
      }
      console.log("Hobbies: " + Hobbies_res.join(", "));

      // Handling radio buttons for course selection (single value)
      var course = document.getElementsByName("options");
      var course_res = "";
      for (var temp of course) {
        if (temp.checked) {
          course_res = temp.value;
        }
      }
      console.log("Course: " + course_res);

      // Qualification details (using class names as example)
      var c10A = document.getElementById("X1").value;
      var c10B = document.getElementById("X2").value;
      var c10C = document.getElementById("X3").value;

      var c12A = document.getElementById("X11").value;
      var c12B = document.getElementById("X12").value;
      var c12C = document.getElementById("X13").value;

      var ga = document.getElementById("G1").value;
      var gb = document.getElementById("G2").value;
      var gc = document.getElementById("G3").value;

      var ma = document.getElementById("M1").value;
      var mb = document.getElementById("M2").value;
      var mc = document.getElementById("M3").value;

      // Displaying the collected data in a new window (for testing)
      var stu = window.open("", "Student Registration Form", "width=600,height=600");
      stu.document.write("<h3>Student Registration Details</h3>");
      stu.document.write("First Name: " + firstname + "<br>");
      stu.document.write("Last Name: " + lastname + "<br>");
      stu.document.write("Password (Encoded): " + encodedString + "<br>");
      stu.document.write("Date of Birth: " + DOB + "<br>");
      stu.document.write("Email: " + email + "<br>");
      stu.document.write("Phone Number: " + Phonenumber + "<br>");
      stu.document.write("Address: " + Address + "<br>");
      stu.document.write("City: " + City + "<br>");
      stu.document.write("State: " + state + "<br>");
      stu.document.write("Country: " + country + "<br>");
      stu.document.write("Hobbies: " + Hobbies_res.join(", ") + "<br>");
      stu.document.write("Course: " + course_res + "<br>");
      stu.document.write("Class X: " + c10A + " " + c10B + " " + c10C + "<br>");
      stu.document.write("Class XII: " + c12A + " " + c12B + " " + c12C + "<br>");
      stu.document.write("Graduation: " + ga + " " + gb + " " + gc + "<br>");
      stu.document.write("Master's: " + ma + " " + mb + " " + mc + "<br>");
    }
  </script>