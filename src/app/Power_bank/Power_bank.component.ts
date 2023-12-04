import { Component , OnInit ,ElementRef ,ApplicationRef} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-Power_bank',
  templateUrl: './Power_bank.component.html',
  styleUrls: ['./Power_bank.component.css']
})
export class PowerBankComponent {
  Power_bank = [
    {name: "Power Bank UEELR 3X 10000 Mah With Display" , src:"./assets/images/Power_Bank_UEELR.jpg" , prix:"27,000DT"},
    {name: "Power Bank XIAOMI VXN4305GL10000 mAh" , src:"./assets/images/Power_Bank_XIAOMI.jpg" , prix:"55,000DT"},
    {name: "Power Bank KINGLEEN G20 20000 mAh" , src:"./assets/images/G20.jpg" , prix:"78,000DT"},
    {name: "XIAOMI BHR5460GL 10W Wireless Power Bank" , src:"./assets/images/XIAOMI.jpg" , prix:"95,000DT"},
    {name: "Wireless ASPOR A326 15W 10000 Mah" , src:"./assets/images/Wireless.jpg" , prix:"119,000DT"},
    {name: "Power Bank XIAOMI BHR5121GL 50W 20000 Mah" , src:"./assets/images/50W.jpg" , prix:"199,000DT"},
    {name: "Power Bank ITEL 27000 mAh" , src:"./assets/images/Power_Bank_ITEL.jpg" , prix:"149,00DT"},
    {name: "LENOVO GO USB-C Power Bank For Laptop" , src:"./assets/images/LENOVO.jpg" , prix:"435,000DT"},
  ]

  itemsPerPage = 6;
  currentPage = 1;
  constructor(private route: ActivatedRoute, private router: Router , private location: Location , private appRef: ApplicationRef , private el: ElementRef) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
    });
  }

  get paginatedPower_bank () {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.Power_bank .slice(startIndex, endIndex);
  }

  numberOfPages() {
    return Math.ceil(this.Power_bank .length / this.itemsPerPage);
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
