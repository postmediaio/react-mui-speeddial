import * as React from "react";
import { mount } from "enzyme";
import { MuiThemeProvider } from "material-ui";
import { SpeedDial, SpeedDialItem } from "../index";
import FloatingActionButton from 'material-ui/FloatingActionButton';

describe("<SpeedDial />", () => {
  const render = (props = {}) => mount(
    <MuiThemeProvider>
      <SpeedDial fabContentOpen={<div>Fab Content Open</div>} {...props}>
        <SpeedDialItem 
          label={"My speed dial item"}
          fabContent={<div>Fab Content</div>}
        />
      </SpeedDial>
    </MuiThemeProvider>
  );

  it("should render", () => {
    expect(render).not.toThrow();
  });

  it("should handle click", () => {
    const onOpenCloseRequest = jest.fn();
    const wrapper = render({
      onOpenCloseRequest,
    });
    wrapper.find(FloatingActionButton).at(0).prop("onClick")();
    expect(onOpenCloseRequest).toBeCalled();
  });
});