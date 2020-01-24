import React, { Component } from "react";
import Shimmer from "react-shimmer-effect";
import injectSheet from "react-jss";
const data = [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1];

const StyleSheet = {
  container: {
    border: "0px solid rgba(255, 255, 255, 1)",
    borderRadius: "4px",
    backgroundColor: "white",
    display: "flex",
    padding: "10px",
    width: "100%"
  },
  circle: {
    height: "60px",
    width: "20%",
    borderRadius: "8px"
    // borderRadius: "50%"
  },
  line: {
    width: "75%",
    height: "60px",
    alignSelf: "center",
    marginLeft: "16px",
    borderRadius: "8px"
  }
};
function Loader(props) {
  const { classes } = props;
  return (
    <>
      {/* {data.map(value => ( */}
      <div className={classes.container}>
        <Shimmer>
          <div className={classes.circle} />
          <div className={classes.line} />
        </Shimmer>
      </div>
      <div className={classes.container}>
        <Shimmer>
          <div className={classes.circle} />
          <div className={classes.line} />
        </Shimmer>
      </div>
      <div className={classes.container}>
        <Shimmer>
          <div className={classes.circle} />
          <div className={classes.line} />
        </Shimmer>
      </div>
      <div className={classes.container}>
        <Shimmer>
          <div className={classes.circle} />
          <div className={classes.line} />
        </Shimmer>
      </div>
      {/* ))} */}
    </>
  );
}

export default injectSheet(StyleSheet)(Loader);
