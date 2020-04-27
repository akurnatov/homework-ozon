import { Component, Prop } from 'vue-property-decorator'
import { VueComponent } from '@/shims-vue'

import styles from './Calculator.css?module'

interface Props {
  msg: string
}

@Component
export default class Calculator extends VueComponent<Props> {

  @Prop()
  private msg!: string

  render () {
    return (
      <div onkeypress__delete={ () => this.test }>
        <h1>{ this.msg }</h1>
        <div class={ styles['calculator'] }>

          <input disabled="disabled" value="" class={ [styles['calculator-screen'], styles['calculator-screen__buffer']] }/>
          <input disabled="disabled" value="0" class={ [styles['calculator-screen'], styles['calculator-screen__output']] }/>

          <div class={ styles['calculator-keys'] }>

            <button type="button" value="7">7</button>
            <button type="button" value="8">8</button>
            <button type="button" value="9">9</button>
            <button type="button" class={ [styles['button--brown'], styles['reset']] } value="all-clear">C</button>

            <button type="button" value="4">4</button>
            <button type="button" value="5">5</button>
            <button type="button" value="6">6</button>
            <button type="button" class={ styles['button--brown'] } value="-">-</button>

            <button type="button" value="1">1</button>
            <button type="button" value="2">2</button>
            <button type="button" value="3">3</button>
            <button type="button" class={ styles['button--brown'] } value="+">+</button>

            <button type="button" class={ styles['zero'] } value="0">0</button>
            <button type="button" class={ styles['button--brown'] } value="=">=</button>

          </div>
        </div>
      </div>
    )
  }

  created () {
    window.addEventListener('keyup', e => {
      if (e.key === '=') console.log('=')
      if (e.key === 'c') console.log('c')
    })
  }
}
