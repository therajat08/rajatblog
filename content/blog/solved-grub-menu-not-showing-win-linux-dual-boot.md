---
path: linux/rub-problems
date: 2020-12-12T07:27:43.012Z
title: "[solved] grub menu not showing win-linux dual boot"
description: In this post i put together what i learned after dual booting and
  how to solve grub problems
---

This a problem that is frequently encountered by people who wish to dual
boot more than one OS. Especially while dual booting with Windows. Unlike Linux distros which automatically detect what os or efi entries are on the system, windows just doesn't even care about detecting and then giving them a place in its boot menu. You have to manually do some changes to be able to access other Linux OS on system. 

## Scenario 1: You installed windows first and then Linux
Well this Scenario doesn't lead to any problems in most of the cases. Cos Linux handles things decently. Now the bootmenu loading should be grub (as expected) and ideally you want to see grub as bootmenu, simply cos of the way you can customize or configure it. 

## Scenario 2: Installed windows after Linux or windows updated its bootmgr while updating or windows messed it up again.
Now all you have to do is open cmd prompt using admin privileges in win and run this command. 

```
bcdedit /set {bootmgr} path \EFI\ubuntu\grubx64.efi
```

What this will do is put an entry for 'ubuntu' in windows bootmgr
* This is only good if the Linux distro is ubuntu. 
For others it will be a little different. Lets say you have manjaro instead. You may want to just replace ubuntu with manjaro. But it is better to check what exactly is the path name for your beloved disto.

For this, one way is to open BIOS menu and open **Select an UEFI file as trusted for executing** (or something similar to see UEFI files). Here you can see your path to grubx64.efi. In this way whether you are dual booting or triple booting. You can load the grub menu of your liking.  


* disable secure boot if you can't see it or the option is disabled in BIOS menu. 

Images below suggest what it should look like. 

![](https://ik.imagekit.io/18dkv5g43j/Blog/grub_menu/No_Bootable_Device_Found_2_kGGzYy3HwTU.jpg)

![](https://ik.imagekit.io/18dkv5g43j/Blog/grub_menu/No_Bootable_Device_Found_3_-JQpJbhAGS98.jpg)


![](https://ik.imagekit.io/18dkv5g43j/Blog/grub_menu/No_Bootable_Device_Found_4_ytRQuR5ezmG.jpg)

![](https://ik.imagekit.io/18dkv5g43j/Blog/grub_menu/No_Bootable_Device_Found_5_8opiDyH-0Nx0.jpg)


![](https://ik.imagekit.io/18dkv5g43j/Blog/grub_menu/No_Bootable_Device_Found_6_-UOdM9Z1JE8G.jpg)

images taken from : [here](https://i2.wp.com/itsfoss.com/wp-content/uploads/2015/08/No_Bootable_Device_Found_3.jpg?ssl=1)

You only need to see what the path looks like. Now just edit the snippet above accordingly(and run in windows). For example for manjaro i had to make it:


 ```
 bcdedit /set {bootmgr} path \EFI\Manjaro\grubx64.efi
 ```

 Restart and things should work fine.
