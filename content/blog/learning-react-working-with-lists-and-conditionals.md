---
path: react-series/5
date: 2020-07-18T10:43:44.776Z
title: "Learning React: Working with lists and conditionals"
description: Some description
---
## Rendering content conditionally

Let we want to output our food components conditinally. For this we make use of our **switch** button. With this button the contents of our component will be shown or hidden. Clearly we can make use of conditions here. We want to change our state using **setState**. To have this toggle feature we will put the component block in curly braces so that we can write our conditional js code. Also we create a event handler: `toggleFoodHandler()` to toggle between visibility . We add a new property to our state `showFoods`. By default it will be false or component will be invisible. The event handler will toggle this property evertime. 

To make sure the components are only visible when `showFoods` is true, we use ternary operator. 

changes:

```diff
	state = {
		food :[
			{name: 'Orange', vitamin: 'C'},	
			{name: 'Banana', vitamin: 'B6'},	
			{name: 'Lemon', vitamin: 'C'}	
		],
+		showFoods: false
	}

+	toggleFoodHandler = () => {
+		const doesShow = this.state.showFoods;
+		this.setState({showFoods: !doesShow});
+	}

	//inside render()
+	{
+		this.state.showFoods ?
+		<div>
			<Food 
				name={this.state.food[0].name} 
			vitamin={this.state.food[0].vitamin}>Its orange in color</Food>
+		</div> : null
+	}
```

Output:

![](https://ik.imagekit.io/18dkv5g43j/React_udemy/3/foodtoggle_3OYuBDoH-B.gif)
