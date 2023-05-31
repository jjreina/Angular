import { ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gitsService: GifsService) {}

  searchTag() {
    const newTag: string = this.tagInput.nativeElement.value;
    this.gitsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
