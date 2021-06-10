# Salesforce Typescript Utility

**This package is under development and may change**

Utility package used to convert from Salesforce object structure (snake_case with prefix / suffix) to a more standardised camelCase.

## Installation

```bash
npm i sfdc-ts-utils
```

---

## Usage

Currently this package exposes two methods:

### `standardise`

This function accepts an object as input and returns an equivalent object where all keys are mapped under the following conditions:
| Input | Output | Notes|
| -- | --| -- |
| `Id` | `Id` | No change required |
| `CreatedById` | `CreatedById` | No change required |
| `custom_api_field__c` | `customApiField` | Removes the trailing suffix and converts to camelCase |
| `scoped__custom_api_field__c` | `customApiField` | Removes both prefix and suffix, then converts to camelCase |

**Important**: Supplying an object where two or more keys map to the same camelCase equivalent will throw an error.

### `apiKeyToCamelCase`

This function accepts a string as input and based on the above criteria will return a standardised camelCase string.

---

### Changelog

#### v1.0.0

Released: 10 June 2021

- Initial upload with one way conversion functions for converting Salesforce naming convention to camelCase.
