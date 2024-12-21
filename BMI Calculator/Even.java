import java.util.Scanner;

public class Even {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
  
        System.out.print("Enter an integer: ");
        String input = scanner.nextLine();
        
        int evenCount = 0;
        int oddCount = 0;

        
        for (char ch : input.toCharArray()) {
            
            if (Character.isDigit(ch)) {
                int digit = Character.getNumericValue(ch);
                
               
                if (digit % 2 == 0) {
                    evenCount++;
                } else {
                    oddCount++;
                }
            }
        }

        
        System.out.println("Number of even digits: " + evenCount);
        System.out.println("Number of odd digits: " + oddCount);
        
     
        scanner.close();
    }
}

