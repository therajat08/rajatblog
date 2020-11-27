---
path: vim/qutebrowser
date: 2020-11-27T13:19:05.750Z
title: qutebrowser - browser for vim fans
description: another vim like tool added to armory
---
## Qute browser

So I recently started using the browser called **Qute-Browser**. For someone like me who just loves vim-keybindings and like to use "vim like applications" this was a no brainer. But coming from 'traditional' browsers it was quiet different. It takes some time getting used to it, or rather i should say discovering how fast it can be from other browsers. 

So I have seen people quoting it as a browser for "power-users". Which is kinda true. Like vim it takes some time getting used to it. But i think for someone to stumble upon something like this, you definitely would have to be a vim user already. Cos once you get the taste of vim, there is no coming back. 

### How i discovered  it?
Well like any other case, i was feeling that i have to move around too much to work with my browser. So a "vim like browser" search it was. Already youtubers like Luke Smith and other linux enthusiast had videos on it. So i had to try it. 

### How is it different?
Well first of all as mentioned before it is vim-like so was feeling natural in my work flow. There are extensions for chrome and firefox like vimium that emulate vim-like behaviour. But they are not perfect. On the other hand Qute is made from the foundation like vim so again it feels more natural. 

### What you don't get?
Well it doesn't have like a webstore where you can go and install the extensions. But there are certainly scripts made by people who have similar needs so i looked for it and found alternative to some of my extension needs. But the philosophy of such applications is always to be as minimal as possible and fast. So with more power comes a little bit of inconvenience as well. 

### Will i completely replace my old browser?
I think no. Cos again sometimes due to various reasons I have to open firefox. But the more I use Qute the more painful it is. So i try to keep that usage as less as possible. 

### Basic usage
- Switching between tabs: `shift + j/k`
- going backward and forward: `shift + h/l`
- opening a url in current page: `o`
- opening a url in new page: `O`
- find in page: `/`
- book mark a page: `m` then provide a shortcut keyword
- opening a link : `f` followed by link hint
- go to top: `gg`
- go to bottom: `G`
- and other vim like keys...

### Customization
To make qute browser behave and look like the way you want. Two files need to be configured. Well only one if I want to do that from the browser only with commands like `bind`. Then `autoconfig.yml` which should be in `~/.config/qutebrowser` (depending on your environment). It is advised to configure this file from browser only. Cos even if you make changes straight into the file chances are that the browser will override it later. 
Second file is called `config.py`. I generated one from the browser. This file isn't touched by the browser, so changes are safe. 

#### What i recommend
I recommend using both `autoconfig.yml` and `config.py`. But mostly make changes in `config.py`. It is more flexible as well. And most of the solutions online require use of this file.  

### Some customization i have done(so far):
So i have integrated qute with pywal. With this integration the browser colorscheme can be made consistent with the wallpaper. 

#### What is pywal ?
It is a tool that can be used to create a consistent colorscheme for your system. Colorscheme is based on the wallpaper set. For more pywal.
This is how it looks now, with the inbuilt dark mode.

![]

For this just follow the instructions [here](https://gitlab.com/jjzmajic/qutewal) and give a star to the repository. 





