# Bauer Xcel Code Test

If you have any issues, questions or improvement suggestions please contact us by emailing
codetest@bauerxcel.com.

* Note: please do not share this test or your solution with anyone. If you decide to
put it on github via fork or import, please do so in a private repository.

### Requirements

 - This test is not timed, take as long as you need.
 - We intend this test to take no more than a day to complete at most.
 - You may complete the test in the programming language of your choice.
 - You may not use ANY third party libraries in your solution, with the exception of testing libraries. 
 The solution should be written in Plain Old Ruby Objects or similar. We want to see your code not how you use someone else's library!
 - Please submit your solution in a zip file. We will not accept Github forks or links to code on Github or any similar
 host.
 - Please tell us what language you used to implement your solution.
 - Please tell us how to run your solution.

### Assessment

- Your code will be assessed on the following:
    - Design and how you separate responsibilities
    - Correctness of output
    - Code quality metrics such as cleanliness, readability, maintainability and simplicity.
    - Test quality and maintainability.
- Good references for what we consider to be cleanliness, readability, maintainability and simplicity are
Sandi Metz's ["Practial Object Oriented Design in Ruby"](http://www.poodr.com/) and
[code samples from it](https://github.com/skmetz/poodr/)

### Running Your Solution

- Please tell us how to execute your program. We expect to be able to run it and for it to generate an output file.
- Please ensure that any automated tests you submit can be executed easily and successfully (hint: use a build tool).

### Anonymize Your Solution

All submitted code tests will be anonymized before they are given to our code test graders. It is important that
you do not add your name, Github profile or any other identifying information to any file you submit as a part of the
solution (i.e. nothing in the submitted ZIP file is to identify you).

# The Problem

### Meet the Bauer Bidding Platform

Bauer Xcel is running a Silent Auction. We have a set of items we would like to auction and a set of users who would like to make bids
for those items. You are going to help our auction house run the auction!

We will supply you with a list of auction items and their attributes, and a list of users and their bidding preferences, and for each item
you will tell us which user made the winning bid and what the winning bid was.

## The rules

- Each user has a finite amount of money to spend on all the items. Once it is gone, they can no longer bid.
- Each user can bid only once for each item.
- It is a silent auction - users do not see other bids.
- Once every user has bid, the highest bid wins the item

### Instructions

Write a program that will take the results of `items.csv` and `bidders.csv` and generate the file `winning-bids.csv`. Given the data in `items.csv` 
and `bidders.csv`, a correct program will generate the following output:



### Examples


#### input
```
'Horses horses horses', 'painting', 'horses', $25,000, '200 × 180 in', 'Joe Smith'
```

#### output
```
'Horses horses horses' Bob Briskey $50,000
```

#### explanation
- The highest bid wins. 
- The starting bid was $25,000
- Bob Briskey will bid double for paintings where the subject is horses. 2 x $25,000 is $50,000


#### input
```
'Mrs Frisby', 'painting', 'Mrs Frisby', $3,000, '31 × 25 in', 'Shelley Adler'
```

#### output
```
'Mrs Frisby', Donald von Neuman, $9,000
```

#### explanation
- The highest bid wins. 
- The starting bid was $3,000
- The artist was Shelley Adler
- Donald von Neuman will bid three times the starting price for paintings by Shelley Adler

#### input
```
'Tomato Organizers', 'painting', 'tomatoes', $150,000, '120 × 180 in', 'Christopher Boffoli'
```

#### output
```
'Tomato Organizers', Bob Briskey, $150,000 
```

#### explanation
- The highest bid wins. 
- The starting bid was $150,000
- Amanda Wu will never bid more than $100,000 for any item
- Sue Perkins will only bid for paintings smaller than 25 × 25 in
- Donald von Neuman has a fear of tomatoes and will not bid for paintings with a subject of tomatoes


#### input
```
'The principles of nature', 'painting', 'trees', $50,000, '23 × 15 in', 'Jaehyo Lee'
```

#### output
```
'The principles of nature', Sue Perkins, $100,000
```

#### explanation
- The highest bid wins. 
- The starting bid was $50,000
- Sue Perkins will bid double for paintings smaller than 25 × 25 in

#### input
```
'The Sweet Life', 'sculpture', 'lollipops', $100,000, '18 × 12 in', 'Elena Bulatova'
```

#### output
```
'The Sweet Life', Amanda Wu, $100,000
```

#### explanation
- The highest bid wins. 
- The starting bid was $100,000
- Sue Perkins will only bid for paintings smaller than 25 × 25 in
- Donald von Neuman doesn't have enough money left to bid
- Bob Briskey doesn't have enough money left to bid