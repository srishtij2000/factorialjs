function factorial(a)
{
	var b=1;
	var result=1;
	while(b<=a)
	{
		result=result*b;
		b++;
	}
	return result;
}
var myFinal = factorial(5);
console.log("Factorial of 5 is " +myFinal);
document.write("Factorial of 5 is " +myFinal);