---
path: react-series/1
date: 2020-07-05T16:35:16.303Z
title: "Learning React : Introduction"
canonical: https://thewebdev.tech/react-tutorials-1
description: Beginning my react journey with udemy course
---
Here I am beginning my react journey. I have chosen a course on Udemy by [Maximilian Schwarzmüller](twitter/com/@maxedapps).
And I am planning to write posts about what I have been learning in a series. So that I can refer to them again in case I forget something. Further, if someone benefits from these then I would feel very glad to have helped someone.

## What is React?

It is a javascript library for building interfaces. It basically consists of "components". Our webpage can be thought of as made of various components. We can change the behaviour and appearance of our components without disturbing the working of other components. 
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/psifksijparjbhxfrpdz.jpeg)
Once we make a component we can use it again and again without having to repeat (if it was just made if HTML, CSS and JS). 

## Single-page applications and Multiple-page applications

### Single-page applications:

* Here we have only one HTML page. 
* The content is rendered on the client-side. 
* Every component is a react component. Even the entire page.
  ![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/mambdhnmvxblr5mkbh9g.jpeg)
* there is typically one `ReactDOM.render()` call
* more popular approach

### Multiple-page applications:

* We have multiple HTML pages
* content is rendered on server-side
* Here the entire page need not be made of react components.
  ![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/8ugqfrewn827f013xlvq.jpeg)
* There are multiple `ReactDOM.render()` calls per "widget"

## What we learned :

* some basics of react
* Single and Multiple page applications difference

That's it for this one. Next, I will be looking into the next-gen javascript features that react uses.

Course : [Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
