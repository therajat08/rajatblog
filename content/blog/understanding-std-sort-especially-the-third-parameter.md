---
path: cpp
date: 2020-06-15T16:58:55.086Z
title: Understanding std::sort() (Especially the third parameter)
description: sort() is a function used to sort arrays and strings. Learn how to use it.
---
This is a function quite often used to sort vector, strings or arrays. Here i will try to explain how we can use it. What parameters it takes. Especially the third parameter which bugged me a lot. 

  The basic functionality is very simple. That is it sorts elements in ascending or descending order. However it gets a little tricky when we consider its third parameter(which is discussed later).

### Syntax:

```cpp
sort(first-iterator, second-iterator, comparator-function);
```

  The third parameter is optional. This function doesn't return anything or is `void` in nature. It simply sorts a list. 

  Example of how it works with vectors:

```cpp
vector<int> vec = {1,6,2,9,10,4};

sort(vec.begin(),vec.end());

// vec now looks like: 1 2 4 6 9 10 
```

  Similarly if we apply it on a vector of string it sorts it in alphabetical order.

```cpp
vector<string> s = {"Abe","Zac","Mac"};

sort(s.begin(),s.end());

// s now looks like: Abe Mac Zac
```

  The first two parameter are pointers indicating where to begin sorting from and till what point. <ins>However for sorting, last element isn't considered</ins>. To understand this consider;

```cpp
vector<int> vec = {1,6,2,9,10,4,15,11};

sort(vec.begin(),vec.begin()+4);

// vec now looks like: 1 2 6 9 10 4 15 11
// sorted part:        ^     ^
```

  `vec.begin()+4` indicates that sorting has to be done from index 0 to 3 (not last i.e. 4). 

## Third parameter:

  This parameter is basically a comparator function that tells <ins>how sorting has to be performed</ins>. For example if we want the result to be in descending order. Further if we want to define sorting for more complicated data types like struct we need it.
  This function takes two parameters. Note that the values to these parameters are provided by sort function internally. We don't need to worry about what values to pass. It is `bool` type hence it will return `true` or `false` only. Lets try to understand it with an example:

```cpp
//defining comp for descending order sorting
bool comp(int a, int b)
{
  return a > b;
}


vector<int> vec = {1,6,2,9,10,4,15,11};

sort(vec.begin(),vec.end(),comp);

// vec now looks like: 15 11 10 9 6 4 2 1 
// now sorted in descending order
```

### How did we use comp ?

* First note that the two parameters of comp are of the type int which is type of vector we are using
* From the function body we can tell that `sort` while sorting gives a and b two values then looks into its definition to do the sorting. In other words it defines the rules of comparing two values of the vector `vec`.

  Another example for better understanding. 

  Suppose we want to sort a vector of string. This vector contains numbers in string vector type. First we will use sort() without comp and then with comp to see the difference.

```cpp
//without comp
vector<string> unsorted = {
                    "6",
                    "31415926535897932384626433832795",
                    "1",
                    "3",
                    "10",
                    "3",
                    "5",
                    "15"
                  };
// sorting
sort(unsorted.begin(),unsorted.end());

// now the vector looks like:
//   1
//   10
//   15
//   3
//   3
//   31415926535897932384626433832795
//   5
```

 Now here we can observe that the strings are sorted but only in accordance with the fist letter of every string. So clearly the comparison is done on the basis of first character of every string. This comparison works well when we are trying to arrange some strings in alphabetical order, but here we have numeric values. 

 To make this working we need to write the comp function.

```cpp
 //with comp function
 
 bool comp(string s1, string s2)
 {
   if(s1.size() == s2.size())
   {
     return s1 < s2;
   }  
   else
   {
     return s1.size() < s2.size();
   }
 }
 
 vector<string> unsorted = {
                     "6",
                     "31415926535897932384626433832795",
                     "1",
                     "3",
                     "10",
                     "3",
                     "5",
                     "15"
                   };
// sorting
sort(unsorted.begin(),unsorted.end(),comp);
 
// now the vector looks like:
//   1
//   3
//   3
//   5
//   10
//   15
//   31415926535897932384626433832795
```

  To understand how above code is working we need to know what was the logic behind implementation of comp.
  So here to compare two strings :

* If two strings have same size, we simply need to compare two strings. This is the same way comparison was done in previous code. 

  * ```cpp
       if(s1.size() == s2.size())
       {
         return s1 < s2;
       }   
    ```
* And for string with different sizes, it is obvious that the one with greater size will be having higher value.

  * ```cpp
        else
        {
           return s1.size() < s2.size();
        }
    ```
* Clearly this type of technique can be used for sorting big numbers.

This is a [problem(Big-Sorting)](https://www.hackerrank.com/challenges/big-sorting/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign) on HackerRank, you can go there and check usage of sort to have some practice.

### Using sort with struct

sort can also be used with self defined struct. To understand consider:

```cpp
// Here we want to sort the various intervals defined in main function

struct Interval{
  int start, end;
};

bool comp(Interval i1, Interval i2)
{
  return i1.start < i2.start;
}

int main()
{
  Interval ar[] = { {2,4}, {2,5}, {5,1}, {3,4}, {15,34}, {10,12} };
  
  sort(arr, arr + n, comp);
  
  // now ar[] intervals looks like:
  // {2,4}, {2,5}, {3,4}, {5,1}, {10,12}, {15,34}
  return 0;
}
```

Here we wanted to sort according to the start of every interval no matter what the order of end of interval. 
Things to note:

* to pass array for sorting we used a differnt way. Simply because the name of the array itself acts as a pointer/iterator.

  * `sort(arr, arr + n, comp);`
* comp parameter types are same as type of the array values i.e `Interval` type
* we are only accessing first part of interval for every comparison

  * `return i1.start < i2.start;`

*I hope this article was helpful. If there is any mistake you found or something to add please do tell.*

Cover Photo by Zdeněk Macháček on Unsplash

Another useful article: [Beginners guide to the std::sort()](http://www.cplusplus.com/articles/NhA0RXSz/)

## THE END