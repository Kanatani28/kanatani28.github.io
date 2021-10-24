import React, { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import Layout from "./components/layout";

const App = () => {
  useEffect(() => {
    function disableScroll(event: TouchEvent) {
      event.preventDefault();
    }
    // イベントと関数を紐付け
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.body.classList.add('overflow-hidden');
  }, [])

  return (
    <Router>
      <Layout />
    </Router>
  )
};

export default App;
