#  Employee Management System Code
- Basic Java program for employee management.

- Demonstrates object-oriented programming concepts.

- Uses an ArrayList to store employee details.
### Java Concepts Used

- Classes and Objects

- Constructors

- ArrayList Collection

- Loops

- Method Calling

### Code Structure

#### EmployeeManagement Class

- Stores employee details: ID, Name, and Salary.

- Provides a method to display employee details.

``` java
class EmployeeManagement {
    int EmployeeId;
    String EmployeeName;
    double EmployeeSalary;

    public EmployeeManagement(int EmployeeId, String EmployeeName, double EmployeeSalary) {
        this.EmployeeId = EmployeeId;
        this.EmployeeName = EmployeeName;
        this.EmployeeSalary = EmployeeSalary;
    }

    public void employeeDisplayDetails() {
        System.out.println("Employee Id: " + EmployeeId);
        System.out.println("Employee Name: " + EmployeeName);
        System.out.println("Employee Salary: " + EmployeeSalary);
    }
}
```

#### Main Class

- Creates and initializes employee objects.

- Stores them in an ArrayList.

- Iterates through the list and displays details.

``` java
import java.util.ArrayList;

public class Main {
    public static void main(String args[]) {
        ArrayList<EmployeeManagement> employeeList = new ArrayList<>();

        employeeList.add(new EmployeeManagement(1, "Siva", 40000.98));
        employeeList.add(new EmployeeManagement(2, "Subbu", 34000.00));
        employeeList.add(new EmployeeManagement(3, "Sankar", 10000.87));

        for (EmployeeManagement employee : employeeList) {
            employee.employeeDisplayDetails();
            System.out.println("....................");
        }
    }
}
```
#### How to Run

- Install Java (JDK 8 or above).

- Copy the Java code into Main.java.

- Open a terminal and navigate to the project folder.

#### Compile using:

```

 javac Main.java

```
```
java Main
```

# String Anagram Checker

### Description
- This Java program checks whether two input strings are anagrams. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
#### Features

- Takes two strings as input.

- Removes spaces and converts both strings to lowercase to ensure case insensitivity.

- Converts strings into character arrays and sorts them.

- Compares sorted character arrays to determine if they are anagrams.

- Prints debugging logs to trace program execution.

``` java code
import java.util.Arrays;
import java.util.Scanner;

public class AnagramChecker {
    public static boolean areAnagrams(String str1, String str2) {
        System.out.println("Original Strings: " + str1 + " | " + str2);
        
        // Remove spaces and convert to lowercase for case insensitivity
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();
        
        System.out.println("Processed Strings: " + str1 + " | " + str2);
        
        // If lengths are not the same, they cannot be anagrams
        if (str1.length() != str2.length()) {
            System.out.println("Lengths differ. Not anagrams.");
            return false;
        }
        
        // Convert strings to character arrays
        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();
        
        System.out.println("Character Arrays before sorting: " + Arrays.toString(charArray1) + " | " + Arrays.toString(charArray2));
        
        // Sort the character arrays
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);
        
        System.out.println("Character Arrays after sorting: " + Arrays.toString(charArray1) + " | " + Arrays.toString(charArray2));
        
        // Compare sorted arrays to check if they are identical
        boolean result = Arrays.equals(charArray1, charArray2);
        System.out.println("Comparison Result: " + result);
        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Prompt user for first string
        System.out.print("Enter first string: ");
        String str1 = scanner.nextLine();
        
        // Prompt user for second string
        System.out.print("Enter second string: ");
        String str2 = scanner.nextLine();
        
        // Check if the input strings are anagrams and display the result
        if (areAnagrams(str1, str2)) {
            System.out.println("Output: true");
        } else {
            System.out.println("Output: false");
        }
        
        scanner.close(); // Close the scanner to prevent resource leaks
    }
}


```

#### Example

##### Input:


```

Enter first string: listen
Enter second string: silent

```

#### output
```
Output: true
 
```

# Profile Card Using HTML and CSS

### Description
- This HTML code creates a Profile Card for a user, displaying their photo, name, job title, bio, and social media profiles. It uses external CSS for styling and Font Awesome icons for social media links.

### Code Breakdown
- The head section includes:
- The document's character encoding (UTF-8).
- A responsive viewport setting for mobile-friendly design.
- External CSS files (styles.css).
- Google Lato font for typography.
- Font Awesome icons for social media links.
- The body section contains:
- A heading h2 for the profile card title
- A section element wrapping the profile card
- A class is card that represents the profile card.
### Profile Card Content:
- Profile Image : Displays Ramesh's photo.
- Name : Displays "Ramesh Jangam".
- Job Title : Displays "Full Stack Developer" in a blueviolet color.
- Bio : A short introduction about Ramesh.
- Social Media Links:
- Displays Facebook, Twitter, LinkedIn, and GitHub icons with clickable links.
### Styling
- The card layout is structured using divs with class="card" for styling.
- Flexbox is used for aligning social media icons.
- Inline styles are used for specific elements margin-top, color, text-align, gap, etc..

``` HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Profile Card</title>
    <link rel="stylesheet" href="./styles.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
      rel="stylesheet"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
  </head>
  <body>
    <h2 style="text-align: center; margin-top: 60px">Profile Card</h2>
    <section>
      <div class="card">
        <div class="card-side card-front">
          <div class="card-image">
            <img src="./RameshPhoto.jpeg" alt="" class="profile-image" />
          </div>
          <div>
            <h2>Ramesh Jangam</h2>
            <h4 class="developer" style="color: blueviolet">
              Full Stack Developer
            </h4>
            <p>
              I am Ramesh, a passionate Full Stack Developer who loves writing
              clean, efficient code and building impactful projects. I thrive in
              collaborative environments, working with teams to create
              innovative and scalable solutions.
            </p>
            <h3 style="text-align: center; color: blueviolet">Profiles</h3>
            <div
              class="social-profiles"
              style="display: flex; justify-content: space-evenly; gap: 10"
            >
              <div style="display: flex; flex-direction: column; gap: 5px">
                <a href="https://www.facebook.com"
                  ><i class="fa-brands fa-facebook"></i
                ></a>
                <p>facebook</p>
              </div>
              <div style="display: flex; flex-direction: column; gap: 5px">
                <a href="https://www.twitter.com"
                  ><i class="fa-brands fa-x-twitter"></i>
                </a>
                <p>Twitter</p>
              </div>
              <div style="display: flex; flex-direction: column; gap: 5px">
                <a href="https://www.linkedin.com"
                  ><i class="fa-brands fa-linkedin"></i>
                </a>
                <p>Linkedin</p>
              </div>
              <div style="display: flex; flex-direction: column; gap: 5px">
                <a href="https://www.github.com"
                  ><i class="fa-brands fa-github"></i
                ></a>
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>

```
## CSS File
``` css

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(to right, #f6f5f5, #c7d6f2, #c0c0f098);
  background-color: whitesmoke;
  overflow-y: hidden;
  font-family: "Lato", sans-serif;
  height: 100vh;
}
h1,
h2,
h3,
h4,
h5,
p {
  margin-bottom: 14px;
}
p {
  color: #666;
  font-size: 16px;
  max-width: 350px;
  margin: 10px auto;
}
.card {
  max-width: 400px;
  height: 500px;
  padding: 30px;
  position: relative;
  /* talk later */

  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  transition: all 0.3s ease-in;
  animation: clipReveal 1.5s ease-in-out forwards;
  clip-path: circle(0% at 50% 50%);
  transition: transform 0.6s ease-in-out;
}

a {
  text-decoration: none;
  color: black;
}
.profile-image {
  width: 110px;

  border-radius: 50%;
  margin-bottom: 10px;
  border: 5px solid whitesmoke;
}
i {
  font-size: 22px;
  margin-top: 6px;
  transition: all 0.3s ease-in;
}

i:hover {
  transform: scale(1.4);
}

@keyframes clipReveal {
  0% {
    clip-path: circle(0% at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
  }
}



```

# ToDo APP

## HTML Code
``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ToDo App</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>ToDo App</h1>
    <div class="container">
      <div class="input-container">
        <input type="text" id="inputText" placeholder="Enter a Task.." />

        <button id="addButton" class="btn">Add Item</button>
        <button id="clearAllBtn" class="btn">Clear All</button>
      </div>

      <ul id="taskList"></ul>
    </div>
    <script src="./index.js"></script>
  </body>
</html>

```
## CSS Style File
``` CSS Style file code
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 50px;
}
#taskList {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 5px;
  background: #f4f4f4;
  border-radius: 5px;
  border: 1px solid #ddd;
}
input {
  padding: 0.5rem 2rem 0.6rem 0;
  width: 50%;
}
.btn {
  background-color: rgb(52, 118, 241);
  padding: 0.5rem 2rem 0.6rem 2rem;
  font-weight: bold;
}
.input-container {
  position: sticky;
  top: 2px;
}
button {
  color: white;

  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.container {
  position: relative;
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
  background-color: #f4f4f4;
  height: 50vh;
  border-radius: 5px;
  overflow-y: scroll;
}

.remove-icon {
  width: 20px;
  height: 18px;
  background: transparent;
}

```
## JavaScript code 
``` js code
// inputText;
// addButton;
// clearAllBtn;
// taskList;

const inputTextEle = document.getElementById("inputText");

const addBtn = document.getElementById("addButton");

const clearAllButton = document.getElementById("clearAllBtn");

const taskList = document.getElementById("taskList");

function addTask() {
  const taskTest = inputTextEle.value.trim();

  if (taskTest === "") {
    return;
  }
  //create new List item
  const li = document.createElement("li");
  li.textContent = taskTest;
  // create a remove button
  const remvButton = document.createElement("button");

  const removeIcon = document.createElement("img");
  removeIcon.src = "https://cdn-icons-png.flaticon.com/512/2984/2984959.png";
  removeIcon.alt = "Remove";

  removeIcon.classList.add("remove-icon");
  remvButton.appendChild(removeIcon);
  remvButton.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(remvButton);
  taskList.appendChild(li);

  inputTextEle.value = "";
}

function clearAllTasks() {
  taskList.innerHTML = "";
}

addBtn.addEventListener("click", addTask);
clearAllButton.addEventListener("click", clearAllTasks);

```



