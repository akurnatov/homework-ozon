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

  buffer: string = ''
  expression: string = ''

  render () {
    return (
      <div>
        <h1>{ this.msg }</h1>
        <div class={ styles['calculator'] }>

          <input disabled="disabled"
                 v-model={ this.buffer }
                 class={ [styles['calculator-screen'], styles['calculator-screen__buffer']] }/>
          <input disabled="disabled"
                 placeholder="0"
                 v-model={ this.expression }
                 class={ [styles['calculator-screen'], styles['calculator-screen__output']] }/>

          <div class={ styles['calculator-keys'] }>

            <button onclick={ this.press }>7</button>
            <button onclick={ this.press }>8</button>
            <button onclick={ this.press }>9</button>
            <button onclick={ this.press } class={ [styles['button--brown'], styles['reset']] } value="all-clear">C</button>

            <button onclick={ this.press }>4</button>
            <button onclick={ this.press }>5</button>
            <button onclick={ this.press }>6</button>
            <button onclick={ this.press } class={ styles['button--brown'] } value="-">-</button>

            <button onclick={ this.press }>1</button>
            <button onclick={ this.press }>2</button>
            <button onclick={ this.press }>3</button>
            <button onclick={ this.press } class={ styles['button--brown'] } value="+">+</button>

            <button onclick={ this.press } class={ styles['zero'] } value="0">0</button>
            <button onclick={ this.press } class={ styles['button--brown'] } value="=">=</button>

          </div>
        </div>
      </div>
    )
  }

  created () {
    window.addEventListener('keyup', e => {
      if (e.key === '=') this.calculate()
      if (e.key === 'c') this.reset()
    })
  }

  press (e: object) {
    let key: string = e.target.innerText

    if (key != '=' && key != 'C') this.expression += key
    if (key === '=') this.calculate()
    if (key === 'C') this.reset()
  }

  calculate (): void {
    let result = eval(this.expression)
    this.buffer = `${ this.expression }=${ result }`
    this.expression = ''
  }

  reset (): void {
    this.buffer = this.expression = ''
  }
}
