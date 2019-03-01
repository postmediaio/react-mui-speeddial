import * as React from "react";
import { mount } from "enzyme";
import { MuiThemeProvider } from "material-ui";
import { SpeedDial, SpeedDialItem } from "../index";
import FloatingActionButton from 'material-ui/FloatingActionButton';

describe("<SpeedDialItem />", () => {
  const render = (props = {}) => mount(
    <MuiThemeProvider>
      <SpeedDialItem 
        index={0}
        visible
        itemPosition={0}
        label={"My speed dial item"}
        fabContent={<div>Fab Content</div>}
        onCloseRequest={jest.fn()}
        {...props}
      />
    </MuiThemeProvider>
  );

  it("should render", () => {
    expect(render).not.toThrow();
  });

  it("should handle touchTap", () => {
    const onTouchTap = jest.fn();
    const wrapper = render({
      onTouchTap,
    });
    wrapper.find(FloatingActionButton).at(0).prop("onClick")();
    expect(onTouchTap).toBeCalled();
  });

  it("should handle click", () => {
    const onClick = jest.fn();
    const wrapper = render({
      onClick,
    });
    wrapper.find(FloatingActionButton).at(0).prop("onClick")();
    expect(onClick).toBeCalled();
  });
});