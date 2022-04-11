# CS855 - Habit Tracker
![Lines of code](https://img.shields.io/tokei/lines/github/AidanSommerfeld/CS855)
![GitHub top language](https://img.shields.io/github/languages/top/AidanSommerfeld/CS855)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE.md)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/AidanSommerfeld/CS855?include_prereleases)
![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/AidanSommerfeld/CS855)

![banner](https://github.com/AidanSommerfeld/CS855/blob/main/images/On%20Device/Banner.png)

## About
Habit Tracker is a reminders and task keeping app developed for Android that helps you keep your schedule and track your assignments, deadlines, and chores. Habit Tracker features daily and weekly overviews of tasks to let you know what's coming up, helping you to prioritize your time accordingly. The bright yellow accent was chosen as an energizing and motivating color.

### Reminder 
A reminder is a task that renews every day. Every reminder has a time it should be completed, and a title. It can fall into one of four categories: 
- Meals: any time you want to remember to eat during the day. It can be used for meals and snacks
- Water: the times you want to remember to drink water during the day
- Meds: reminders of when to take your medications
- Exercise: reminders to move, or workouts
Since reminders are daily tasks, they can only be edited during that day, and become unchangable at the start of the next day. 

### Task
A task is anything that has a deadline and can be completed over the course of one or many days. These show up in the daily tasks, and the weekly tasks screens. 

## Table of Contents
1. [Features](#features)
2. [Installation Instructions](#installation-instructions)
3. [Technical Stuff](#technical-stuff)
4. [What's Next](#whats-next)
5. [Known Bugs](#known-bugs)
6. [Manifest](#manifest)

## Features
![Screens](https://github.com/AidanSommerfeld/CS855/blob/main/images/On%20Device/BannerScreens.png)
<p align="center">
  <b>Habit Tracker main screens</b><br>
  Weekly - Daily - Reminders - Settings
</p>


----
<img align="right" height="475" src="https://github.com/AidanSommerfeld/CS855/blob/main/images/On%20Device/Weekly-Animation.gif"/>

### Weekly
The weekly page shows all of the [tasks](#task) that the user has set for the current calendar week.  The user has a few ways to interact with this page:

#### View and edit all weekly tasks
Each task that the user has created over the course of the calander week will appear here. Anything before the beginning of sunday this week, or the end of saturday this week will not show up on this page. The user can add new tasks, rename tasks, or delete tasks here. 

#### View the daily progress for each day of the week
Each day has a vertical progress bar. This shows the number of completed tasks for each day. When a user taps on this, they are taken to the history page. This page displays an overview consisting of the date, the number of tasks for the day, and a list of finished and unfinished tasks. On this page, the user can check or uncheck tasks, but they cannot edit the tasks. 

The example shows a user checking and unchecking weekly tasks, and viewing daily progress for April 10th.

----
### Daily

<img align="left" height="475" src="https://github.com/AidanSommerfeld/CS855/blob/main/images/On%20Device/Daily-Animation.gif"/>
The daily screen is the first screen that the user sees when they open the app. It shows all of the tasks that the user has up for the current day. In addition, it shows the progress towards the daily reminders in each category. The user can do the following: 

#### View and edit todays tasks
The user can create, edit, and delete tasks that occur today. When a user creates a new task, they choose a title and a day that it is due. They can choose to rename a task by using the edit button inline with the tasks heading. This changes the check boxes into an inline text input to change any of the task names. The saving is done automatically. As tasks are completed, the taskbar under todays date will update to show total completion. 

#### View and complete daily reminders
The user can interact with and complete daily reminders by tapping anywhere under the Reminders heading. This will bring the user to the daily reminders page, where they can check or uncheck their daily activities under each of the four categories. When the user returns to the daily page, the progress bars for each category will be updated to show the users progress. 

The example shows a user creating a new reminder. They give it a title, then select a date with the date picker. Then they check off their daily tasks, and complete some of their daily reminders. 

----
### Reminders

<img align="right" height="350" src="https://github.com/AidanSommerfeld/CS855/blob/main/images/On%20Device/Reminders-Animation.gif"/>
The reminders page is where the user is able to set up repeating reminders. These reminders are refreshed every day so that the user can keep track of their daily activities. Users can interact with this page in the following ways: 

#### Create new reminders
The user can create a new reminder in any of the four categories by pressing the corresponding plus icon. This will bring up a screen much like the task creator. In this screen the user can create a title for the reminder, and set the time that the reminder is supposed to be completed by. This will add a new reminder to the list. 

#### Edit or delete reminders
If the user selects an edit button for any of the four categories, they are able to type a new name for any of the tasks. This will update the name in the daily screen as well. The user can also change the time of these reminders by pressing the clock icon next to the delete button. This brings up the time picker for the user to select. If the user wants to delete the reminder, they can press the delete button. This will remove it from the list, as well as from the daily screen.

The example shows a user creating a new meal, then changing the title. 

----
### Settings
<img align="left" height="350" src="https://github.com/AidanSommerfeld/CS855/blob/main/images/On%20Device/Settings-Animation.gif"/>
The settings screen allows users to customize their experience a little more. There are two sets of options: 

#### Settings toggles
The user is able to toggle the theme, which changes the default dark theme to a light theme. Each color was specifically chosen in the light theme to provide a brighter experience while keeping the overall look and feel of the UI. <br>
The user is also able to toggle vibration. By default, the user will get haptic feedback when pressing the add or edit buttons. This makes the application more tactile, and gives interactions more weight. However, some users do not like this feedback, so there is the option to disable it. <br>
These settings are preserved when the application is closed. 

#### Delete all Data
The delete all data option wipes the local storage for the application. This is done to remove all saved settings, tasks, and reminders returning the application to its default state. Because this is a highly destructive action, the user must press and hold the delete all data button for 5 seconds. There is visual feedback of this action, as the background fills up as the user holds the button. 

The example shows the saved reminders. The user enters the settings and deletes all data. The reminders page is now empty.

## Installation Instructions

### Simple Download
For easiest installation, you can download the apk found [here](https://github.com/AidanSommerfeld/CS855/releases) directly onto your android device.
Once the file has been downloaded, open the application and follow the prompts on screen. 

### Compile Yourself
An alternative method is to build the source code yourself. To do this, you will need an expo account and [EAS](https://docs.expo.dev/eas/). To begin, simply run 

```npm install -g eas-cli```

Now with EAS installed, login to your expo account with ```eas login```. 

You can check if the login was successful by running 
```eas whoami```
which will return your username. 

Then, navigate to the directory with the source code, and enter the ```habit-tracker``` folder. 
Then, to build an apk run
```eas build -p android --profile preview```
This will build the apk online and give you a QR code to install it on your device. 
Alternitavely runing ```eas build``` will give you a ```.aab``` file for publishing on the app store. 

### Expo Snack
If you have Expo Go, the entire project is available as a snack [here](https://snack.expo.dev/@wensley/final-project). However, the application does not run on web, so you will need to use your own device or the android emulator. 

## Technical Stuff

### MVC
The application uses an MVC design pattern. React native is used for the view, and [Redux](https://redux.js.org/introduction/getting-started) is used for the Model and Controller. 

<p align="center">
  <img height="200" src="https://github.com/AidanSommerfeld/CS855/blob/main/images/On%20Device/MVC.png"/>
</p>

#### Model
The model is a JSON object that is managed by a Redux reducer. It is persistent thanks to the [Redux Persist](https://github.com/rt2zz/redux-persist) library. This ensures that the model is consistent even if the app is closed. 

#### View
Each screen is the view. When the user interacts with the UI, the view makes a function call to the Reducer requesting a change to the model. When the model is changed, the view is updated according to the change. 

#### Controller
The Redux reducer is the controller. It responds to function calls and modifies the model accordingly. The reducer has three primary types of operations: Create, Update, and Delete. 

### Main Packages
The main navigation in this project was done with [React Native Navigation](https://github.com/wix/react-native-navigation). There is both a drawer navigator and a tab navigator. The drawer navigator is used to move between the daily and weekly screens, while the drawer navigator is used to move to the settings and reminders screens. 

The way the data was managed in this project was through [Redux](https://redux.js.org/introduction/getting-started). This allowed for more complex data manipulation, and the ability to follow the MVC design pattern. 


## What's Next? 
### Notifications
One of the things that was planned at the beginning of this project but had not been completed is notifications. In the future, the reminders set will notify you so that you remember to do these things even while not actively using the app. This will greatly improve the usefulness of the app.

### Monthly Page
In addition to the daily and weekly pages, it would be useful to have a monthly view. This would allow the user to get a full picture of what they have in the coming month. This would allow the user to make more long term goals. 

### Task Ordering
In its current state, the application is little more than a digital dayplanner. In order to increase its usefulness and provide some real functionality, I would like to implement an algorithm that intelligently orders the tasks in order of importance. Additionally, I would like to automatically create short term daily goals when there is a long term goal like a final project. 
If there was a final project due in 2 months, the application would generate several goals each week related to this task. This would allow the user to stay focused on these long term goals by creating consistent related short term goals. Unfortunately this was out of the scope of this project, but I believe this would be useful to me in the future. 


## Known Bugs


## Manifest
