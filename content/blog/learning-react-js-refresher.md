---
path: react-series/2
date: 2020-07-07T16:41:11.555Z
title: "Learning React : JS refresher "
description: In this i learn about the basic JS concepts that will be used consistently.
---
React uses the most recent version of javascript. If someone already knows this, they should skip this part. 

## let and const
In ES6 (ECMAScript-6), two new ways of creating variable were created in addition to `var`. They are `let` and `const`. As the name might suggest `const` is used to create variables whose value remain constant. In contrast `let` type variables can have their values changed.
This example shows how let can be used:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/5l9ek0j8hw705betunsh.jpeg)

Below you can see, const value change is not allowed.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/dvt22ieiu2tenzz7ny1u.jpeg)

## Arrow functions:
syntax of arrow function:
```
const fund = (<parameters>) =>{
  //function body
}

// if the functions only have a return statement 
// it can also be written as

const fund = (<parameters>) => <return statement>;

// Note: we need to omit return keyword here
```

With this notation, the `this` keyword behaves as it should. This syntax will be used more in this series.

## Export and imports (Modules)
We can have various modules in our project. And their functionality can be exploited using `export` and `import` keywords. There are certain syntactical differences while importing and exporting.
Let's say we are exporting from files `picture.js` and `frame.js`
```
// picture.js

const picture{
  color : 'red';
}

export default picture;
```
```
// frame.js

export const type = () => "silver"; 
// note here we haven't used return

export const size = 15;
```

Now let we have to import these files into our `app.js`. The way we import is shown:
```
// app.js

import pic from './picture.js'

import {type} from './frame.js'
import {size} from './frame.js'

```
Note that we can import picture.js with any name. This is because of the default keyword used. They are called <ins>"default-exports"</ins>.
But for frame.js we use curly braces to specifically target what we want. They are called <ins>"named-exports"</ins>. 
For frame.js:
```
// we can use alias as

import {type as kind} from './frame.js'

// or use * notation to import all the parts

import * as bundle from './frame.js'
```
## Classes
It is created with `class` keyword and can contain *properties* and *methods*.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ybfcg9umcz0el6rw4hr1.jpeg)

To instantiate a class we use `new` keyword
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/mkqd4vi305waq7zqt04a.jpeg)
Through classes, we can take advantage of inheritance also.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/2v0y1troke1crgzhd68r.jpeg)
Note:  we need to call `super()` function here as the constructor of the parent class (planets) also need to be executed. Clearly, with inheritance we are able to access the methods of both child and parent class. Classes can be used to create our react components.

## Classes, properties and methods
The next gen js also provides new ways of declaring our properties and methods. 
 - For instance, we can skip the constructor part and directly declare our property value.
 - Also for methods, we can think of it as a property that stores function as a value. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/8p9viql8npl1uwj3v1ks.jpeg)
Since we are using arrow function as a property value here, we don't encounter problems with `this` keyword.
Now using this syntax in our previous code.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/xz5blbogb0m7d1cgmlt7.jpeg)

## Spread and Rest operators
The operator we are talking about here is `...` . It is called *Spread* or *Rest* depending on where it is used.
- Rest
  - when it is used to merge list of function arguments into an array. 
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/tsqbdflzk4f8qxp6bmo0.jpeg)
  - Here sortArgs can receive an indefinite number of input arguments. So we use `...` here.
- Spread
  - When it used to split array elements or object properties.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/i2cvqvm519lgpruqebrv.jpeg)
  - Here all the elements of 'oldArray' are brought to newArray and additionally 1,2 are also added.
  - similarly, we are pulling all the properties if 'oldObject' into 'newObject' and also added new property 'newProp'. If it was already present, the value will be overwritten.

## Destructuring
It allows storing array elements or object properties into variables. In a way, it seems similar to how rest and spread worked. But unlike them here we are extracting specific values and not the entire array or object.  
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ctxgg07xr89qzirv4shi.jpeg)

As we can see from the syntax. We assigned variable a and b values 'Hello' and 'Max' respectively. In the case of objects, we are using curly braces. Here we specify the property name. 
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/nfkrniyh5w90mi5c5air.jpeg)

## Reference and Primitive types
 
Datatypes like strings, numbers and boolean are **primitive types**. We can simply copy the value of one such variable into another. And the new variable will contain the exact value. Changing value of **newNumber** will have no effect on **number**.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/5wbz36mlkvgqtuair5d8.jpeg)

On the other hand arrays and objects are **Reference types**. Consider:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/e2w1zrbfplxlg7svgcy8.jpeg)

Here, we made a var **newCar** and assigned it to **car**. Now **newCar** is said to "point to car". or any operation we do on it will have an effect on **car**. We changed property of car. And console shows the same using newCar. Ofcourse to copy values and not the pointer we will use **spread operator**. Similar behaviour is seen in arrays also.


## What we learned:
  - let and const
  - Arrow functions
  - Exports and imports
  - Classes
  - Spread and Rest Operators
  - Destructuring
  - Reference and Primitive types

Next part is the basic syntax and base features of React.

Socials : [Twitter](twitter.com/rajat_naegi), [Github](github.com/therajat08), [LinkedIn](linkedin.com/therajat08)

Course: [Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
