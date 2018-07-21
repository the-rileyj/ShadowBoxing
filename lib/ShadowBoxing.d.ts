import * as React from "react";
export interface IShadowBoxingProps {
    blur?: number;
    color?: string;
    level?: number;
    opacity?: number;
    scaleDiagonal?: boolean;
    shadowHorizontalOffset?: number;
    shadowVerticalOffset?: number;
    style: React.CSSProperties;
}
export default class ShadowBoxing extends React.Component<IShadowBoxingProps> {
    constructor(props: IShadowBoxingProps);
    render(): JSX.Element;
    private getShadowStyle;
}
