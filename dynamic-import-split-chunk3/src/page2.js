
import comp from './shared-comp'
export default () => {
  import('./page3' /* webpackChunkName: "page3" */ ).then(({ default: page}) => {
    page()
    comp()
    console.log('page2')
  })
}