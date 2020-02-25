
export default () => {
  import('./page3' /* webpackChunkName: "page3" */ ).then(({ default: page}) => {
    page()
    console.log('page2')
  })
}