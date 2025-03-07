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
