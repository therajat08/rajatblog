---
path: react-series/10
date: 2020-09-04T10:03:21.606Z
title: "Learning React: Deep Dive 3"
description: Place holder
---
## Higher Order Components - Intro
Its a convention to name HOC with a '**With**' in at the beginning of its name. With HOC we have components that wraps other components and adds additional functionality like exception handling, http logic etc. 

## Another form of HOCs
There is a **second** way of making HOCs. This way does not work by returning a functional component but instead by using a regular javascript function. We make a function called `withClass.js` (note lower case meaning it's not a component). This function will take a component as an argument and also second argument which will be needed for our logic(which will depend on function of our component ). It looks like:

```js
//withClass
import React from 'react';

const withClass = (WrappedComponent, className) =>{
  return props=>(
    <div className={className}>
      <WrappedComponent/>
    </div>
  );
}; 
export default withClass;
```
To use this in our App, first we need to wrap our JSX in the `<Aux>`  tag made before. Then import the above class. Lastly while exporting we call  `withClass()` with App (a component) as **first argument** and moduleClass.App (css class )  as **second argument**. 


```js
//App.js

import withClass from '../hoc/withClass.js';

    ...

    <Aux>
      <button
        onClick={()=>{
          this.setState({showCockpit: false});
        }}
      >
        Remove Cockpit
      </button>
      {this.state.showCockpit ? (
        <Cockpit
        title  = {this.props.appTitle}
        showFoods={this.state.showFoods}
        foodLength = {this.state.food.length}
        clicked={this.toggleFoodHandler}
            />
      ) : null }
      {foods}
    </Aux>
    ...

export default  withClass(App, moduleClass.App) ;
```
### Which method to use?
This depends on us. But mainly when adding some javascript  logic like sending analytics we use second method.

## Passing Unknown Props
Wrapped component missing its props. Can pass prosp dynamically. 

To bring back the styling of our food components we can wrap `food.js` in **withClass** and use spread operator in `withClass.js` to pass the props. 

## Setting state correctly
(only for class-based components). We are setting state correctly but we may do it incorrectly. Let we want to count the number of changes we make in our text field. For this we make a new property : **changeCounter**. So after every keystroke and deletion this counter should increment.

For this to work we make changes in **nameChangedHandler**. We may start by using this code:


```js
  nameChangedHandler = (event, id) => {
    ...

    this.setState({
          food : foods,
          changeCounter : prevState.changeCounter +1
      
    }); 
  }
```

This code will work and the counter will seem to change properly. But this is the wrong way of updating. The setState does not immediately trigger an update of the state, instead it is scheduled by react. And performs update when it has the resources available. Due to this reason the state we are changing with this code might not be the latest or isn't guaranteed.   

To correct this, our setState can also take a function as argument. This function will take prevState or previous state as argument. Here it is guaranteed that this will be the previous state that we expected.  

```js
  nameChangedHandler = (event, id) => {
    ...

    this.setState((prevState,props)=>{
      return{
          food : foods,
          changeCounter : prevState.changeCounter +1
      };
    }); 
  }
```

This code will perform same as previous approach but is the **right way**.

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/correct-way-of-setState_3f9EPz5vY.gif)

## Using Prototypes
Now we will learn to improve the way of receiving Props. Works in both functional and class-bases components. 

Our Current way is fine but suppose we want to distribute or share our code then it won't be easy for them to tell what kind of props to add. Or the nature of already present props.

This can be done by installing a package with command:

`npm install --save prop-types`

We need to import it ofcourse. And now we can specify the data type our props. By doing this if we accidentally at incorrect data a **warning** will be shown. 

Changes made in Food.js component:

```js
import PropTypes from 'prop-types';

...

Food.propTypes = {
  click: PropTypes.func, 
  name: PropTypes.string,
  vitamin: PropTypes.string,
  changed: PropTypes.func
};

export default withClass(Food,moduleClasses.Food );
```
**propTypes** is a special property that we add to component object and react will look after in development mode. And give warning if we pass incorrect props.

Now if i deliberately add incorrect data  in our `App.js`, a warning arises.


```js
// incorrect addition
      ...
      {id : 'asf1', name: 'Orange', vitamin: 2},	// here
      {id : 'asf2', name: 'Banana', vitamin: 'B6'},	
      {id : 'asf3', name: 'Lemon', vitamin: 'C'}	
      ...
```

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/propTypes_A29T9nBm1.png)

## Using Refs
Let's say when our app is rendered we want focus to be on third text-Field. 
React makes it easy for us to  select elements. 
**ref** like 'key' is a special property that can be passed to any component. 

ref can be used in a number of ways.Here is one used in earlier versions of React 

```diff
//Food.js

  componentDidMount(){
+   this.inputElement.focus();
  }

...
  <input 
    key = "i3"
+   ref={(inputEl) => {this.inputElement = inputEl}}
    type="text" 
    onChange={this.props.changed} 
    value={this.props.name}
  />

```
More modern approach(since React 16.3):

```diff
+  constructor(props){
+    super(props);
+    this.inputElementRef = React.createRef();
+  }

  componentDidMount(){
+    this.inputElementRef.current.focus();
  }

  ...
  <input 
    key = "i3"
+   ref = { this.inputElementRef }
    type="text" 
    onChange={this.props.changed} 
    value={this.props.name}
  />
  ...

```

As we can see the focus is shifted as intended:
![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/ref_2LJuIw7zn.png)

## Refs with React Hooks
Now we will try and use refs in function based components. We will use a hook **useRef**. 

Let's say every time the app is rendered we want our food components to be toggled or the button to be pressed by default. For this we will store the reference in a variable `toggleBtnRef` and later access it to click the button in `useEffect()`. 

changes made in Cockpit.js:

```diff

+  import React, { useEffect, useRef } from 'react';

+  const toggleBtnRef = useRef(null);

   useEffect(()=>{
+    toggleBtnRef.current.click();
     return()=>{
       console.log('Cockpit.js cleanup work in useEffect');
     };
   }, []);

   ...

    <button 
+      ref = {toggleBtnRef}
      className={btnClass}
      onClick={props.clicked}>Switch </button>

    ...
```

## Understanding prop chain problems

## Using context  API

