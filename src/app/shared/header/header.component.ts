import { Component, OnInit } from '@angular/core';
import { HandleDataService } from 'src/app/services/handle-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: HandleDataService) { }

  languages = ['en', 'es'];
  ngOnInit(): void {
  }

  setLang(lang: string) {
    this.service.setLang(lang);
  }
}
