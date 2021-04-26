# generators
Generators for Begin apps


## Project structure
- src contains individual generators that are called by the wrapping command line utility

## Test approach
Running a generator test will execute a generator that will output temporary test output into a local to the project tmp directory that will be cleaned up after each test run.

## Contributing
- Each generator should be it's own file
- Each generator should have a matching fixture folder in ./test/fixtures
- Each generator should assert it's output against it's fixture
