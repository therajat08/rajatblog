---
path: react-series/react-6
date: 2020-07-21T11:45:13.554Z
title: Styling React Components & Elements
description: a description will be here someday
---
## Setting Styles Dynamically

Let's change some css or style dynamically. So far, we have defined some css for in `const style`.  It was used for styling button.Now lets say we want to change its color depending on whether food elements are visible or not. For this we will simply add `style.backgroundColor = 'red';` inside the if condition component visibility is checked. 
So now, if they are visible button turns red and green when they are invisible.

code change:
```diff
    if(this.state.showFoods)
    {
      /* other code */
+     style.backgroundColor = 'red';// setting style dynamically using js
    }
```
Output:
![](https://ik.imagekit.io/18dkv5g43j/React_udemy/5/buttoncss_GP9oMe4_y.gif)

## Setting Classes Dynamically

We can even change the class name dynamically so that different css gets activated for different event. 

### Plan
Lets try and do this. We will change the Styling of our `H1` tag that contains **This message is shown in Browser**. Let say when there are 2 or less than 2 food components visible it is **blue** in color and when 1 or less than 1, it is becomes *italic*.

### Execution
For this firstly we update our App.css with two new blocks. Red and Blue.
```css
.blue{
  color: blue;
}
.italic{
  font-style: italic;
}
```
Now in App.js inside render() we create an empty string classes. We will push class names to this array as needed and when they are two classes to be used together we will use `join(' ')` to join them. This array of strings is passed to our H1 tag.

```diff
+    const classes = [];
+    if(this.state.food.length<=2){
+      classes.push('blue');
+    }
+    if(this.state.food.length <=1){
+      classes.push('italic');
+    }

    return (
      <div className="App">
+       <h1 className={classes.join(' ')}>This message is shown in browser. </h1>
        <button 
          style = {style}
          onClick={this.toggleFoodHandler}>Switch </button>
          {foods}
      </div>
    );
```
output:
![](https://ik.imagekit.io/18dkv5g43j/React_udemy/5/classcssdynamic_-5wv7bg6V.gif)
