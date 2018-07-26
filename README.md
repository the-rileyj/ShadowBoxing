# ShadowBoxing
[![npm version](https://badge.fury.io/js/shadowboxing.svg)](https://badge.fury.io/js/shadowboxing)

Simple package for adding material-design-like shadow effects to React elements.

## Installation

```npm i shadowboxing```

Type declarations are bundled with the package

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
  document.getElementById("root") as HTMLElement
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
  document.getElementById("root") as HTMLElement
)
```

## Things to Note

If the element you are puting in the ```ShadowBoxing``` element has any sort of border radius and inheritted background color styling, it's recommended that you add that border styling to the ```ShadowBoxing``` element instead; otherwise the background color of the parent element will also show on the ```ShadowBoxing``` element, resulting in the child element having rounded corners and the wrapping div of the ```ShadowBoxing``` element having pointy corners

```
import * as ReactDOM from "react-dom"
import ShadowBoxing from "shadowboxing"

ReactDOM.render(
  (
    <div style={{backgroundColor: "red"}}>
        <ShadowBoxing shadowHorizontalOffset={4} style={{border: "solid black", borderRadius: ".25rem"}}>
          This
        </ShadowBoxing>
        <ShadowBoxing shadowHorizontalOffset={4}>
          <div style={{border: "solid black"}}>
            Instead of this
          </div>
        </ShadowBoxing>
    </div>
  ),
  document.getElementById("root") as HTMLElement
)
```

Initially, some elements will not render correctly when put inside of the ```ShadowBoxing``` element due to the default ```display: "inline-block"``` styling of the ```div``` which wraps the child elements put inside of the ```ShadowBoxing``` element. If this is the case, the display property can be overridden by providing a style object with the desired overriding value

```
import * as ReactDOM from "react-dom"
import ShadowBoxing from "shadowboxing"

ReactDOM.render(
  (
    <ShadowBoxing level={8} style={{display: "block"}}>
      <SomeConflictingElement />
    </ShadowBoxing>
  ),
  document.getElementById("root") as HTMLElement
)
```