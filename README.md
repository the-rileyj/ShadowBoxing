# ShadowBoxing

Simple package for adding material-design-like shadow effects to React elements.

## Installation

```npm i shadowboxing```

## Usage

Using the ```ShadowBoxing``` element with only the level attribute specified will yield material-design-like shadow effects.

```
import * as ReactDOM from "react-dom"
import ShadowBoxing from "shadowboxing"

ReactDOM.render(
  ( 
    <ShadowBoxing level={4}>
        Cool
    </ShadowBoxing>
  ),
  document.getElementById('root') as HTMLElement
)
```

Alternatively the element can be used as a wrapper to produce desired shadow effects and styles on an element

```
import * as ReactDOM from "react-dom"
import ShadowBoxing from "shadowboxing"

ReactDOM.render(
  ( 
    <ShadowBoxing shadowHorizontalOffset={4} style={{border: "solid black"}}>
        Nice
    </ShadowBoxing>
  ),
  document.getElementById('root') as HTMLElement
)
```