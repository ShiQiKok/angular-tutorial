import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // initialize
  @Input() text: string = 'Click'
  // declaration (w/o initializer => add postfix '!' to the property name)
  @Input() color!: string
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit()
  }

}
