---
path: vim/spell-check
date: 2020-08-10T16:41:50.261Z
title: Spell Checking in VIM
description: Built in spell checking in VIM
---
## Spell Checking in VIM

I recently discovered this neat feature that VIM have. So basically you can do a spell check on your document from within vim. You don't even need a plugin for this. It is a built in feature.

For this all you need is this command 
```
:set spell!
```

After running this command if everything goes well words that vim thinks are incorrectly spelled will be highlighted in some way. 

Now once the command is called, you can do certain things. And ofcourse vim has some nice keybinding for them.:

## Jump to highlighted word
You can jump to these highlighted words easily. 
  * go to next word `]s`
  * go to previous word `[s]`

## Correcct spelling 
To see the suggestions for correct spelling press `z=`. Then choose the number from shown list. Followed by enter.

## Good words and Wrong words
So vim for spell checking has a list of **Good words**. This list contains all the words that are regareded as spelled correctly. You can even add new words to this list. For this type `zg` and to undo this `zug`

Similarly vim has a **Wrong word** list. They are treated as misspelled. And again you can add new words to this list with `zw` and undo with `zuw`. So that from next time these words will be highlighted as well.

Note: Try not to keep a word in both good and wrong list. It is either good or bad; nohing in between.

