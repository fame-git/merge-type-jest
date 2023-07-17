# Run the test project

create project directory first

```sh
mkdir merge-sort-project
cd merge-sort-project
```

Open your desired text editor on the create folder then create `package.json` file

```sh
npm init -y
```

Install dependencies for development and test

```sh
npm i -D typescript
```
then install typescript compiler

```sh
npx tsc --init
```

in `tsconfig.json` file abovc the "complierOptions" line add `"include": ["./src/**/*"]` to tell compiler on the desired directory we want to compile, and `"exclude": ["node_modules"]` then uncomment the rootDir to `"rootDir": "./src", ` and also uncomment the outDir to `"outDir": "./out", `. Then, in package.json add dependency as below

```sh
...
"scripts": {
    "build": "tsc"
...
```

Install ts-jest for unit testing

```sh
npm i -D jest ts-jest @types/jest
```

then

```sh
npx ts-jest config:init
```

Then replace test dependency inside package.json with
```sh
...
"scripts": {
    ...
    "test": "jest"
  },
...
```

then test the function by run
```sh
npm run test
```