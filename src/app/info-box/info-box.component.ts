import { Component, OnInit } from '@angular/core';
//ngFor import
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatListModule  } from '@angular/material/list'
import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule, MatButton, MatFormField, MatInput, MatLabel, MatListModule, MatExpansionModule, MatAccordion ],
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
  text = "Additional Info-Text on our Info Box! 🎊";
  hidden = false;
  books = [
    {
      title: "Book #1",
      subtitle: "Subtitle #1",
    },
    {
      title: "Book #2",
      subtitle: "Subtitle #2",
    },
    {
      title: "Book #3",
      subtitle: "Subtitle #3",
    },
  ];

  constructor() {}

  ngOnInit() {}
}