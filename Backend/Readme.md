### Changes by @aayushyadavz

- Installed Tailwind CSS using `npm install tailwindcss postcss autoprefixer`
- Genrated Tailwind CSS files using `npx tailwindcss init`
- Modified Tailwind CSS file with `content: ["./views/**/*.ejs"]`
- Created `index.css` file
- Runned `npx tailwindcss -i ./index.css -o ./public/output.css --watch` to compile CSS
- Modified `app.js`
- Removed cdn and linked `output.css` file
- In your `index.ejs` gave `body` to display flex with items-center, justify-center & gave the parent div items-center removing content-center with the div taking full height, width of the body.
