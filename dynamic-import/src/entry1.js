import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
  console.log(
    _.join(['Another', 'module', 'loaded!'], ' ')
  );
})
