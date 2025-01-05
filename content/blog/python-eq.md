---
title: Solving Equations with Python 
description: Using Python's sympy library
date: 2024-01-05
tags: tech
draft: false
---

**Important**: This article assumes that you are already familiar with the basics of programming with Python.

<hr />

In high school algebra you will regularly need to solve linear equations, quadriatic equations, or equations of a higher power, as well as systems of equations. 

While it is important for you to learn how to solve them algebraically, you can also use the power of computers, and in particular Python (a high-level, general-purpose programming language) to solve the most complex equations in a matter of miliseconds.

To solve equations with Python, you need to install a library called `sympy`, which handles all the behind-the-scenes "magic" that generates the answers.

To install `sympy` (or any Python package) system-wide, you need to run the following command from the command prompt: `sudo apt install python3-xyz`, where `xyz` is the name of the package you are trying to install. In this case we will run:

`sudo apt install python3-sympy`

We will be using `sympy` to create two extremely brief snippets (just two lines of code each!). One of them will allow us to solve equations with one variable, and the other one systems of equations. The equations can be linear, quadratic, cubic, etc. and the solutions can be real or complex numbers.

**Important note**: for the programs to work, the equations must be input in Python format: for example, x to the power of two is `x**2`, the square root of 4 is `sqrt(4)`, and 5 times x is `5*x`.

##### Solving equations with one variable

This is the code to solve equations with one variable (in this case, we are solving a quadratic equation: `x**2 - 5*x + 6`). You can cut and paste this code into a Python `.py` file to be able to run it:

<pre>
import sympy
from sympy.abc import x
from sympy.solvers import solve


# Put the equation here:
eq = (x**2 - 5*x + 6)

print("x = ", solve(eq, x))
</pre>

The solution will be presented in the following form:

`x = [2, 3]`

##### Solving systems of equations

This is the code to solve systems of equations (in this case we want to find the solution of a pair of linear equations: `x + y = 2` and `x + y = 0`). For the program to work, we should write our expressions putting all our variables and costants together, like this: `x + y - 2` and `x - y`.  Again, you can cut and paste this code into a Python `.py` file to be able to run it:

<pre>
import sympy
from sympy.abc import x, y
from sympy.solvers import solve


# Put the equations here:
eq = ([x + y - 2, x - y])

print("x = ", solve(eq, [x, y]))
</pre>

The solution will be presented in the following form:

`x =  {x: 1, y: 1}`


To run the programs you need to type the following command: `python3 <snippet.py>` replacing `snippet` with the name you assigned to your particular program.

While the equations used in this example are very simple, the programs also work for more complicated expressions. 

This is just one example of how you can leverage the power of computers to solve equations quickly and reliably.
