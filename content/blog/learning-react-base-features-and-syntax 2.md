---
path: react-series/learn-react-4
date: 2020-07-16T15:18:31.860Z
title: "Learning React: Base Features and Syntax 2"
description: series continue
---
### Understanding children property

Last we learnt how to pass values to our component using props. We can do this in another way. We can give simple text or HTML between opening and closing tags of our components in our **App.js**. To access this we use `props.children` in **Food.js**.

```javascript
// App.js
class App extends Component{
  render(){
      return (
        <div className="App">
          <h1>This message is shown in browser. </h1>
          <Food name="Orange" vitamin="C">Its orange in color</Food>
          <Food name = "Banana" vitamin = "B6">Its yellow in color</Food>   
          <Food name = "Lemon" vitamin = "C">Its green in color</Food>  
        </div>
      );
  }
}
```

Food.js:

```javascript
// Food.js
<div>
        <p>Some nutritional information! of food: {props.name} containing vitamin {props.vitamin} </p>
        <p>{props.children}</p>
    </div>
```

Output:

![](https://cdn-images-1.medium.com/max/800/1*U6kR_RJft8kneYmTLaaPOg.png)

### Understanding and Using State

Before this, we hard-coded the info. We can change this by using state. **State** is a special property of a component. Normally, we can only define the state if it is a class-based component (not function-based). However, with **Hooks**, this changes. Still, we should make our components with function more often. This is because using state in a large application in every component makes it difficult to manage. In this special property of our component, if a value changes our `render()` method is also triggered again.\
If we make the following changes to App.js, the result will be same as before:



```javascript
class App extends Component{
    state = {
        food :[
            {name: 'Orange', vitamin: 'C'}, 
            {name: 'Banana', vitamin: 'B6'},    
            {name: 'Lemon', vitamin: 'C'}   
        ]
    }
  render(){
      return (
        <div className="App">
          <h1>This message is shown in browser. </h1>
          <button>Switch </button>
          <Food name={this.state.food[0].name} vitamin={this.state.food[0].vitamin}>Its orange in color</Food>
          <Food name = {this.state.food[1].name}vitamin = {this.state.food[1].vitamin}>Its yellow in color</Food>   
          <Food name = {this.state.food[2].name} vitamin = {this.state.food[2].vitamin}>Its green in color</Food>   
        </div>
      );
  }
```

### Handling Events with Methods

We added a button to our code before. To handle its event, we will use a method to our class. Note after making this function, do not add `()` . Because we only want to pass the reference of our function and not let render function execute it.\
code changes made:

```
switchNameHandler = () =>{
        console.log('was clicked');
    }
  render(){
      return (
        <div className="App">
          <h1>This message is shown in browser. </h1>
          <button onClick={this.switchNameHandler}>Switch </button>
          <Food name={this.state.food[0].name} vitamin={this.state.food[0].vitamin}>Its orange in color</Food>
          <Food name = {this.state.food[1].name}vitamin = {this.state.food[1].vitamin}>Its yellow in color</Food>   
          <Food name = {this.state.food[2].name} vitamin = {this.state.food[2].vitamin}>Its green in color</Food>   
        </div>
      );
```

\
Output:

![](https://cdn-images-1.medium.com/max/800/1*8Ejy4v1GKOxiGQvFaf0eLw.gif)

**Manipulating state upon click**\
Now to manipulate state, we will use `this` Keyword. Note that, this will only work as intended if we are using ES6 function implementation of the component. Otherwise, `this` won’t refer to our class.\
Now we can’t directly change state using `this.state.food[2].name = ‘Grape’`, as react won’t pick it up. Instead, we will use `setState` which is predefined in React library.\
This method won’t discard values other than changed ones(if defined). But will instead merge overridden ones with them. There aren’t many things that make changes to DOM. Only two will have effects:

* changing state
* changing props

If state/props changes, code is analysed and updates are made only at the targeted points.