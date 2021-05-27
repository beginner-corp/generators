# Arc-gen-beta

This is an experimental project to create a scaffolding tool for Architect apps. We welcome you to try it, find bugs, and report them to the issue tracker.

This cli tool was created to save users time in creating basic app templates from the command line. Currently there are three example apps that you can create: auth, mvc, and static


## Installation

Use npm to install arc-gen-beta

```bash
npm i -g arc-gen-beta
```

## Usage

```bash
arc-gen-beta mvc
arc-gen-beta auth
arc-gen-beta static
```

`mvc` will create a template blog that allows users to perform CRUDL operations on blog posts
`auth` will create a template app with an email login and registration system
`static` will create a template app of a single `index.html` file that represents a static site.

## Project structure
- src contains individual generators that are called by the wrapping command line utility

## Test approach
Running a generator test will execute a generator that will output temporary test output into a local to the project tmp directory that will be cleaned up after each test run.

## Contributing
- Each generator should be it's own file
- Each generator should have a matching fixture folder in ./test/fixtures
- Each generator should assert it's output against it's fixture

Pull requests are welcome! Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)