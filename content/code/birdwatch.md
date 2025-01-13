---
title: "Plotting Bird Observations on a Map with R"
description: 
date: 2025-01-12
---

**Made with**:  **R**

Video overview: (https://youtu.be/XwbC2oFqorQ)

<hr />

<img src="/img/norcar-hab.png" style="width: 100%; margin-bottom: 3em; margin-top: 2em" />

This is a program that makes use of the `tidiverse`, `dplyr`, `ggplot2`, `maps` and `sf` **R** packages to build a visualization tool that shows the observations of a particular bird species in a US map.

These are the functions that were created:

#### bd_dot_file

**Name**: `bd_dot_file`

**Description**: Prepares a file for input to the `bd_dot_plot` function

**Usage**: `bd_dot_file(species, state)`

**Arguments**:

`species`: a character vector of one or several bird species as denominated by their `SPECIES_CODE`, e.g. c("norcar", "rebwoo")` for the northern cardinal and red belly woodpecker.

`state`: a string with the state code where we want to see bird observations
  

**Output**: 

A tibble including the `LATITUDE` and `LONGITUDE` where the species passed as an argument have been located in the state passed as an argument.

**Examples**: 

`bd_dot_file(c("norcar", "rebwoo"), "FL")` will return a tibble with the `LATITUDE` and `LONGITUDE` where northern cardinals and red belly woodpeckers have been spotted in Florida.

`bd_dot_file(c("norcar", "rebwoo"), "XX")` will return a warning message since "XX" is not a valid state.

`bd_dot_file(c("norcar", "rebwoo"))` will return a tibble with the `LATITUDE` and `LONGITUDE` where northern cardinals and red belly woodpeckers have been spotted in all contiguous US states, since no particular state is provided.

`bd_dot_file(c("nonexistingspecies"), "FL")` will return a warning message since the species argument provided doesn't include any valid species

`bd_dot_file("", "FL")` will return a warning message since the species argument wasn't provided and one is needed


#### bd_dot_plot

**Name**: `bd_dot_plot`

**Description**: Bird Observations Geographical Plot

**Usage**: bd_dot_plot(locs, title)

**Arguments**: 
  
`locs`: a tibble displaying the `LATITUDE` and `LONGITUDE` of all observations for a selected group of bird species, previously provided to the `bd_dot_file` function.

`title`: a character string with the title we want to give to our chart.

**Output**: 

A `ggplot` showing a the locations in the US map where the selected group of bird species has been spotted, in the state provided to the `bd_dot_file` function.

**Examples**:

`bd_dot_plot(locs, "Northern Cardinal observations in FL")` will return a `geom_jitter` `ggplot` over a US map showing spots where the northern cardinal has been spotted in FL (if the user selected FL as state argument in `bd_dot_file`).

`bd_dot_plot("")` will result in a warning explaining that the argument needs to be a data frame.

`bd_dot_plot(locs)` will return a `geom_jitter` `ggplot` over a US map showing spots where the Northern Cardinal has been spotted in the state provided by the user in `bd_dot_file`. If no state was provided it will show all observations in the continental US. Since no title is provided, the default title of "Scatterplot" will be used.


#### validate_species

**Name**: `validate_species`

**Description**: a helper function to determine if the value of a species entered by the user corresponds to a valid bird species.

**Usage**: `validate_state(species)`

**Arguments**: 

`species`: a character vector, e.g. `c("norcar", "baleag")`

**Output**:
If input contains an invalid species: a warning message will alert user and stop program. 
If input contains all valid species codes: return to the function that called it without returning a value, as through a pass.

**Examples**:

`validate_species(c("norcar", "xxxxxx"))` will warn the user that `xxxxxx` is not a valid species.

`validate_state("norcar", "baleag")` will pass and go back to the calling function, since values provided are valid bird species.

`validate_state("")` will warn the user that ` ` is not a valid species.


#### validate_state

**Name**: `validate_state`

**Description**: a helper function to determine if the value of a state entered by the user corresponds to a valid state in the continental US.

**Usage**: `validate_state(state)`

**Arguments**:

`state`: a character string of length 2, e.g. "FL" for Florida

**Output**:

If input is an invalid string: a warning message stopping the program. 

If input is a valid string: returns to the function that called it without returning a value, as through a pass.

**Examples**:

`validate_state("FL")` will return to the function that called it without a warning message, since "FL" is a valid state.

`validate_state("XX")` will return a warning message and stop the program, since the state "XX" is invalid.

`validate_state("")` will return to the function that called it without a warning message, and the function that called it will consider data for all states, without filtering for any state in particular, since none was provided.