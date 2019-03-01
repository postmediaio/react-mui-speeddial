import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';

const styles = {
  itemContainer: {
    position: "absolute",
    right: 48,
    top: 20,
    WebkitTransform:  "translateY(-50%)",
    MozTransform:  "translateY(-50%)",
    MsTransform:  "translateY(-50%)",
    OTransform:  "translateY(-50%)",
    transform: "translateY(-50%)"
  }
};


function getYPos(index, position) {
  let newYPos = 81 + index * 56;

  if (position === 'below') {
    newYPos = -114 + (index * 56);
  }

  return newYPos;
}

export class SpeedDialItem extends React.PureComponent {
  effects = {
    "none": (visible, index) => ({
      display: visible ? "" : "none"
    }),

    "fade-staggered": (visible, index) => ({
      transition: visible ? "450ms" : "300ms",
      transitionDelay: visible ? (index * 0.025) + "s" : "",
      transform: "translateY(" + (visible ? 0 : (this.props.itemPosition === 'above' ? "5px" : "-5px")) + ")",
      opacity: visible ? 1 : 0
    }),

    "fade":  (visible, index) => ({
      transition: visible ? "450ms" : "300ms",
      opacity: visible ? 1 : 0
    }),

    "slide": (visible, index) => ({
      transition: visible ? "250ms" : "300ms",
      transform: "translateY(" + (visible ? 0 : getYPos(index, this.props.itemsPosition) + "px") + ")",
      opacity: visible ? 1 : 0
    }),
  };

  handleClick(ev) {
    this.props.onCloseRequest();

    if (this.props.onTouchTap) {
      console.warn("[react-mui-speeddial] onTouchTap is deprecated, please use onClick instead");
      this.props.onTouchTap(ev);
    }

    if (this.props.onClick) {
      this.props.onClick(ev);
    }
  }

  render() {
    const { index, visible, itemPosition } = this.props;

    let style = {
      pointerEvents: visible ? "" : "none",
      position: "absolute",
      zIndex: 9999,
      whiteSpace: "nowrap",
      right: 8,
      bottom: getYPos(index, itemPosition)
    };

    let fx = this.effects[this.props.effect];

    if (!fx)
      fx = this.effects.none;

    style = { ...style, ...fx(visible, index) };

    return (<div style={style}>
      <div style={Object.assign(styles.itemContainer, this.props.labelStyle)}>
        {this.props.label}
      </div>

      <FloatingActionButton
        mini={true}        
        secondary={this.props.secondary}
        backgroundColor={this.props.backgroundColor}
        style={this.props.style}
        iconStyle={this.props.iconStyle}
        onClick={(ev) => { this.handleClick(ev); }}
      >
        {this.props.fabContent}
      </FloatingActionButton>
    </div>);
  }
};

SpeedDialItem.defaultProps = {
  itemPosition: 'above', // above or below
  secondary: true,
};