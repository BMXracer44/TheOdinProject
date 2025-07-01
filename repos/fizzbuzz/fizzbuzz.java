import java.util.*;

class fizzbuzz{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number of iterations: ");
        String userInput = input.nextLine();
        int answer = Integer.parseInt(userInput);

        for(int i = 1; i <= answer; i++){
            if((i % 3 == 0) && (i % 5 == 0)){
                System.out.println("FizzBuzz");
            }
            else if(i % 3 == 0){
                System.out.println("Fizz");
            }
            else if(i % 5 == 0){
                System.out.println("Buzz");
            }
            else{
                System.out.println(i);
            }
        }
    }
}