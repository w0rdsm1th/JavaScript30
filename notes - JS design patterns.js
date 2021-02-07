
/* Modules
* should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes
* 
* 
* */
var HTMLChanger = (function() {
    var contents = 'contents'

    var changeHTML = function() {
        var element = document.getElementById('attribute-to-change');
        element.innerHTML = contents;
    }

    return {
        callChangeHTML: function() {
            changeHTML();
            console.log(contents);
        }
    };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined


/*
* Revealing Module Pattern
* The purpose is to maintain encapsulation and reveal certain variables and methods 
* returned in an object literal. 
* */
var Exposer = (function() {
    var privateVariable = 10;

    var privateMethod = function() {
        console.log('Inside a private method!');
        privateVariable++;
    }

    var methodToExpose = function() {
        console.log('This is a method I want to expose!');
    }

    var otherMethodIWantToExpose = function() {
        privateMethod();
    }

    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined


/*
* Observer Design Pattern
* Broadcasting changes to other objects
* e.g. model-view-controller (MVC) architecture
* 
* It is important to distinguish the independent object or the subject.
* 
* Lots of advantages to Observer pattern but 
* Key disadvantages of observer pattern is a significant drop in performance as the number of observers increases. 
* One of the most notorious observers is watchers. 
* In AngularJS, we can watch variables, functions, and objects. 
* The $$digest cycle runs and notifies each of the watchers with the new values whenever a scope object is modified.
* */

// AngularJS with the observer pattern through event management.
// Controller 1
$scope.$on('nameChanged', function(event, args) {
    $scope.name = args.name;
});

// Controller 2
$scope.userNameChanged = function(name) {
    $scope.$emit('nameChanged', {name: name});
};


/*
* Prototype Design Pattern in JavaScript
* The Prototype design pattern relies on the JavaScript prototypical inheritance. 
* The prototype model is used mainly for creating objects in performance-intensive situations.
* 
* e.g. Use case of the prototype pattern: performing extensive database read to create an object used for other parts of the application. 
* Then when another process needs this object, instead of having to perform the database operation, 
* it would just clone the previously created object.
* 
* */


/*
* Singleton 
* Only allows for a single instantiation, but many instances of the same object. 
* The Singleton restricts clients from creating multiple objects, after the first object created, 
* it will return instances of itself.
* */


