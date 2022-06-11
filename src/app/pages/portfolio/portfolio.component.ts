import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleDataService } from 'src/app/services/handle-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  images: Observable<string[]> | undefined;
  images2: Observable<string[]> | undefined;
  constructor(private service: HandleDataService) { }

  ngOnInit(): void {
    this.images = this.service.getImages();
    this.images2 = this.service.getImages2();
  }

}
