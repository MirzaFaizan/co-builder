import React, { Component } from "react";
import Shimmer from "react-shimmer-effect";
import injectSheet from "react-jss";
const data = [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1];

const StyleSheet = {
  container: {
    border: "0px solid rgba(255, 255, 255, 1)",
    borderRadius: "4px",
    alignItems: "center",
    borderRadius: 20
  },
  circle: {
    height: "100px",
    width: "100px",
    borderRadius: "50%"
  },
  line: {
    width: "300px",
    height: "12px",
    borderRadius: "8px",
    marginTop: "10px",
    marginTop: "20px"
  }
};

function Loader(props) {
  const { classes } = props;
  return (
    <>
      <div
        className={
          "text-center p-3 pl-5 pr-5 d-flex flex-column align-items-center mr-3 mb-3 " +
          classes.container
        }
      >
        <Shimmer>
          <div className={classes.circle} />
          <div className={classes.line} />
          <div className={classes.line} />
          <div className={classes.line} />
          <div className={classes.line} />
          <div className={classes.line} />
          <div className={classes.line} />
        </Shimmer>
      </div>
    </>
  );
}

export default injectSheet(StyleSheet)(Loader);
