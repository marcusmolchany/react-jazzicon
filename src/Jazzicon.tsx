import * as React from "react";
import MersenneTwister from "mersenne-twister";

import { colorRotate } from "./colorUtils";
import colors from "./colors";
import Paper from "./Paper";

const shapeCount = 4;
const svgns = "http://www.w3.org/2000/svg";
const wobble = 30;
const defaultDiameter = 24;

type JazziconProps = {
  diameter?: number;
  paperStyles?: object;
  seed?: number;
  svgStyles?: object;
};

type Colors = Array<string>;

export default class Jazzicon extends React.PureComponent<JazziconProps> {
  generator: MersenneTwister;
  props: JazziconProps;

  genColor = (colors: Colors): string => {
    // @ts-ignore
    const rand = this.generator.random(); // purposefully call the generator once, before using it again on the next line
    const idx = Math.floor(colors.length * this.generator.random());
    const color = colors.splice(idx, 1)[0];
    return color;
  };

  hueShift = (colors: Colors, generator: MersenneTwister): Array<string> => {
    const amount = generator.random() * 30 - wobble / 2;
    const rotate = (hex: string) => colorRotate(hex, amount);
    return colors.map(rotate);
  };

  genShape = (
    remainingColors: Colors,
    diameter: number,
    i: number,
    total: number
  ) => {
    const center = diameter / 2;
    const firstRot = this.generator.random();
    const angle = Math.PI * 2 * firstRot;
    const velocity =
      (diameter / total) * this.generator.random() + (i * diameter) / total;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;
    const translate = "translate(" + tx + " " + ty + ")";

    // Third random is a shape rotation on top of all of that.
    const secondRot = this.generator.random();
    const rot = firstRot * 360 + secondRot * 180;
    const rotate =
      "rotate(" + rot.toFixed(1) + " " + center + " " + center + ")";
    const transform = translate + " " + rotate;
    const fill = this.genColor(remainingColors);

    return (
      <rect
        key={i}
        x="0"
        y="0"
        rx="0"
        ry="0"
        height={diameter}
        width={diameter}
        transform={transform}
        fill={fill} // todo: make prop
      />
    );
  };

  render() {
    const {
      diameter = defaultDiameter,
      paperStyles = {},
      seed,
      svgStyles = {},
    } = this.props;

    this.generator = new MersenneTwister(seed);

    const remainingColors = this.hueShift(colors.slice(), this.generator);
    const shapesArr = Array(shapeCount).fill(undefined);

    return (
      <Paper
        color={this.genColor(remainingColors)}
        diameter={diameter}
        style={paperStyles}
      >
        <svg
          xmlns={svgns}
          x="0"
          y="0"
          height={diameter}
          width={diameter}
          style={svgStyles}
        >
          {shapesArr.map((s, i) =>
            this.genShape(remainingColors, diameter, i, shapeCount - 1)
          )}
        </svg>
      </Paper>
    );
  }
}
