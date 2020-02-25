function component() {
  const element = document.createElement('div');

  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  })

  
}

component().then(element => {
  document.body.appendChild(element);
})

