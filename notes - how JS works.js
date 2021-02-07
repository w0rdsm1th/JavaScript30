
// https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf
// demo of how the call stack works, and how exceptions are raised through the stack

function foo() {
    throw new Error('SessionStack will help you resolve crashes :)');
}
function bar() {
    foo();
}
function start() {
    bar();
}
start();


//“Blowing the stack” — this happens when you reach the maximum Call Stack size. 
// maximum stack depth


// problem: single thraeded but long running functions 
// answer: asynchronous callbacks


// V8, written in C++.
// range of other JS engines, e.g. Rhino (mozilla, written in java)
// V8: compiles JavaScript code into machine code at execution by implementing a JIT (Just-In-Time) compiler
// key diff to Rhino, V8 doesn’t produce bytecode or any intermediate code.

// 2x compilers
// The V8 Engine also uses several threads internally:
// The main thread does what you would expect: fetch your code, compile it and then execute it
// There’s also a separate thread for compiling, so that the main thread can keep executing while the former is optimizing the code
// A Profiler thread that will tell the runtime on which methods we spend a lot of time so that Crankshaft can optimize them
// A few threads to handle Garbage Collector sweeps


// highly dynamic language, attributes can be added on the fly. hard to allocate memory, esp efficiently like C where allocate memory in code.
// hidden classes: classes created at runtime
// V8 implements "class transitions" whereby as soon as new properties are added to an object def,
// the hidden class should switch from original C0 to C1, and optimised code that comes with C1

// Hidden class transitions are dependent on the order in which properties are added to an object. 
// e.g. if add property .a then .b to Point(a, b), different hidden class than if add .b then .a
// In such cases, it’s much better to initialize dynamic properties in the same order so that the hidden classes can be reused.


// Inline caching
// Inline caching relies on the observation that repeated calls to the same method tend to occur on the same type of object. 
// V8 maintains a cache of the type of objects that were passed as a parameter in recent method calls and 
// uses this information to make an assumption about the type of object that will be passed as a 
// parameter in the future


// Combining Hidden classes and Inline caching
// After two successful calls of the same method to the same hidden class, V8 omits the hidden class lookup and simply adds the offset of the property to the object pointer itself. 


// THEN compiling to machine code 


// How to write optimized JavaScript
// Order of object properties: always instantiate your object properties in the same order so that hidden classes, and subsequently optimized code, can be shared.
// 
// Dynamic properties: adding properties to an object after instantiation will force a hidden class change and slow down any methods that were optimized for the previous hidden class. 
// BETTER: assign all of an object’s properties in its constructor.
// 
// Methods: code that executes the same method repeatedly will run faster than code that executes many different methods only once (due to inline caching).
// 
// Arrays: avoid sparse arrays where keys are not incremental numbers. Sparse arrays which don’t have every element inside them are a hash table. Elements in such arrays are more expensive to access. Also, try to avoid pre-allocating large arrays. It’s better to grow as you go. Finally, don’t delete elements in arrays. It makes the keys sparse.
// 
// Tagged values: V8 represents objects and numbers with 32 bits. It uses a bit to know if it is an object (flag = 1) or an integer (flag = 0) called SMI (SMall Integer) because of its 31 bits. Then, if a numeric value is bigger than 31 bits, V8 will box the number, turning it into a double and creating a new object to put the number inside. 
// Try to use 31 bit signed numbers whenever possible to avoid the expensive boxing operation into a JS object.
