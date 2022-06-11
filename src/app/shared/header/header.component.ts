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
  activeLang: string | undefined;
  ngOnInit(): void {
    this.service.eventCallback$
      .subscribe(x => this.setActiveLang(x));

    this.setBrowserLang();
  }

  setBrowserLang() {
    let lang = navigator.language.slice(0, 2).toLowerCase()
    if (lang == ('es' || 'ca')) {
      this.setLang('es')
    }
    this.activeLang = lang;
  }

  setLang(lang: string) {
    this.service.setLang(lang);
  }

  setActiveLang(lang: string) {
    this.activeLang = lang;
  }
}
