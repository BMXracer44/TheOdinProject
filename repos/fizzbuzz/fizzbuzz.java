import java.utils.*;

class fizzbuzz{
    public void class main(String args[]){
        Scanner input = new Scanner(System.in);
        int answer = parseInt(prompt("Enter the number of iterations: "));

        for(let i = 1; i <= answer; i++){
            if((i % 3 == 0) && (i % 5 == 0)){
                System.out.println("FizzBuzz");
            }
            else if(i % 3 === 0){
                System.out.println("Fizz");
            }
            else if(i % 5 == 0){
                System.out.println("Buzz");
            }
            else{
                System.out.println(i)
            }
        }
    }
}