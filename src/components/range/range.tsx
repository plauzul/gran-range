import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'gran-range',
  styleUrl: 'range.css',
  shadow: true
})
export class Range {

  /**
   * Valor atual do range
   */
  @Prop() value: number;

  /**
   * Valor minimo do range
   */
  @Prop() min: number;

  /**
   * Valor maximo do range
   */
  @Prop() max: number;

  /**
   * Disparado quando o usuario solta o range
   */
  @Event() pressed: EventEmitter;

  /**
   * Disparado quando o usuario movimenta o range
   */
  @Event() press: EventEmitter;

  /**
   * Referencia do range 
   */
  private rangeInput?: HTMLInputElement;

  /**
   * Emitido quando o usuario deixa de pressionar o range
   */
  onPressed() {
    this.pressed.emit(this.rangeInput.value);
  }

  /**
   * Emitido equanto o usuario pressiona o range
   */
  onPress() {
    this.press.emit(this.rangeInput.value);
  }

  render() {
    return (
      <div class="range-slider">
        <input
          class="range"
          type="range"
          value={this.value}
          min={this.min}
          max={this.max}
          ref={el => this.rangeInput = el as HTMLInputElement}
          onChange={this.onPressed.bind(this)}
          onInput={this.onPress.bind(this)} />
      </div>
    );
  }

}
