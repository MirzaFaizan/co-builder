import React, { Component } from "react";
import Shimmer from "react-shimmer-effect";
import injectSheet from "react-jss";
const data = [1, 1, 1, 1];

const StyleSheet = {
  container: {
    border: "0px solid rgba(255, 255, 255, 1)",
    borderRadius: "4px",
    width: "100%",
    alignItems: "center",
    borderRadius: 20
  },
  line: {
    width: "100%",
    height: "100px"
  },
  line2: {
    width: "100%",
    height: "100px",
    borderRadius: "0px 0px 0px 80px",
    marginTop: "0px",
    borderRadiusLeft: "100px"
  }
};
function Loader(props) {
  const { classes } = props;
  return (
    <>
      {data.map(value => (
        <div
          className={
            "text-center bg-white d-flex flex-column align-items-center mr-2 mb-3 col-sm-3  " +
            classes.container
          }
        >
          <Shimmer>
            <div className={classes.line} />
            <div className={classes.line} />
            <div className={classes.line2} />
            {/*  <div className={classes.line} />
            <div className={classes.line} />
            <div className={classes.line} /> */}
          </Shimmer>
        </div>
      ))}
    </>
  );
}

export default injectSheet(StyleSheet)(Loader);
