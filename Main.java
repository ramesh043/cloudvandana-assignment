import java.util.ArrayList;

class EmployeeManagement {

    int EmoployeeId;
    String EmployeeName;
    double EmployeeSalary;

    public EmployeeManagement(int EmoployeeId, String EmployeeName, double EmployeeSalary) {
        this.EmoployeeId = EmoployeeId;
        this.EmployeeName = EmployeeName;
        this.EmployeeSalary = EmployeeSalary;
    }

    public void employeeDisplayDetails() {
        System.out.println("Employee Id: " + EmoployeeId);
        System.out.println("Employee Name: " + EmployeeName);
        System.out.println("Employee Salary: " + EmployeeSalary);
    }
}

public class Main {

    public static void main(String args[]) {

        ArrayList<EmployeeManagement> employeList = new ArrayList<>();

        employeList.add(new EmployeeManagement(1, "Siva", 40000.98));
        employeList.add(new EmployeeManagement(2, "Subbu", 34000.00));
        employeList.add(new EmployeeManagement(3, "Sankar", 10000.87));

        for (EmployeeManagement employee : employeList) {

            employee.employeeDisplayDetails();
            System.out.println("....................");
        }
    }
}