# project-management-app
**1. Task:** https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/project-management-system-EN.md

**2. App screenshot:** ![alexborisewich github io_project-management-app_](https://user-images.githubusercontent.com/95849918/205718068-1254f12c-ca1e-42c2-beb2-1f95ed367266.png)

**3. Deploy:** https://alexborisewich.github.io/project-management-app/

**4. Done:** 06.12.22 (deadline 06.12.22)

**5. Score:** 52 / 60

### Requirements

## Welcome route - *7 points*
- [x] The welcome page should contain general information about the developer, project, and course. *__1 point__*
- [x] In the upper right corner there are 2 buttons: Sign In and Sign Up. *__1 point__*
- [x] If login token is valid and unexpired, change buttons Sign In and Sign Up on "Go to Main Page" button. *__2 points__*
- [x] When the token expires - the user should be redirected to the "Welcome page" automatically. *__2 points__*
- [x] Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form. *__1 point__*
## Sign In / Sign Up - *8 points*
- [x] Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be *__2 points__*
- [x] Form fields should be implemented according to the backend API. Validation should be implemented. *__4 points__*
- [x] Upon successful login, the user should be redirected to "Main route" *__1 point__*
- [x] If user already logged in and he try to reach this routes - he should be redirected to Main route. *__1 point__*
## Main route - *8 points*
- [x] Board creation functionality *__2 points__*
- [x] Displays all created boards as a list/grid *__1 point__*
- [x] Each board in the list is displayed with a small preview of available information (title, description, etc). By clicking an element the user navigates to the board item (Board route). There's also a button for board deletion. *__1 point__*
- [x] When trying to delete the board, we should receive a confirmation modal. The confirmation modal must be a generic component (one for the entire application). *__1 points__*
- [x] The user profile editing functionality is implemented. *__3 points__*
## Board route - *26 points*
- [x] Button for column creation is displayed 1 point
- [x] If a board contains at least one column - a button for task creation is displayed/become enabled as well 1 points
- [x] A modal windows with forms is displayed for column and task creations 3 points
- [x] A vertical scrollbar is displayed in the column when overflowing with the number of column tasks 2 points
- [x] The page itself on the current route doesn't have a vertical scrollbar 1 points
- [x] With the help of drag-n-drop, we can swap columns. 3 points
- [x] With the help of drag-n-drop, we can change the order of tasks within a column. 3 points
- [x] With the help of drag-n-drop, we can change the task belonging to the column. 5 points
- [ ] The functionality of viewing and editing of the task has been implemented. 3 points
- [ ] The task must have a delete task button. On click: confirmation modal -> delete. 1 points
- [ ] At the top of the column should be Title. When you click on it, it should become an input, with Submit and Cancel buttons near it. After entering text in the input and clicking Submit - the Title of the column should change. 2 points
- [x] The column should have a delete button. By clicking -> confirmation modal -> when approving -> deleting. 1 points
## General requirements - *3 points or 11 points*
- [x] Backend error handling - (Not found, unhandled rejection, etc) should be performed in a user-friendly way (toast, pop-up or anything else you implement). 4 points
- [x] Localization 1 point
- [x] Backend is deployed and publicly available 2 points
- [x] Sticky header 2 points
- [ ] Extra scope same complexity as Global search 2 points
