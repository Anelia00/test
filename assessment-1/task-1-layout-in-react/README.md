# Clone Task 1: Layout in React

This is my solution for **Web Dev II – Assessment 1, Clone Task 1**. It recreates the supplied Erased Tapes blog wireframe using React and CSS.

## How to run

1. Open this folder in Visual Studio Code.
2. Open a terminal in this folder.
3. Run `npm install` (the first time only).
4. Run `npm run dev`.
5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

To check the production build, run `npm run build`.

## How the project works

- `src/App.jsx` brings the page sections together.
- `src/components/` contains function-based React components for the header, article, album gallery, author, comments and footer.
- `src/styles.css` contains the layout, fonts, colours and responsive media queries.
- `public/assets/` contains the images provided for the assessment.

## Layout techniques

- **Flexbox:** header navigation, author section and social icons.
- **CSS Grid:** album gallery with a large featured cover and four smaller covers.
- **CSS columns:** three-column desktop article text, reducing to two on tablets and one on phones.
- **Media queries:** adjust the layout for tablets and mobile devices.

## Notes

The article text and images come from the supplied task assets. Social media icons link to the platforms' home pages because the brief does not specify individual accounts. Navigation links jump to sections on this page.

## Submission

Put this project's contents inside `assessment-1-clone-tasks/task-1-layout-in-react` in the official Web Dev II GitHub repository. Commit and push the source files. Do not commit `node_modules` or `dist`.
