# SomeGrids <sup>v 1.0.0</sup> 

####Simple, Awesome &amp; Fast

_Wow! This grids have display types_

##### Responsive ready on every type

* **Inline**
* **Float**
* **Flex**

And you know that this mean, huh? =)

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