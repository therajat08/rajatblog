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

## Using shouldComponentUpdate for optimization
In our app there is a little problem that we can improve. Our `Foods.js` has **shouldComponentUpdate**, which is true meaning that whenever something changes(even when cockpit changes) our Foods.js re-renders. This is unnecessary. When we remove the cockpit, the person components render again even though there are no changes in them. We can optimize this using  **shouldComponentUpdate** by checking what is getting updated and re-rendering only when needed.  

We now make changes to **shouldComponentUpdate** and if we remove cockpit, we can see the difference in output before and after.

```js
    shouldComponentUpdate(nextProps,nextState){
      console.log("Foods.js shouldComponentUpdate");
      if(nextProps.food !== this.props.food)
      {
        return true;
      }
      else{
        return false;
      }
    }
```

Before change:

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/shouldUpdate_2EOB3u8Zt.png)

After change:

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/shouldComponentUpdate-optimize__FgRsBz7_.png)

Note that here `props.food` is an array and we are comparing the references or the pointers, not the values of the state. Previously we created copy of our state in App.js or created new pointers; that is why this logic works fine here. 

## Optimizing Functional Components with React.memo()
Let's see how we can do similar optimization in function bases components. 

In our 'Cockpit.js' (functional), we can improve by only re-rendering when there are some change in values. For this we can use `React.memo();`. This basically uses **memoization** where we keep snapshots of component and only if input changes re-render occurs. Sort of like how memoization works in Dynamic programming. 

```js
//Cockpit.js
export default React.memo(Cockpit);
```
## When to optimize?
Now that we have idea about how we could begin optimizing we may want to use `React.memo();` and `shouldComponentUpdate` everywhere. But sometimes our components may need to re-render **every time** their parent changes. And in such case the code will only be a hindrance to something that is inevitable.

## Pure components instead of shouldComponentUpdate
We used shouldComponentUpdate in Foods.js to make sure re-rendering only occurs when there is a change in the props. There we checked for `props.food`. However we can further mention `props.clicked` and `props.changed` as we are also using them from props. 

So that it looks like:


```js
    shouldComponentUpdate(nextProps,nextState){
      console.log("Foods.js shouldComponentUpdate");
      if(
        nextProps.food !== this.props.food ||
        nextProps.changed != this.props.changed ||
        nextProps.clicked != this.props.clicked
      )
      {
        return true;
      }
      else{
        return false;
      }
    }
```

Here we are making sure every prop is checked. In cases we want to check for all properties, we can make use of **PureComponents** instead of **shouldComponentUpdate**. Changes look like:

```js
import React, {PureComponent} from 'react';

class Foods extends PureComponent{
  ...
}
```

App functioning will be same and behind the scene it is made sure that every property is checked. 

## How react updates the DOM ? 

`render()` doesn't immediately updates the DOM.React keeps two copies of DOM. It compares virtual DOM. It has **OLD virtual DOM** and **Re-rendered Virtual DOM**. After comparison, its if changes are found, it only re-renders where differences were found. Accessing the DOM is very slow, hence React has this concept of virtual DOM. So that changes are made not always and not in all the parts. Ofcourse **shouldComponentUpdate** also helps in this. 

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/dom-update_IRPXS5FtF.png)

## Rendering Adjacent JSX elements 
We understood it before that we have to export just one **root** JSX element from a component. That one can contain other JSX elements inside it. However, we can work our way around this by returning an array of elements. We will still be returning a single object or array in this case. We just need to make sure there is a key so that react can efficiently update and reorder these elements. 

Let's bring this functionality in Food.js:

Before

```js
    return( 
      <div className={ moduleClasses.Food }> 
        <p 
        onClick={this.props.click}>
          Some nutritional information! of food: {this.props.name} containing vitamin {this.props.vitamin} 
        </p>
        <p>{this.props.children}</p>
        <input 
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}
        />
      </div>	
    )
```

After:

```js

    return( 
        [
        <p key = "i1" onClick={this.props.click}>
          Some nutritional information! of food: {this.props.name} containing vitamin {this.props.vitamin} 
        </p>,
        <p key = "i2">{this.props.children}</p>,
        <input 
          key = "i3"
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}
          />
        ]
    )
```
The output will remain same except for the styling that div tag was bringing. 

**Another way** of achieving this is using a little 'hack'. We can create a wrapping component that does not render actual HTML, but is there to fulfill React's requirement of having **single wrapping component**.  

We create a wrapper component `Aux.js` :

```js
const aux = props => props.children;

export default aux;
```

And now in `Food.js` we wrap our JSX elements in `<Aux>` tag. Now the app will just as before. So here we basically used the `props.children` property so that elements between opening and closing of `<Aux>` tag are rendered using `React.createElement()` behind the scene. 

## Using React Fragment
Since React 16.2, there is in-built `<Aux>` like component called **Fragment**. It can be used as:


```js
  <React.Fragment>
    // JSX elements/tags
  </React.Fragment>
```
## What we learned
* Cleaning up 
* Optimization with shouldComponentUpdate and with React.memo()
* Adjacent JSX elements
 Using React Fragments
