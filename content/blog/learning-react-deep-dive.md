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

