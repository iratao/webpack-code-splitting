var main = function() {
  console.log("Main class");
  import('./page1' /* webpackChunkName: "page1" */ ).then(({ default: page}) => {
    page();
  })
  import('./page2' /* webpackChunkName: "page2" */ ).then(({ default: page}) => {
    page();
  })
};

main();