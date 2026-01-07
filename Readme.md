
1. I have not written code for a year. That is sad - but it also means that i have forgotten how to setup a lot of this stuff. So its probably janky - should add to realism ...

2. you may have to force fix vulns, its a kata -> i haven't really cared. I suggest you dont deploy to prod.

3. `npm install`
4. `npm test`

## Recommendations

ended up using vitest because it has inbuild ts compatability
[vitest extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

## The Session

Broken into 3 parts

1) 30 mins have a go refactoring this code. Use any approach you like. Stop reading this and get on with it.  Afterwards we will run the ignored test and see if you broke anything. If you dive in and refactor you are going to, thats part of the amusement tbh.
2) We will do a group chat about what people tried, what went wrong, what we think we should do differently and then go and try again 
3) try again with a different appraoch for an hour
4) reflect and what to adopt?


## Background

Welcome you just joiined a new project. 

This code base was built by a 10x engineer - it is highly performant and they have maintained this for a number of years. The business is exceptionally happy with this code base, but nobody has looked at it in a while and the persono maintaining it has been promoted to the point where they can no longer touch code.

Maybe thats a good thing

## Destructions

You have a requirement:

We have recently signed a supplier of conjured items. This requires an update to our system:
 - "Conjured" items degrade in Quality twice as fast as normal items

(I don't expect anyone to implement this - but its a reason to be here. The win condition is refactoring this into sense, not implementing this feature)

There will be a lot more of these requirements coming through - which is why its worth taking time to get this into shape.

Before you do such a thing you should probably understand what this piece of 'code' actually does.

Kent Beck has a phrase, 'Make the change easy, then make the easy change'.
But how can you make the change easy?

We have to refactor
How to do we refactor rather than refucktor?

go forth and try not to fuck it up!


## Notes

there is a file with .ignore in its name.
This file if run will do an acceptance test.

I do not want us to use this before - unless you get stuck and think its all gone wrong.
Why?

Because in any real problem it is often not possible to know all the inputs required to fully exercise a system - to do this we need mutation testing and its a long slow process.

What we need to have is confidence in our ability to gradually chip at a problem and cover it in meaningful tests - and refactor those tests if needed, rename them and generlly extract concepts.

In the real world we can then take these tests that will cover more use cases than are supported. The permutations of code are always going to be equal or higher than use cases (or we have defects / missing features).

we would then take these examples, get signoff on the ones that matter.
When you get to this point (you have 1 hour)