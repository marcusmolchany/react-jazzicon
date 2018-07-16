import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import MersenneTwister from 'mersenne-twister';

import colors from './colors';
import Paper from './Paper';

const shapeCount = 4;
const svgns = 'http://www.w3.org/2000/svg';
const wobble = 30;

export default class Jazzicon extends React.PureComponent {
  constructor(props) {
    super(props);

    const { seed } = this.props;

    this.generator = new MersenneTwister(seed);
  }

  genColor = (colors) => {
    const idx = Math.floor(colors.length * this.generator.random());
    const color = colors.splice(idx,1)[0];
    return color;
  }

  hueShift = (colors, generator) => {
    const amount = (generator.random() * 30) - (wobble / 2);
    return colors.map(function(hex) {
      const color = Color(hex);
      color.rotate(amount);
      return color.hexString();
    });
  }

  genShape = (remainingColors, diameter, i, total, svg) => {
    const center = diameter / 2;
    const firstRot = this.generator.random();
    const angle = Math.PI * 2 * firstRot;
    const velocity = diameter / total * this.generator.random() + (i * diameter / total);
    const tx = (Math.cos(angle) * velocity);
    const ty = (Math.sin(angle) * velocity);
    const translate = 'translate(' + tx + ' ' +  ty + ')';

    // Third random is a shape rotation on top of all of that.
    const secondRot = this.generator.random();
    const rot = (firstRot * 360) + secondRot * 180;
    const rotate = 'rotate(' + rot.toFixed(1) + ' ' + center + ' ' + center + ')';
    const transform = translate + ' ' + rotate;
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
      >
      </rect>
    )
  }

  render() {
    const { diameter, paperStyles, svgStyles } = this.props;
    const remainingColors = this.hueShift(colors.slice(), this.generator);
    const shapesArr = Array(shapeCount).fill();

    return (
      <Paper color={this.genColor(remainingColors)} diameter={diameter} style={paperStyles}>
        <svg xmlns={svgns} x="0" y="0" height={diameter} width={diameter} style={svgStyles}>
          {shapesArr.map((s, i) => this.genShape(remainingColors, diameter, i, shapeCount - 1))}
        </svg>
      </Paper>
    );
  }
}

Jazzicon.propTypes = {
  diameter: PropTypes.number,
  paperStyles: PropTypes.object,
  seed: PropTypes.string,
  svgStyles: PropTypes.object,
};
