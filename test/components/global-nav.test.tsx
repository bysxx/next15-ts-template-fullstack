import NavBar from "@components/ui/global-nav";
import { render } from "@testing-library/react";

import Wrapper from "../TestWrapper";

describe("Navbar Test", () => {
  test("NavBar Text", async () => {
    render(
      <Wrapper>
        <NavBar />
      </Wrapper>
    );
  });
});
