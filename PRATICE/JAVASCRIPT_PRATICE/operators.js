// Javascript Operators are symbols that are used to perform operations on operands.
/*
    Types of Operators:
    1. Arithmetic Operators:
        Arithmetic operators are used to perform arithmetic between variables and/or values.
        +	Addition
        -	Subtraction
        *	Multiplication
        **	Exponentiation (ES2016)
        /	Division
        %	Modulus (Division Remainder)
        ++	Increment
        --	Decrement

    2. Assignment Operators:
        Assignment operators assign values to JavaScript variables.
        =	x = y
        +=	x += y
        -=	x -= y
        *=	x *= y
        /=	x /= y
        %=	x %= y
        **=	x **= y

    3. Comparison Operators:
        Comparison operators are used in logical statements to determine equality or difference between variables or values.
        ==	equal to
        ===	equal value and equal type
        !=	not equal
        !==	not equal value or not equal type
        >	greater than
        <	less than
        >=	greater than or equal to
        <=	less than or equal to
        ?	ternary operator:
        

    4. Logical Operators:
        Logical operators are used to determine the logic between variables or values.
        &&	and
        ||	or
        !	not

    5. Bitwise Operators
        Bitwise operators are used to perform bitwise operations on operands.
        &	AND
        |	OR
        ~	NOT
        ^	XOR
        <<	Zero fill left shift
        >>	Signed right shift
        >>>	Zero fill right shift

    6. String Operators
        The + operator can also be used to add (concatenate) strings.
        "John" + " " + "Doe" = "John Doe"

    7. Conditional (ternary) Operator
        The conditional operator assigns a value to a variable based on a condition.
        variable = (condition) ? value1:value2 
        variable = (condition) ? (value1:value2) 
        variable = condition ? value1 : value2

    8. Comma Operator:
        The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand.
        var x = 0;
        var y = (x++, 10);
        // y = 10
        // x = 1

    9. Unary Operators:
        Unary operators are used to perform operations on a single operand. 
        delete	delete a property from an object.
        typeof	returns the type of a variable.
        -	converts its operand to Number type.
        +	converts its operand to Number type.
        ++	increments its operand by 1.
        --	decrements its operand by 1.
        !	Logical not operator.
        ~	Bitwise not
        void	discards a return value of an expression.
        new	creates an instance of a constructor.
        super	calls the parent constructor.
        this	refers to the current object.
        yield	pauses and resumes a generator function.
        async function*	declares an asynchronous generator function.
        await	pauses and resumes an async function and waits for the completion of a promise.
        class	declares a class.
        const	declares a read-only named constant.
        export	exports functions, objects or primitive values from a file.
        import	imports functions, objects or primitive values from an external module.
        let	declares a block-scoped, local variable.
        static	defines a static method for a class.
        debugger	stops the execution of JavaScript, and calls (if available) the debugging function.
        function	declares a function.
        return	exits from a function.
        var	declares a variable.
        default	specifies the default case in a switch statement.
        if ... else	executes one or the other statement depending on a condition.
        switch	execute a block of code depending on different cases.
        do ... while	executes a block of code, and then repeats the loop while a condition is true.
        instanceof	determines whether an object is an instance of another object.
        throw	throws a user-defined exception.
        while	executes a block of code while a condition is true.
        else	executes a block of code if a condition is false.
        try ... catch	implements error handling to a block of code.
        finally	specifies a block of code to be executed when a try block is executed.
        with	specifies the default object for a block of code.
        break	terminates a switch or a loop.
        case	marks a block of code in switch statement to be executed.
        catch	marks a block of code to handle errors in a try statement.
        continue	jumps to the next iteration of a loop.
        debugger

    10. Relational Operators:
        Relational operators are used to determine the relationship between operands.
        in	Returns true if the specified property is in the specified object.
        instanceof	Returns true if the specified object is an instance of the specified object.
        new	Creates an instance of a constructor.
        instanceof	Returns true if the specified object is an instance of the specified object.
        new	Creates an instance of a constructor.
    
    There are some special operators in javascript:

    1. typeof Operator:
        The typeof operator returns the type of a variable, object, function or expression.
        typeof "John"                 // Returns string 
        typeof 3.14                   // Returns number
        typeof NaN                    // Returns number
        typeof false                  // Returns boolean
        typeof [1,2,3,4]              // Returns object
        typeof {name:'John', age:34}  // Returns object
        typeof new Date()             // Returns object
        typeof function () {}         // Returns function
        typeof myCar                  // Returns undefined (if myCar is not declared)
        typeof null                   // Returns object

    2. delete Operator:
        The delete operator deletes a property from an object.
        delete objectName.property
        delete objectName[property]
        delete objectName

    3. in Operator:
        The in operator returns true if the specified property is in the specified object.
        propertyNameOrNumber in objectName

    4. instanceof Operator:
        The instanceof operator returns true if the specified object is an instance of the specified object.
        objectName instanceof objectType

    5. void Operator:
        The void operator discards an expression's return value.
        void (expression)

    6. yield Operator:
        The yield operator is used to pause and resume a generator function (function* or legacy generator function).
        yield [expression]

*/
