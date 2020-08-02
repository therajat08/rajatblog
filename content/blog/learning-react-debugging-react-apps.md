---
path: react-series/8
date: 2020-08-02T07:50:58.550Z
title: "Learning React: Debugging react apps"
description: "Debugging "
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

Now, when we reload nothing seems to be wrong, but when we type in the text field, error occurs. The error message will appear in both inspect window and our webpage.We start looking from the top-most error. We get `TypeError: event.input is undefined`. So clearly this part needs to be corrected. we can easily search for event documentation to find what properties it has and which one serves our pupose. 

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

