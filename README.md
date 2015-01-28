# SomeGrids <sup>v 1.1.2</sup> 

This grid is made on different types of building columns , allowing automatic output elements using cms (eg output of goods in the category of online store) becomes simple as cheese =)

_Sooooo, **SomeGrids** have display types:_

* **Inline**
* **Float**
* **Flex**

aaand responsive ready on every type

> And you know that this mean, huh? =)


## The size of the compiled css in expanded style 3.44kb

## Basic Grid HTML

```
<div class="wrapper">
  <div class="box float||inline||flex">
    <div class="sgrid-6">Something</div>
    <div class="sgrid-6">Something else</div>
  </div>
</div>
```

## Pre-grid

Move columns to the right using ```.pre-*``` classes. Each class increases the left margin of a column by a whole column. 
For example, ```.pre-3``` moves ```.sgrid-*``` over three columns.

```
<div class="wrapper">
  <div class="box float||inline||flex">
    <div class="sgrid-4 pre-2">Something</div>
    <div class="sgrid-3 pre-3">Something else</div>
  </div>
</div>
```

## Post-grid

And you may move columns to the left using ```.post-*``` classes. Also each class increases the right margin of a column by a whole column.
For example, ```.post-5``` moves ```.sgrid-*``` over five columns.

```
<div class="wrapper">
  <div class="box float||inline||flex">
    <div class="sgrid-1 post-5">Something</div>
    <div class="sgrid-4 post-2">Something else</div>
  </div>
</div>
```

## Nested columns

To nest your content with the default grid, add a new ```.box``` with columns type ```inline||float||flex``` and set of ```.sgrid-*``` columns within an existing ```.sgrid-*``` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

> I recommend nest:
> * inline-columns to float-column
> * float-columns to float-column

```
<div class="wrapper">
  <div class="box float">
    <div class="sgrid-3">Something</div>
    <div class="sgrid-9">
      Parent column .sgrid-9
      <div class="box inline">
        <div class="sgrid-6">Nested columns .sgrid-6</div>
        <div class="sgrid-6">Nested columns .sgrid-6</div>
      </div>
    </div>
  </div>
</div>
```
##Simple, Awesome &amp; Fast

<p style="text-align:center">Oh, all this free as snow in your pants</p>
