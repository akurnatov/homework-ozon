import { Component, Vue } from 'vue-property-decorator';
import Calculator from './components/calculator/Calculator';

import './App.css'

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <img alt="Vue logo" src={require('./assets/logo.png')} />
        <Calculator msg="Kurnatov Aleksey | homework"/>
      </div>
    )
  }
}
