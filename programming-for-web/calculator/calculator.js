/* Filename: calculator.js

   Multi-function calculator. */

/* Declare and set variables for first use. */
var result, operation;

result = 0;
operation = '';

/* Ask the user if he/she wants to add or subtract. */
operation = prompt ('Do you want to: 1. Add, 2. Subtract, 3. ' +
		 'Multiply, 4. Divide or 5. Exponentiate?','');

/* Perform the operation chosen by the user. */
if (operation == '1') {
	/* Declare and set variables for first use. */
	var num1, num2;

	num1 = 0;
	num2 = 0;
	
	/* Ask for and add the two numbers together. */
	num1 = prompt ('Enter the first number to add: ','');
	num2 = prompt ('Enter the second number to add: ', '');
	
	result = parseFloat(num1) + parseFloat(num2);

	alert ('The result of the addition is: ' + result);
} else if (operation == '2') {
	var num1, num2;

	num1 = 0;
	num2 = 0;

	/* Ask for and add the two numbers together. */
	num1 = prompt ('Enter the first number to subtract: ','');
	num2 = prompt ('Enter the second number to subtract: ', '');
	
	result = parseFloat(num1) - parseFloat(num2);
	alert ('The result of the subtraction is: ' + result);

} else if (operation == '3') {
	var num1, num2;

	num1 = 0;
	num2 = 0;

	/* Ask for and add the two numbers together. */
	num1 = prompt ('Enter the first number to multiply: ','');
	num2 = prompt ('Enter the second number to multiply: ', '');
	
	result = parseFloat(num1) * parseFloat(num2);
	alert ('The result of the multiplication is: ' + result);
} else if (operation == '4') {
	var num1, num2;

	num1 = 0;
	num2 = 0;

	/* Ask for and add the two numbers together. */
	num1 = prompt ('Enter the first number to multiply: ','');
	num2 = prompt ('Enter the second number to multiply: ', '');
	
	result = parseFloat(num1) / parseFloat(num2);
	alert ('The result of the division is: ' + result);
} else if (operation == '5') {
	var num1, num2;

	num1 = parseFloat(prompt('Enter the base: ', ''));
	num2 = parseFloat(prompt('Enter the exponent: ', ''));

	
	result = Math.pow(num1, num2);
	alert('The result is: ' + result);
}

