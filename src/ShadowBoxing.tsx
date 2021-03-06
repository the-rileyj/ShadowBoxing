import * as React from "react";

export interface IShadowBoxingProps {
    blur?: number
    children?: any
    color?: string
    flipHorizontal?: boolean
    flipVertical?: boolean
    level?: number
    opacity?: number
    scaleDiagonal?: boolean
    shadowHorizontalOffset?: number
    shadowVerticalOffset?: number
    style?: React.CSSProperties
}

class ShadowBoxing extends React.Component<IShadowBoxingProps> {
    public constructor(props: IShadowBoxingProps) {
        super(props);
    }

    public render() {
        let style: React.CSSProperties
        if (this.props.style === undefined) {
            style = { display: "inline-block" }
        } else {
            style = { display: "inline-block", ...this.props.style }
        }

        return (
            <div style={{ ...this.getShadowStyle(), ...style }}>
                {this.props.children}
            </div>
        )
    }

    private getShadowStyle(): React.CSSProperties {
        let blur = this.props.blur
        let color = this.props.color
        let level = this.props.level
        let opacity = this.props.opacity
        let scaleDiagonal = this.props.scaleDiagonal
        let shadowHorizontalOffset = this.props.shadowHorizontalOffset
        let shadowVerticalOffset = this.props.shadowVerticalOffset

        if (blur === undefined) {
            if (level !== undefined) {
                blur = level
            } else if (shadowHorizontalOffset !== undefined && shadowVerticalOffset !== undefined) {
                blur = shadowHorizontalOffset > shadowVerticalOffset ? shadowHorizontalOffset : shadowVerticalOffset
            } else if (shadowHorizontalOffset !== undefined) {
                blur = shadowHorizontalOffset
            } else if (shadowVerticalOffset !== undefined) {
                blur = shadowVerticalOffset
            } else {
                blur = 1
            }
        }

        if (level !== undefined) {
            if (scaleDiagonal) {
                shadowHorizontalOffset = level
            } else {
                shadowHorizontalOffset = 0
            }
            shadowVerticalOffset = level
        } else {
            if (scaleDiagonal) {
                if (shadowVerticalOffset !== undefined) {
                    shadowHorizontalOffset = shadowVerticalOffset
                } else {
                    if (shadowHorizontalOffset !== undefined) {
                        shadowVerticalOffset = shadowHorizontalOffset
                    } else {
                        shadowHorizontalOffset = 1
                        shadowVerticalOffset = 1
                    }
                }
            } else {
                if (shadowHorizontalOffset === undefined) {
                    shadowHorizontalOffset = 0
                }
                if (shadowVerticalOffset === undefined) {
                    shadowVerticalOffset = 1
                }
            }
        }

        if (color === undefined) {
            if (opacity !== undefined) {
                color = `rgba(0, 0, 0, ${opacity})`
            } else {
                color = `rgba(0, 0, 0, .32)`
            }
        }

        if (this.props.flipHorizontal !== undefined && this.props.flipHorizontal) {
            shadowHorizontalOffset *= -1
        }

        if (this.props.flipVertical !== undefined && this.props.flipVertical) {
            shadowVerticalOffset *= -1
        }

        return {
            boxShadow: `${shadowHorizontalOffset}px ${shadowVerticalOffset}px ${blur}px ${color}`
        }
    }
}

export default ShadowBoxing