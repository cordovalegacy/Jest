##### F.I.R.S.T Principles

## Fast
## Independent
## Repeatable
## Self-Validating
## Thorough


# Unit tests should be fast. Faster tests => faster feedback.

# Tests should be isolated from others units. A Unit test should not share state with other units.

# Test result should be the same everytime with the same input. Can use mock values to do this.

# After the test is finished it should either be passing or failing

# Cover all the cases/paths/scenarios. Happy path, sad path, edge cases.


##### Aliases

### Properties
## only - use this when you want to only test one thing in the test suite
## skip - same use case as only
## todo - you can use this to make a skeleton of your test (arrange first)
## concurrent - runs the tests async

### Tests
## it
## test
## xit - same as it.skip

### What are test doubles?
## Dummy Objects - passed around but not used
## Fakes - simplifies a working implementation by taking a testing shortcut
## Mocks - preprogrammed with expectations
## Spies - tracks information about how a unit is called (similar to mocks)