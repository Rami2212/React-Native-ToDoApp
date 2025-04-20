# ToDoApp - React Native Todo List App

A feature-rich task management application built with React Native, TypeScript, and Zustand for state management. The app follows Material Design principles with custom styling and uses persistent storage to save your tasks locally.

## Demo Video

[To Do List App Demo]()

## Figma Link Used

[To Do List App Figma Design]()

https://www.figma.com/design/0voUh3g2fDdGMbKNibqygj/To-Do-List--Community

## Features

- ✅ Add new tasks with custom titles and descriptions
- ✅ Mark tasks as complete with visual indicators
- ✅ Delete tasks individually
- ✅ Edit existing tasks
- ✅ Share tasks with others (Partially implemented)
- ✅ Persistent storage using AsyncStorage
- ✅ Clean and intuitive UI following Material Design principles
- ✅ Custom fonts for enhanced visual appeal

## Folder Structure

```
src/
├── components/
│   ├── ActionButton.tsx
│   ├── AddTaskButton.tsx
│   ├── CompletedCheckbox.tsx
│   ├── CustomButton.tsx
│   ├── CustomInput.tsx
│   ├── DeleteButton.tsx
│   ├── DeleteConfirmation.tsx
│   ├── EditTaskModal.tsx
│   ├── EmptyState.tsx
│   ├── ShareTaskModal.tsx
│   ├── SocialMediaIcon.tsx
│   ├── TaskActions.tsx
│   ├── TaskInput.tsx
│   ├── TaskItem.tsx
│   └── TaskList.tsx
├── constants/
│   ├── colors.ts
│   └── styles.ts
├── hooks/
│   └── useTaskStore.ts
├── screens/
│   └── TaskScreen.tsx
├── store/
│   └── taskStore.ts
│── App.tsx
└── index.js

```

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Rami2212/React-Native-ToDoApp.git
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Install pods (iOS only)

```bash
cd ios
pod install
cd ..
```

### 4. Start the Metro bundler

```bash
npm start
# or
yarn start
```

## Running the App

### Android

```bash
npm run android
# or
react-native run-android
# or
yarn android
```

### iOS (macOS only)

```bash
npm run ios
# or
yarn ios
```

## Custom Fonts

This project uses custom fonts for enhanced visual appeal. The fonts are located in the `assets/fonts` directory and are loaded using React Native's font loading mechanism.

## State Management

The app uses Zustand for state management, with the store defined in `src/store/taskStore.ts` and accessible via the custom hook `src/hooks/useTaskStore.ts`.

## Persistent Storage

Tasks are saved locally using AsyncStorage, ensuring that your data persists between app sessions.

