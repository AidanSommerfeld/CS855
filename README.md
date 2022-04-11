# CS855 - Habit Tracker
![Lines of code](https://img.shields.io/tokei/lines/github/AidanSommerfeld/CS855)
![GitHub top language](https://img.shields.io/github/languages/top/AidanSommerfeld/CS855)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE.md)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/AidanSommerfeld/CS855?include_prereleases)
![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/AidanSommerfeld/CS855)

![banner](https://github.com/AidanSommerfeld/CS855/blob/main/images/On%20Device/Banner.png)

## About
Habit Tracker is a reminders and task keeping app developed for Android that helps you keep your schedule and track your assignments, deadlines, and chores. Habit Tracker features daily and weekly overviews of tasks to let you know what's coming up, helping you to prioritize your time accordingly.

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

<img align="right" height="475" src="https://github.com/AidanSommerfeld/CS855/blob/main/images/On%20Device/Weekly-Animation.gif"/>

### Weekly
The weekly page shows all of the [tasks](#task) that the user has set for the current calendar week.  The user has a few ways to interact with this page:

#### View and edit all weekly tasks
Each task that the user has created over the course of the calander week will appear here. Anything before the beginning of sunday this week, or the end of saturday this week will not show up on this page. The user can add new tasks, rename tasks, or delete tasks here. 

#### View the daily progress for each day of the week
Each day has a vertical progress bar. This shows the number of completed tasks for each day. When a user taps on this, they are taken to the history page. This page displays an overview consisting of the date, the number of tasks for the day, and a list of finished and unfinished tasks. On this page, the user can check or uncheck tasks, but they cannot edit the tasks. 

The example shows a user checking and unchecking weekly tasks, and viewing daily progress.

### Daily
<img align="left" height="475" src="https://github.com/AidanSommerfeld/CS855/blob/main/images/On%20Device/Daily-Animation.gif"/>
The daily screen is the first screen that the user sees when they open the app. It shows all of the tasks that the user has up for the current day. In addition, it shows the progress towards the daily reminders in each category. The user can do the following: 

#### View and edit todays tasks
The user can create, edit, and delete tasks that occur today. When a user creates a new task, they choose a title and a day that it is due. They can choose to rename a task by using the edit button inline with the tasks heading. This changes the check boxes into an inline text input to change any of the task names. The saving is done automatically. As tasks are completed, the taskbar under todays date will update to show total completion. 

#### View and complete daily reminders
The user can interact with and complete daily reminders by tapping anywhere under the Reminders heading. This will bring the user to the daily reminders page, where they can check or uncheck their daily activities under each of the four categories. When the user returns to the daily page, the progress bars for each category will be updated to show the users progress. 

The example shows a user creating a new reminder. They give it a title, then select a date with the date picker. Then they check off their daily tasks, and complete some of their daily reminders. 

### Reminders
### Settings

## Installation Instructions

## Technical Stuff

## What's Next? 

## Known Bugs

## Manifest
