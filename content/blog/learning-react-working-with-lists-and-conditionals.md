---
path: react-series/5
date: 2020-07-18T10:43:44.776Z
title: "Learning React: Working with lists and conditionals"
description: Some description
---
## Rendering content conditionally

Let we want to output our food components conditionally. For this we make use of our **switch** button. With this button the contents of our component will be shown or hidden. Clearly we can make use of conditions here. We want to change our state using **setState**. To have this toggle feature we will put the component block in curly braces so that we can write our conditional js code. Also we create a event handler: `toggleFoodHandler()` to toggle between visibility . We add a new property to our state `showFoods`. By default it will be false or component will be invisible. The event handler will toggle this property everytime. 

To make sure the components are only visible when `showFoods` is true, we use ternary operator. 

changes:

```diff
  state = {
    food :[
      {name: 'Orange', vitamin: 'C'},	
      {name: 'Banana', vitamin: 'B6'},	
      {name: 'Lemon', vitamin: 'C'}	
      ],
+  showFoods: false
}

+  toggleFoodHandler = () => {
+    const doesShow = this.state.showFoods;
+    this.setState({showFoods: !doesShow});
+  }

//inside render()
+  {
+    this.state.showFoods ?
+      <div>
        <Food 
          name={this.state.food[0].name} 
          vitamin={this.state.food[0].vitamin}>Its orange in color</Food>
+      </div> : null
+  }
```

Output:

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/3/foodtoggle_3OYuBDoH-B.gif)

## Handling Dynamic content the js way

Using the ternary operator is not the optimal way of executing conditional situation. Now we will try to execute the same thing using a different approach which is much *cleaner* than before. Our **Switch** button is basically changing our state (toggling `showFoods`). Because of this our render function is triggered. Inside render we create a variable `foods` which will contain the content to be toggled. i.e it will either contain `null` or the JSX we defined before. 

We pass `{foods}` inside `return()` as reference.

code change:
```diff
// inside render()
+    let foods = null;

+  	if(this.state.showFoods)
+	  {
+    foods =(
      <div>
        <Food 
           name={this.state.food[0].name} 
           vitamin={this.state.food[0].vitamin}>Its orange in color</Food>
     </div>
    );
+   }
    return (
        <div className="App">
          <h1>This message is shown in browser. </h1>
          <button 
          style = {style}
          onClick={this.toggleFoodHandler}>Switch </button>
+         {foods}
        </div>
      );
```
Output will be same as before.

## Outputting lists
Now so far we have hard coded the way we are extracting values from state. We can instead make use of lists. For this we have to coconvert our array of objects in state into valid JSX. Vanilla js just has the right thing for this. We can make use of `map()` method. Our map() method will take an arrow function as parameter. This arrow function returns JSX and map then forms an array of components. 

```diff
+  let foods = null;

+  if(this.state.showFoods)
+  {
+    foods =(
+      <div>
+        {this.state.food.map(food=>{
+          return <Food
+             name={food.name}
+             vitamin={food.vitamin}/>
+        })}
+      </div>

-    <div>
-      <Food 
-      name={this.state.food[0].name} 
-      vitamin={this.state.food[0].vitamin}>Its orange in color</Food>
-    </div>
```

