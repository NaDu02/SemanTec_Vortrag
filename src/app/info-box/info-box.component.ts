import { Component, OnInit } from '@angular/core';
//ngfor import
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
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