---
path: Vim
date: 2020-06-23T16:54:37.497Z
title: "Configure and Integrate YouCompleteMe and UltiSnips for vim "
description: Learn to configure these plugins for Vim (which can be a tedious task)
---
If you are planning to make vim as your new editor of choice or trying to use it more. You would want to have various IDE like features that the likes of VSCode and sublime provide. You would be searching for plugins. So through this post of mine i will try and help you setup two plugins that are very useful. And also their integration to make them work together. 

## [You Complete Me](https://github.com/ycm-core/YouCompleteMe)

This is a code completion or suggestion plugin(as the name might suggest). Code completion is a very essential part of a good editor. Good thing that vim provides you with various options to customise the way you want it. Installing and configuring this plugin can be quiet tricky (I certainly found it).

## [UltiSnips](https://github.com/SirVer/ultisnips/blob/master/doc/UltiSnips.txt)

This plugin is used to create you own snippets or use well known snippet library like [vim-snippets](https://github.com/honza/vim-snippets).

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/hyl6nurksij7vuhh0cph.gif)

### Which Plugin manage to use?

So there are various plugin manager out there. I currently am using [vim-plug](https://github.com/junegunn/vim-plug). And for this post i will be using the same. 

If you are new to vim-plug. Here is how you get started:

* To install vim-plug you can refer to the [documentation](https://github.com/junegunn/vim-plug#installation)

  * For unix vim users:

`curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vimplug/master/plug.vim`

* usage after installation:

  * So for whichever plugin you want to install, just go to its github repo and copy the "username/repo_name" from URL.

    * for example: the url of UltiSnip is: https://github.com/SirVer/ultisnips
    * just copy: SirVer/ultisnips
  * Now go to your vimrc:

    * make a block of code like:

      ```
      call plug#begin('~/.vim/plugged')

      " the plugin need to be specified here

      call plug#end()
      ```
    * Now simply put the plugin info in between that you want to install in format: `Plug "username/repo_name"`

      ```
      call plug#begin('~/.vim/plugged')

      Plug "SirVer/ultisnips" 

      call plug#end()
      ```
    * Now save your vimrc and reload. 
    * Now install the plugin by using `:PlugInstall` in command mode
    * Plug should now be installed. It is that simple to install a plugin. Some plugins do require more lines of code to be placed in addition to what we did but refer to the documentation for the same.

### YouCompleteMe and UltiSnip installation:

* Put these lines of commands in you vimrc:

  ```
  call plug#begin('~/.vim/plugged')

  "below function is needed for ycm:

           function! BuildYCM(info)
           if a:info.status == 'installed' || a:info.force
              !./install.py
           endif
         endfunction

        Plug 'ycm-core/YouCompleteMe', { 'do': function('BuildYCM') }

   " For UltiSnip:
        
         Plug "SirVer/ultisnips" 
  call plug#end()
  ```

  * Now simple do `:PlugInstall` in vim

Now for the installation of YCM, it can take like 10-15 minutes depending on your internet connection because the repository is like 400+ mb in size. UltiSnip should be working by now. However for YCM we need to do some more work.

#### For YCM

* You will need some packages to configure YCM. For them:
  `sudo apt-get install build-essential cmake python-dev python3-dev`
* Now go to the directory wher YCM repository was cloned. In some cases it is here
  `cd ~/.vim/bundle/YouCompleteMe`
* After going to the YCM folder, we need some configuration for c-family languages.
  put  this in terminal:
  `./install.py --clang-completer`

Configuration for c-family isn't complete. For more go [here](https://github.com/ycm-core/YouCompleteMe#c-family-semantic-completion)

* Now you need to edit or create `.ycm_extra_conf.py`
  Inside you need to put following lines of code:

```python
def FlagsForFile( filename, **kwargs ):
  return {
    'flags': [ '-x', 'c++', '-Wall', '-Wextra', '-Werror' ],
  }
```

Ensure that the<ins> indentation is accurate as per python rules.</ins>

* Now go to you vimrc and add following line:

```
let g:ycm_global_ycm_extra_conf = '~/.vim/bundle/YouCompleteMe/.ycm_extra_conf.py'
```

This will basically tell vim where your `.ycm_extra_conf.py` file is. Again<ins> make sure the file path defined is accurate</ins>.

Now everything should be working just fine. However if you see following errors:

* `No .ycm_extra_conf.py file detected.`

  * Make sure the file path of `.ycm_extra_conf.py` is well defined in vimrc and it is edited for c-family.
* `The ycmd server SHUT DOWN (restart with :YcmRestartServer)`

  * Make sure you installed the essential packages mentioned above.

### UltiSnip usage

To make you own snippets:

* use `:UltiSnipsEdit` in vim
* now make a templete using format:

  *

  ```
  snippet <snippet-name> "description"
   snippet body
  endsnippet
  ```

### YCM and UltiSnips integration

By default the trigger for ultisnip is `<tab>`. However with YCM alongside you need to change the triggers. For this add following to you vimrc:

```
" Trigger configuration. Do not use <tab> if you use YouCompleteMe.
let g:UltiSnipsExpandTrigger="<S-t>"
let g:UltiSnipsJumpForwardTrigger="<S-f>"
let g:UltiSnipsJumpBackwardTrigger="<S-b>"
```

So as you can see the trigger now is `shift+t`. Change it as per convenience.
At this point the two plugins should be working just fine. 

*I hope this post was useful in your vim journey. Any feedback is appreciated. If there are any  mistakes or suggestions please leave a comment.*

<span>Cover Photo by <a href="https://unsplash.com/@pankajpatel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Pankaj Patel</a> on <a href="/s/photos/editor?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>