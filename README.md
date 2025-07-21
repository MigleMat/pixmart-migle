# PixMart

## First install

Run `npm ci` after first installation to install dependencies
Run `npm i` to install dependencies

## Commands

Run these commands to get something in your public folder

- `npm start` will generate site
- `npm run dev` will generate site, show lint errors, watch files and re-run build on change

Separate commands per task:

- `npx gulp` will build all the static
- `npx gulp clean` will clean up your public folder
- `npx gulp styles` will process your scss styles with entry points at `src/styles/pages` into css files at \* `public/css`
- `npx gulp markup` will process your nunjucks templates with entry points at `src/templates/pages` into html files in `public` folder
- `npx gulp images` will convert & compress images into webp and avif, make 1x less images from your 2x images and put into `public/img` folder
- `npx gulp sprite` will combine svg files from `src/images/sprite` folder into `public/sprite.svg` file

## Flags

You may run gulp commands with flags, like this: `npx gulp --lint --min` (two minuses before each of them, separated by space)

Available flags:

- `--lint` will run linters for runned gulp tasks
- `--min` will minify styles (images will be always converted and compressed)
- `--debug` will show extra logs in the console. only for build debugging purposes
- `--open` will open your `index.html` in the default browser after starting the local server

## Credits

Student:

Mentor:
