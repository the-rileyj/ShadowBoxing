import * as React from "react";
export interface IShadowBoxingProps {
    blur?: number;
    children?: any;
    color?: string;
    flipHorizontal?: boolean;
    flipVertical?: boolean;
    level?: number;
    opacity?: number;
    scaleDiagonal?: boolean;
    shadowHorizontalOffset?: number;
    shadowVerticalOffset?: number;
    style?: React.CSSProperties;
}
declare class ShadowBoxing extends React.Component<IShadowBoxingProps> {
    constructor(props: IShadowBoxingProps);
    render(): JSX.Element;
    private getShadowStyle;
}
export default ShadowBoxing;
