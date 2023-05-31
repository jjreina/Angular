import { ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor() {}

  searchTag() {
    const newTag: string = this.tagInput.nativeElement.value;
    console.log(newTag);
  }
}
