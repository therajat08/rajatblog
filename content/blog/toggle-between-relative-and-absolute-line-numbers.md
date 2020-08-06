---
path: vim/relative-numbers
date: 2020-08-06T13:51:35.695Z
title: Toggle between relative and absolute line numbers
description: Learn to toggle between relative and absolute line numbers.
---
So in vim relative line numbers are very useful. It lets you quicky perform operations locally. But it makes sense to **not use** relative numbers in `insert mode`. Simply you already are on the line you want to edit.

For this,Put this in vimrc:
```
set number

autocmd InsertEnter * :set norelativenumber
autocmd InsertLeave * :set relativenumber 

set rnu
```

What you get:
![](https://ik.imagekit.io/18dkv5g43j/Blog/vim-relative-number/relative-toggle_NIGZi4xcL.gif)

Hope that was helpful!