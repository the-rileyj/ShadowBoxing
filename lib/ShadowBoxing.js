"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ShadowBoxing = (function (_super) {
    __extends(ShadowBoxing, _super);
    function ShadowBoxing(props) {
        return _super.call(this, props) || this;
    }
    ShadowBoxing.prototype.render = function () {
        return (React.createElement("span", { style: __assign({}, this.getShadowStyle(), this.props.style) }, this.props.children));
    };
    ShadowBoxing.prototype.getShadowStyle = function () {
        var blur = this.props.blur;
        var color = this.props.color;
        var level = this.props.level;
        var opacity = this.props.opacity;
        var scaleDiagonal = this.props.scaleDiagonal;
        var shadowHorizontalOffset = this.props.shadowHorizontalOffset;
        var shadowVerticalOffset = this.props.shadowVerticalOffset;
        if (blur === undefined) {
            if (level !== undefined) {
                blur = level;
            }
            else if (shadowHorizontalOffset !== undefined && shadowVerticalOffset !== undefined) {
                blur = shadowHorizontalOffset > shadowVerticalOffset ? shadowHorizontalOffset : shadowVerticalOffset;
            }
            else if (shadowHorizontalOffset !== undefined) {
                blur = shadowHorizontalOffset;
            }
            else if (shadowVerticalOffset !== undefined) {
                blur = shadowVerticalOffset;
            }
            else {
                blur = 1;
            }
        }
        if (level !== undefined) {
            if (scaleDiagonal) {
                shadowHorizontalOffset = level;
            }
            else {
                shadowHorizontalOffset = 0;
            }
            shadowVerticalOffset = level;
        }
        else {
            if (scaleDiagonal) {
                if (shadowVerticalOffset !== undefined) {
                    shadowHorizontalOffset = shadowVerticalOffset;
                }
                else {
                    if (shadowHorizontalOffset !== undefined) {
                        shadowVerticalOffset = shadowHorizontalOffset;
                    }
                    else {
                        shadowHorizontalOffset = 1;
                        shadowVerticalOffset = 1;
                    }
                }
            }
            else {
                if (shadowHorizontalOffset === undefined) {
                    shadowHorizontalOffset = 0;
                }
            }
        }
        if (color === undefined) {
            if (opacity !== undefined) {
                color = "rgba(0, 0, 0, " + opacity + ")";
            }
            else {
                color = "rgba(0, 0, 0, .32)";
            }
        }
        return {
            boxShadow: shadowHorizontalOffset + "px " + shadowVerticalOffset + "px " + blur + "px " + color
        };
    };
    return ShadowBoxing;
}(React.Component));
exports.default = ShadowBoxing;
//# sourceMappingURL=ShadowBoxing.js.map