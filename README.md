# ShadowBoxing

Simple package for adding material-design-like shadow effects to React elements.

## Installation

```npm i shadowboxing```

## Usage

Using the ```ShadowBoxing``` element with only the level attribute specified will yield material-design-like shadow effects.

```
import * as ReactDOM from "react-dom"
import { ShadowBoxing } from "shadowboxing"

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
import { ShadowBoxing } from "shadowboxing"

ReactDOM.render(
  ( 
    <ShadowBoxing shadowHorizontalOffset={4} style={{border: "solid black"}}>
        Nice
    </ShadowBoxing>
  ),
  document.getElementById('root') as HTMLElement
)
```

## Note

If the element you're puting in the ```ShadowBoxing``` element has any sort of border radius and inheritted background color styling, it's recommended that you add that border styling to the ```ShadowBoxing``` element instead; otherwise the background color of the parent element will also show on the ```ShadowBoxing``` element, resulting in the inner child element having rounded corners and the wrapping div of the ```ShadowBoxing``` element having pointy corners

```
import * as ReactDOM from "react-dom"
import { ShadowBoxing } from "shadowboxing"

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
  document.getElementById('root') as HTMLElement
)
```