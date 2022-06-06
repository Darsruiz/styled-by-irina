import { Component, ViewEncapsulation, ViewChild, Input } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Observable } from "rxjs";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent {
  @Input() images: Observable<string[]> | undefined;
  constructor() { }

}
