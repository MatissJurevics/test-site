import { pageState as ps } from "../../AvgLib/utils/pageState.js";

ps.varInit("count", 1);

ps.funcInit("increment", () => {
    ps.varSet("count", ps.variables["count"] + 1);
});

// ps.varInit("items", ["jim", "tim"])