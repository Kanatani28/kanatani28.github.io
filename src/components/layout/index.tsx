import React from "react";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import SideMenu from "./SideMenu";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import routes from "../../routes";
import Footer from "./Footer";
import Header from "./Header";

const Layout = React.memo(() => {
  const location = useLocation();
  const rootPath = location.pathname.split("/")[1];

  return (
    <Grid
      h="100%"
      templateColumns="repeat(5, 1fr)"
      templateRows="1fr max-content"
    >
      <GridItem colSpan={1}>
        <SideMenu />
      </GridItem>
      <GridItem colSpan={3}>
        <AnimatePresence exitBeforeEnter initial={false}>
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
