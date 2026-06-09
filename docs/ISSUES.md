# Issue 1: App Navigation Skeleton & Empty Home State

## What to build
Set up the foundational React Navigation stack with `@react-navigation/native-stack`. Create three empty screens: `HomeScreen`, `FormScreen`, and `DetailScreen`. The `HomeScreen` should display a placeholder text ("Belum ada tugas") indicating an empty state. Verify that basic navigation between these screens is possible.

## Acceptance criteria
- [ ] `App.js` wraps the app in `NavigationContainer` and `Stack.Navigator`.
- [ ] `HomeScreen`, `FormScreen`, and `DetailScreen` components are created.
- [ ] `HomeScreen` renders "Belum ada tugas" text.
- [ ] Can navigate from Home to Form and Home to Detail using dummy buttons.

## Blocked by
None - can start immediately.
- - -

# Issue 2: View Static Task List (Home Screen)

## Parent
Issue 1

## What to build
Create a reusable `TaskCard` component to display a single task. Hardcode a small array of dummy tasks in the `HomeScreen` state and render them using a `FlatList`. Each task should show its title, category, and status.

## Acceptance criteria
- [ ] `TaskCard` component is created and styled using Flexbox.
- [ ] `HomeScreen` has a local state initialized with at least 2 dummy tasks.
- [ ] `FlatList` on `HomeScreen` renders a `TaskCard` for each task.

## Blocked by
Issue 1
- - -

# Issue 3: Add Task Flow (Happy Path)

## Parent
Issue 2

## What to build
Build the input UI on the `FormScreen` (Title, Description, Category). Capture the input via controlled components. Upon submission, navigate back to the `HomeScreen` and pass the new task data via `route.params`. The `HomeScreen` must detect this parameter via `useEffect` and append the new task to its list.

## Acceptance criteria
- [ ] `FormScreen` has text inputs for Title, Description, and Category.
- [ ] Submit button triggers navigation back to Home with task data.
- [ ] `HomeScreen` listens for `route.params?.newTask` and updates its state array.
- [ ] New task visually appears at the bottom of the list.

## Blocked by
Issue 2
- - -

# Issue 4: Form Validation & Error Handling (Deep Module)

## Parent
Issue 3

## What to build
Create a pure function module `src/utils/validationUtils.js` to validate task titles (min 3 chars) and descriptions (min 10 chars). Write Jest Unit Tests for this module. Integrate it into `FormScreen` so that submission is blocked and error messages are displayed if constraints are not met.

## Acceptance criteria
- [ ] `validationUtils.js` exports validation functions.
- [ ] `validationUtils.test.js` completely tests the validation logic.
- [ ] `FormScreen` calls validation before sending params to Home.
- [ ] Error messages appear under respective inputs on validation failure.

## Blocked by
Issue 3
- - -

# Issue 5: View Task Details

## Parent
Issue 2

## What to build
Update the `TaskCard` press action to navigate to `DetailScreen`, passing the task ID or task object. `DetailScreen` should display the complete details of the task. Add a "Kembali" button to return to the `HomeScreen`.

## Acceptance criteria
- [ ] Pressing a `TaskCard` navigates to `DetailScreen` with data.
- [ ] `DetailScreen` shows full Title, Description, Category, and Status.
- [ ] "Kembali" button triggers `navigation.goBack()`.

## Blocked by
Issue 2
- - -

# Issue 6: Toggle Task Status (Belum / Selesai)

## Parent
Issue 2

## What to build
Add a button on the `TaskCard` to toggle the task's status between "Selesai" and "Belum". Update the `HomeScreen` state when this button is pressed. Create a pure function in `src/utils/taskUtils.js` to handle the status mutation.

## Acceptance criteria
- [ ] `TaskCard` contains a status toggle button.
- [ ] Pressing the button updates the task status in `HomeScreen` state.
- [ ] UI correctly reflects the new status instantly.

## Blocked by
Issue 2
- - -

# Issue 7: Delete Task Flow

## Parent
Issue 5

## What to build
Add a "Hapus Tugas" button on the `DetailScreen`. When pressed, it navigates back to `HomeScreen` passing the `deletedTaskId` via `route.params`. The `HomeScreen` must detect this parameter, filter out the deleted task from its state, and re-render.

## Acceptance criteria
- [ ] "Hapus Tugas" button exists on `DetailScreen`.
- [ ] Pressing it navigates to Home passing `deletedTaskId`.
- [ ] `HomeScreen`'s `useEffect` catches the ID and removes the task from the array.
- [ ] The deleted task disappears from the `FlatList`.

## Blocked by
Issue 5
- - -

# Issue 8: Filter Tasks by Status

## Parent
Issue 6

## What to build
Create a pure function in `src/utils/taskUtils.js` to filter tasks based on status ("Semua", "Belum", "Selesai"). Write Jest Unit Tests for this function. Add a row of filter buttons/tabs on the `HomeScreen` to toggle the active filter and update the `FlatList` data accordingly.

## Acceptance criteria
- [ ] `taskUtils.js` exports a filtering function.
- [ ] `taskUtils.test.js` tests the filtering function.
- [ ] `HomeScreen` has 3 filter buttons (Semua, Belum, Selesai).
- [ ] Clicking a filter button updates the displayed list accurately.

## Blocked by
Issue 6
