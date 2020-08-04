---
path: react-series/8
date: 2020-08-02T07:50:58.550Z
title: "Learning React: Debugging react apps"
description: "Learning to Debug in various ways"
---
## Handling simple error
Let's try to introduce an error in our program and see how it can be handled.
In out `nameChangeHandler` we do this change:
```diff
    ...
-    food.name = event.target.value;

+    food.name = event.input.value;
    ...
```

Now, when we reload nothing seems to be wrong, but when we type in the text field, error occurs. The error message will appear in both inspect window and our webpage.We start looking from the top-most error. We get `TypeError: event.input is undefined`. So clearly this part needs to be corrected. we can easily search for event documentation to find what properties it has and which one serves our purpose. 

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/6/simple-error_YDvv1ReRm.png)

Sometimes, however the error messages aren't very clear. So out best option is inspect the line number mentioned. 

## Finding Logical Errors
Now let's add a logical error. First rectify the error previously made. We will make the following changes in `nameChangedHandler`:


```diff

  nameChangedHandler = (event, id) => {
      const foodIndex = this.state.food.findIndex(f=>{
-     return f.id === id; 
    });
    ...

  nameChangedHandler = (event, id) => {
      const foodIndex = this.state.food.findIndex(f=>{
+     return f.userid === id; 
    });
    ...
```
Now if we run our application, we get no error. Even when we give input in textField there is no error. However now we can't type or add text in it.
To rectify this we will use **Debugger** that comes with our inspect tool. We will add a break point in code. What this does is basically pauses our application at that line of code and we can see the values of various parameters to check if there is any mistake.

Upon inspection we see that our `userid` is undefined and hence the comparison `return f.userid === id;` isn't valid. In this way we can make use of our inspector tool.

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/6/debugger_92YwXuQH1.png)

## Working with react developer tools
To make debugging even better while developing react apps, we can use **React Developer tools** browser extension. It provides some additional debugging tools. For more you can see [Faviocopes post](https://flaviocopes.com/react-developer-tools/).

## Using Error Boundaries
Sometime we know that a part of our code may not work as intended. And if that happens we wish to generate a nice custom message to the user for better explanation. 
So let's introduce a random error in our code to simulate such situation. We add following line to Food.js:

```diff
  const food = (props)=>{
+    const rnd = Math.random();
+    if(rnd > 0.7){
+      throw new Error('Something went wrong');
+    }
    return( 
      <div className={ moduleClasses.Food }> 
        <p onClick={props.click}>Some nutritional information! of food: {props.name} containing vitamin {props.vitamin} </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>	
    )
  };

```
What this new code does is basically generates a random number using `Math.random` and if it is greater than 0.7 we get an error message. In other words there is a 30% chance that we will get an error. If we run this code we can see an error ocurring occasionally.

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/6/random-error_SMVuotRtv.png)

Now we will try to handle this error with a separate component. We name it `./ErrorBoundary/ErrorBoundary.js`. This type of error handling was introduced in React 16+. Now what we will do is make a component that will wrap our `Food` component. And if an error occurs the thrown error is caught by this component. And from this component we can handle it the way we want. 
It contains:

```js
import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError : false,
    errorMessage: ''
  }
  
  componentDidCatch = (error,info)=>{
    this.setState({hasError: true, errorMessage:'Mayday Mayday'});
  }

  render(){
    if(this.state.hasError){
      return <h1>{this.state.errorMessage}</h1>;
    }
    else{
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
```
Wrapping in App.js
```diff
    if(this.state.showFoods)
    {
      foods =(
        <div>
          {this.state.food.map(( food , index)=>{
+            return <ErrorBoundary key = {food.id}><Food
                  click = {()=>this.deleteFoodHandler(index)}
                  name={food.name}
                  vitamin={food.vitamin}
                  key = {food.id}
                  changed = {(event) => this.nameChangedHandler(event, food.id)}/>
+              </ErrorBoundary>
          })}
        </div>
      );

```


As we can see if error is thrown it the `componentDidCatch` method is executed and error status is made true by `hasError:true`. And inside `render()`, if `hasError` is true a nice error message 'Mayday Mayday'. Else, our component is rendered normally.

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/6/error-boundary_8GG4Q4fKq.gif)

As you can see the error is generated randomly and we display what we intend to convey to the user. This type of handling should only be where we think something might go wrong. Hence we can't blindly wrap everything in it.


