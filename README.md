# Bauer Xcel Code Test

If you have any issues, questions or improvement suggestions please contact us by emailing
codetest@bauerxcel.com.

* Note: please do not share this test or your solution with anyone. If you decide to
put it on github via fork or import, please do so in a private repository.

### Requirements

 - This test is not timed, take as long as you need.
 - You may not use ANY third party libraries in your solution, with the exception of testing libraries.
 - You may complete the test in the programming language of your choice.
 - Please tell us what language you used to implement your solution.
 - Please submit your solution as a zip file.

### Assessment

- Your code will be assessed on the following:
    - Design and how you separate responsibilities
    - Correctness of output
    - Code quality metrics such as cleanliness, readability, maintainability and simplicity.
    - Test quality and maintainability.
    - Effective use of version control.
- References for what we consider to be good examples of cleanliness, readability, maintainability and simplicity:
Sandi Metz"s ["Practial Object Oriented Design in Ruby"](http://www.poodr.com/) and
[related code samples](https://github.com/skmetz/poodr/)

### Running Your Solution

- Please tell us how to execute your program, including any system setup, and how the results will be outputed for verification purposes. Clear communication is important to us and we expect to be able to easily follow your instructions.
- Please ensure that any automated tests you submit can be executed easily and successfully (hint: use a build tool).

### Anonymize Your Solution

All submitted code tests will be anonymized before they are given to our code test graders. It is important that you do not add your name, Github profile or any other identifying information to any file you submit as a part of the solution (i.e. nothing in the submitted ZIP file is to identify you). We've setup local config for this repo to make all commits anonymous so you can still use version control. Run the following to enable this locally:
```
git config --local include.path ../.gitconfig
```

### Submitting your solution

When you've completed your completed codetest, send the zipped solution files to codetest@bauerxcel.com. Be sure to include:

* Anonymized git repo
* Solution notes
* Solution and test code

We will do our best to grade the code test within two business days.

# The Problem

### Meet the Bauer Bidding Platform

Bauer Xcel is running a Silent Auction. We have a set of items we would like to auction and a set of users who would like to make bids for those items. You are going to help our auction house run the auction!

We will supply you with a list of auction items and their attributes, and a list of users and their bidding preferences, and for each item you will tell us which user made the winning bid and what the winning bid was.

## Auction rules

- Each user has a finite amount of money to bid on all the items. Once it's gone, they can no longer bid on anything else.
- Each user can bid only once for each item.
- It is a silent auction - users do not know each other's bids.
- Once bidding is finished for all items, the highest bid wins each item.

### Instructions

Write a program that will take the data from `items.json` and `bidders.json` as input. Given the data in `items.json` and `bidders.json`, and applying the rules in `rules.txt` a correct program will generate the following:

### Examples

#### Input
```
[
  ["Horses horses horses", "painting", "horses", "$25,000", "200 × 180 in", "Joe Smith"],
  ["Mrs Frisby", "painting", "Mrs Frisby", "$3,000", "31 × 25 in", "Shelley Adler"],
  ["Tomato Organizers", "painting", "tomatoes", "$150,000", "120 × 180 in", "Christopher Boffoli"],
  ["The principles of nature", "painting", "trees", "$50,000", "23 × 15 in", "Jaehyo Lee"],
  ["The Sweet Life", "sculpture", "lollipops", "$100,000", "18 × 12 in", "Elena Bulatova"]
]
```

#### Output
```
{ "winningBids" : [
    {
      "title" : "Horses horses horses",
      "winner" : "Bob Briskey",
      "bid" : "$100,000"
    },
    {
      "title" : "Mrs Frisby",
      "winner" : "Donald von Neuman",
      "bid" : "$9,000"
    },
    {
      "title" : "Tomato Organizers",
      "winner" : "Bob Briskey",
      "bid" : "$300,000"
    },
    {
      "title" : "The principles of nature",
      "winner" : "Sue Perkins",
      "bid" : "$100,000"
    },
    {
      "title" : "The Sweet Life",
      "winner" : "Sue Perkins",
      "bid" : "$200,000"
    }
  ]
}
```

#### Explanation
```
["Horses horses horses", "Bob Briskey", "$100,000"]
```
- The highest bid wins.
- The starting bid was $25,000
- Bob Briskey will bid double for paintings where the subject is horses. 2 x $25,000 is $50,000
- Bob Briskey will bid double for paintings larger than 625 square inches. 2 x $50,000 is $100,000.

```
["Mrs Frisby", "Donald von Neuman", "$9,000"]
```
- The highest bid wins.
- The starting bid was $3,000
- The artist was Shelley Adler
- Donald von Neuman will bid three times the starting price for paintings by Shelley Adler

```
["Tomato Organizers", "Bob Briskey", "$300,000 "]
```
- The highest bid wins.
- The starting bid was $150,000
- Amanda Wu will never bid more than $100,000 for any item
- Sue Perkins will only bid for paintings smaller than 25 × 25 in
- Donald von Neuman has a fear of tomatoes and will not bid for paintings with a subject of tomatoes
- Bob Briskey will bid double for paintings larger than 625 square inches. 2 x $150,000 is $300,000.


```
["The principles of nature", "Sue Perkins", "$100,000"]
```
- The highest bid wins.
- The starting bid was $50,000
- Sue Perkins will bid double for paintings smaller than 25 × 25 in

```
["The Sweet Life", "Sue Perkins", "$200,000"]
```
- The highest bid wins.
- The starting bid was $100,000
- Sue Perkins will only bid for paintings smaller than 25 × 25 in
- Sue Perkins will bid double for paintings smaller than 25 x 25 in
- Donald von Neuman doesn"t have enough money left to bid
- Bob Briskey doesn"t have enough money left to bid
