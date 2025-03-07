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







