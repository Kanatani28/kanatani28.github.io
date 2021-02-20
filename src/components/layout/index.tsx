import React from "react";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import SideMenu from "./SideMenu";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import routes from "../../routes";
import Footer from "./Footer";
import Header from "./Header";

const Layout = React.memo(() => {
  const location = useLocation();
  const rootPath = location.pathname.split("/")[1];

  const responsiveGrids = useBreakpointValue({
    base: {
      column: 7,
      mainWidth: 5,
      overflow: "visible",
    },
    md: {
      column: 5,
      mainWidth: 3,
      overflow: "hidden",
    },
  });

  return (
    <Grid
      h="100%"
      templateColumns={`repeat(${responsiveGrids?.column}, 1fr)`}
      templateRows="1fr max-content"
      p={["1rem", "2rem", "3rem"]}
      style={{ overflow: responsiveGrids?.overflow }}
    >
      <GridItem colSpan={1}>
        <SideMenu />
      </GridItem>
      <GridItem colSpan={responsiveGrids?.mainWidth}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={rootPath}>
            {routes.map((route) => (
              <Route
                key={route.name}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </AnimatePresence>
      </GridItem>
      <GridItem colSpan={1}>
        <Header />
      </GridItem>
      <GridItem colSpan={5}>
        <Footer />
      </GridItem>
    </Grid>
  );
});

export default Layout;
