import java.util.Arrays;
import java.util.Scanner;

public class StringAnagram {
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

        System.out.println("Character Arrays before sorting: " + Arrays.toString(charArray1) + " | "
                + Arrays.toString(charArray2));

        // Sort the character arrays
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        System.out.println(
                "Character Arrays after sorting: " + Arrays.toString(charArray1) + " | " + Arrays.toString(charArray2));

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
