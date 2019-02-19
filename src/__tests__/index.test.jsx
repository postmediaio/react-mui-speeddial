import * as React from "react";
import { mount } from "enzyme";
import { MuiThemeProvider } from "material-ui";
import { SpeedDial, SpeedDialItem } from "../index";

describe("<SpeedDial />", () => {
  it("should render", () => {
    mount(
      <MuiThemeProvider>
        <SpeedDial fabContentOpen={<div>Fab Content Open</div>}>
          <SpeedDialItem 
            label={"My speed dial item"}
            fabContent={<div>Fab Content</div>}
          />
        </SpeedDial>
      </MuiThemeProvider>
    );
  });
});