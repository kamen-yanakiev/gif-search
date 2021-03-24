import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public categories = [
    'Graphics', 'Addons', 'Buttons', 'Infographics',
    'PSDs', 'Fonts', 'Forms', 'Graphs',
    'Icons', 'Textures', 'GUI', 'Logos',
    'Templates', 'Patterns', 'Navigation', 'Vectors',
    'Themes', 'Backgrounds', 'UI Kits', 'Business Cards'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
