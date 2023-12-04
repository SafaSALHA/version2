import { Component , OnInit ,ElementRef ,ApplicationRef} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-earphone',
  templateUrl: './earphone.component.html',
  styleUrls: ['./earphone.component.css']
})
export class EarphoneComponent {

  Earphone = [
    {name: "KINGLEEN I12 Wired Earphones" , src:"./assets/images/KINGLEEN.jpg" , prix:"5,000DT"},
    {name: "INKAX EP-22 Wired Earphones" , src:"./assets/images/Ecouteurs.jpg" , prix:"8,500DT"},
    {name: "Wired Earphones" , src:"./assets/images/Ecouteurs_Filaires.jpg" , prix:"14,800DT"},
    {name: "XIAOMI Mi Basic Wired Earphones" , src:"./assets/images/Écouteurs_Filaires_XIAOMI_MiBasic.jpg" , prix:"17,000DT"},
    {name: "EC-IOS12 Wired Earphones" , src:"./assets/images/EC-IOS12.jpg" , prix:"19,900DT"},
    {name: "TRAXDATA M07 Jack Wired Earphones" , src:"./assets/images/Écouteurs_Filaires_Jack.jpg" , prix:"20,900DT"},
    {name: "JBL T110 Wired In-Ear Headphones" , src:"./assets/images/JBLJBL_T110.jpg" , prix:"38,000DT"},
    {name: "APPLE Wired Headphones IPhone Hands-Free Kit" , src:"./assets/images/APPLE.jpg" , prix:"40,000DT"},
    {name: "ENERGY SISTEM Sport Wired Headphones 429356" , src:"./assets/images/ENERGY.jpg" , prix:"59,000DT"},
    {name: "BIGBEN Lightning In-Ear Wired Earphones" , src:"./assets/images/BIGBEN.jpg" , prix:"99,000DT"},
    {name: "JBL Bluetooth Tune T205BT Headphones" , src:"./assets/images/Ecouteurs_JBL.jpg" , prix:"135,000DT"},
    {name: "ONEPLUS Wireless Z Wireless Headphones" , src:"./assets/images/ONEPLUS.jpg" , prix:"159,000DT"},


  ]


  itemsPerPage = 6;
  currentPage = 1;
  constructor(private route: ActivatedRoute, private router: Router , private location: Location , private appRef: ApplicationRef , private el: ElementRef) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
    });
  }

  get paginatedEarphone() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.Earphone.slice(startIndex, endIndex);
  }

  numberOfPages() {
    return Math.ceil(this.Earphone.length / this.itemsPerPage);
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;


    const queryParams = { page: pageNumber };

    // Utilisez location.go pour naviguer sans recharger la page
    this.location.go(this.router.createUrlTree([], { relativeTo: this.route, queryParams }).toString());

    // Forcer le rafraîchissement manuel de la zone
    this.appRef.tick();
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  createNumberArray(): number[] {
    return Array.from({ length: this.numberOfPages() }, (_, index) => index + 1);
  }
  isPageActive(pageNumber: number): boolean {
    return this.currentPage === pageNumber;
  }
}
