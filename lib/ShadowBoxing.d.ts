import * as React from "react";
export interface IShadowBoxingProps {
    blur?: number;
    children?: any;
    color?: string;
    level?: number;
    opacity?: number;
    scaleDiagonal?: boolean;
    shadowHorizontalOffset?: number;
    shadowVerticalOffset?: number;
    style?: React.CSSProperties;
}
export declare class ShadowBoxing extends React.Component<IShadowBoxingProps> {
    constructor(props: IShadowBoxingProps);
    render(): JSX.Element;
    private getShadowStyle;
}
