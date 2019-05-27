# Interstitial Engine™ v2.0

by Constantinos M. Demetriadis

## Advanced features include:

- Less Hassle to Setup
- Debugging Option
- Window Type Seletion (`PopUp` or `PopUnder`)
- Window Parameter Setup (`Width`, `Height`, `Name`, `URL`)
- Set `ExpireFirst` & `ExpireAll` variables
- Dynamic Cookie Naming (no more spelling mistakes)

## Setting up the code

### Step 1:

Edit all the Pop Window details.

- `popupWidth`: The width of the new window in pixels
- `popupHeight`: The height of the new window in pixels
- `popupName`: The name of the new window
- `popupType`: The type of window to spawn. Can be either PopUp or PopUnder (1: PopUnder & 2: PopUp)
- `popupURL`: The URL to open in the new window.

### Step 2:
Name the Interstitial Campaign

`CampaignName`: A unique name that refers to each campaign uniquley. This name is used to produce the cookies which are responsible for popping the window.

### Step 3:

Set the delay time (in hours) for the second window to show.

`SecondPlayInHours`: The amount of hours which must pass before popping another window with our interstitial.

### Step 4:

`ExpireFirst`: Set the delay time (in hours) for the script to reset and start over again.

`ExpireAllInHours`: The amount of hours which must pass before reseting the complete script, and let it run all over again.
	
© copyright 2000-2003 Constantinos M. Demetriadis, all rights reserved.