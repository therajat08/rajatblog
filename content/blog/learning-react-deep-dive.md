---
path: react-series/8
date: 2020-08-07T14:51:36.643Z
title: "Learning React: Deep Dive"
description: Deeper diving into react internals and components
---
## A better project structure
For making a better structure, we have to decide what should go into its own component and what should be a higher order component like the root components we have that wrap  other components.
We can make certain changes to our application. Like make a components for the list of foods. Also, we can make a `cockpit` component(containing parts of return method of container `App.js`).
Now it make sense to have separate folders for components, assets(containing resources like images), and container(higher order components)
Typically, the container components or that manages state, like App.js should not contain much of UI code.

Now our folder structure looks like:
![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/folder-structure_SaHruXhuL.png)

## Splitting app into components

## Comparing Stateless and Stateful 
What is a stateful component?

It is c component that manages state. Mainly they are class based components. 
Now a functional component that manages its own state with the useState would of course also be a stateful component, so stateful does not automatically mean class-based component, though historically this has been the case because React hooks like useState are a really new feature. Still since React 16.8, stateful is not automatically a class-based component. It is a component that manages state, Presentational, also called dumb or stateless components historically have always been functional components because prior to React16.8, these functional components could not manage state.

What is a Stateless or presentational component? 

It is a functional component that does not manage state. Even though you could with useState, it is still a good practice to restrict yourself to a couple of components that are involved in the state management and of course, which depends on how big our app is. majority of your components should be presentational, stateless components,. Because that keeps your app manageable as we have predictable flow of data. 

## Class based v Functional Components
Its is important to know what kind of properties a component has and what they can do. These differ when it comes to managing state and lifecycle hooks. 

* class-based components can manage state and have access to lifecycle hooks. 
* in function based components it gets a bit tricky as with introduction of 'React hooks' they can manage state but they can't change 'Lifecycle hooks'

Note that 'Lifecycle hooks ' and 'React hooks' aren't the same things. 

* class-based components need 'this' keyword while in we use 'props' in other type of components

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/class-v-function_S_-RCVYQc.png)

## Component Lifecycle
First thing to note is that this is only available in class-based components. Functional based have something equivalent with React-Hooks. 

Here we have certain methods that react will run for us. They run at different points of time and in certain order. 

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/component-lifecycle_RDx3bIPLw.png)

Lets start with methods used while component creation. 

* First thing we have is **constructor(props)**. It is mainly for basic initialization. 
  * We need to call `super(props)` if we are using it
  * Shouldn't cause any side-effects from here like making HTTP calls
* Next is **getDerivedStateFromProps(props,state)**. It is very rarely use. In some scenario where props of our component can change and then we want to update some internal state if that component, then it will be used. 
* Next is our **render()** method. Other child components are rendered after this.
* The creation lifecycle ends when **componentDidMouunt()** is called after. 
  * Here we *can* we can cause side effects meaning we can do stuff like make HTTP calls.   
  * Don't change state or call setState here. As it triggers render again. 

  ![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/creation-life-cycle_aeGKxn8sa.png)

Now let's try and execute these functions. 

### constructor
In constructor we can initialize our state. Behind the scenes this is actually what happens.

```js
  constructor(props){
    super(props);
    console.log('App.js constructorj');
  }

```
### getDerivedStateFromProps
We need to add static keyword here. We should return the updated state here.

```js
static getDerivedStateFromProps(props, state){
  console.log('App.js getDerivedStateFromProps', props);
  return state;
}
```
### render
Now the render method executes. After it all the child components will be run. We can see the lifecycle running there too.


```js

render(){
  console.log('App.js render');
  
  ...
}
```
### componentDidMount
Next this method will run 

```js
componentDidMount(){
  console.log('App.js componentDidMount');
}
```
We can see the order of execution in inspector window.

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/lifecycle-code_et0r8adT7.png)

## Component Lifecycle - Update
Just like there is Lifecycle for component creation there is also for updating.  

* First we have **getDerivedStateFromProps(props,state)**. This is used to sync our local state inside of the component to the props we are getting. Shouldn't cause any side-effects here. 
* **shouldComponentUpdate(nextProps, nextState)** This is used for performance optimization. It can **block** an update and should be used carefully. 
* **render()** and updating Child Component Props. 

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/update-cycle_bxnDTwuyn.png)

* **getSnapshotBeforeUpdate(prevProsp,prevState)** - this method can be used to take a snapshot of state before update.

* Lastly **componentDidUpdate()** runs indicating that update is complete. Make sure to not cause any infinite loop here or something that might cause unnecessary re-render. 

Now we need convert some of our function-based components to class-based components to use lifecycle methods. 

To show the cycle changes made in Foods.js after converting it to class-based component.

```js

    static getDerivedStateFromProps(props, state){
      console.log("Foods.js getDerivedStateFromProps");
      return state;
    }

    shouldComponentUpdate(nextProps,nextState){
      console.log("Foods.js shouldComponentUpdate");
      return true;
    }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Foods.js SnapShotBeforeUpdate");
    return null;
  }
  
  componentDidUpdate(){
    console.log("Foods.js componentDidUpdate");
  }

  render(){
    console.log('Foods.js rendering...');
    ...
  }
```
Inspector window :

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/update-code_LPkb69G4Nu.png)


## Using useEffect() in functional components
Here we will import React1-hooks. It is the second most important **React-hook** next to useState(). It is sort of combined effect of `comPonentDidMount` and `componentDidUpdate`. 
Our `Cockpit.js ` is still a functional component. We can implement it there.

```js
const cockpit = (props) => {
    useEffect(()=>{
      console.log('Cockpit.js useEffect');
    })
    ...
  }
```
Whenever the app is re-rendered this method is called.

Inspector window:

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/useEffect_zHyVnzVOR.png)

### Controlling useEffect() behaviour
The method is running a lot of times. Let we want to send a HTTP request only when component first renders. To mimic this behaviour we use `setTimeout()`. And there is a shortcut to only run it on first render using an empty array as second argument of useEffect. In this array we basically tell the dependencies of the method. When empty the dependencies don't change hence it only runs once.
![](https://ik.imagekit.io/18dkv5g43j/React_udemy/7/alert_mUYEBOB9L.png)

