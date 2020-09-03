---
path: react-series/9
date: 2020-09-03T11:29:44.917Z
title: "Learning React: Deep Dive 2"
description: Learning about react lifecycles and how they work
---
## Cleaning up with LifeCycle Hooks 
Let's say we want to do some cleanup work. For this we can use `componentWillUnmount`. So that just before the component is removed we can perform certain cleanup operations. 

If we are using React-hooks we can also use `useEffect`.Remember that we can have **more than one** `useEffect`. Let we add a button to our app to remove the cockpit component. So we might want to do some cleanup work just before it is removed or destroyed. 
```js
   //Cockpit.js

   useEffect(()=>{
     console.log('Cockpit.js useEffect');
     //HTTPrequest
     // To mimic such behaviour
     setTimeout(()=>{
       alert('Saved data to cloud');
     }, 1000);
     return()=>{
       console.log('Cockpit.js cleanup work in useEffect');
     };
   }, []);

```

It will have following result:

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/cleanupwork_SzVu1R6t7.gif)

Note that Another cleanup work we can do here is to remove the alert when the cockpit is removed. 

