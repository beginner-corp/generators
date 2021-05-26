# Arc-gen-beta

This is an experimental project to create a scaffolding tool for Architect apps. We welcome you to try it, find bugs, and report them to the issue tracker.

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

## Project structure
- src contains individual generators that are called by the wrapping command line utility

## Test approach
Running a generator test will execute a generator that will output temporary test output into a local to the project tmp directory that will be cleaned up after each test run.

## Contributing
- Each generator should be it's own file
- Each generator should have a matching fixture folder in ./test/fixtures
- Each generator should assert it's output against it's fixture

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)