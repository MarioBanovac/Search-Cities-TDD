
<p align="center">
    <h1 align="center">Password-Validator-TDD</h1>
</p>

---

##  Overview

Search cities functionality implemented using TDD

---
***Business Requirements***

1. If the search text is fewer than 2 characters, then should return no results. (It is an optimization feature of the search functionality.)

2. If the search text is equal to or more than 2 characters, then it should return all the city names starting with the exact search text.
   For example for search text “Va”, the function should return Valencia and Vancouver

3. The search functionality should be case insensitive

4. The search functionality should work also when the search text is just a part of a city name.
  For example “ape” should return “Budapest” city

5. If the search text is a “*” (asterisk), then it should return all the city names.

###  Installation

1. Clone the repository:

```sh
git clone https://github.com/MarioBanovac/Password-Validator-TDD.git
```

2. Change to the project directory:

```sh
cd Search-Cities-TDD
```

3. Install the dependencies:

```sh
yarn install
```

###  Running tests

Use the following command to run tests in watch mode:

```sh
yarn test
```

