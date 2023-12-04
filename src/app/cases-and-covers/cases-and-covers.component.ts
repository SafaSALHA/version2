import { Component , OnInit ,ElementRef ,ApplicationRef} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cases-and-covers',
  templateUrl: './cases-and-covers.component.html',
  styleUrls: ['./cases-and-covers.component.css']
})
export class CasesAndCoversComponent {

  Cases_and_covers = [
    {name: "Silicone Case for HUAWEI GR3 Smartphone" , src:"./assets/images/Silicone.jpg" , prix:"5,000DT"},
    {name: "Silicone Ear Case for iPhone 6" , src:"./assets/images/iPhone_6.jpg" , prix:"10,000DT"},
    {name: "Silicone Case for Samsung Galaxy A32" , src:"./assets/images/Silicone_Case.jpg" , prix:"15,000DT"},
    {name: "Silicone Case for SAMSUNG Galaxy A72" , src:"./assets/images/Galaxy_A72.jpg" , prix:"17,000DT"},
    {name: "iPhone 13 Pro Case - Purple" , src:"./assets/images/iPhone_13.jpg" , prix:"20,000DT"},
    {name: "Flip Cover TOTU DESIGN For iPhone 7" , src:"./assets/images/iPhone_7.jpg" , prix:"25,00DT"},
    {name: "Flip Cover Samsung Galaxy S6 Edge" , src:"./assets/images/Flip.jpg" , prix:"30,000DT"},
    {name: "Power Protective Case for iPhone 4" , src:"./assets/images/Power.jpg" , prix:"35,000DT"},
    {name: "Original Silicone Case for iPhone XS" , src:"./assets/images/Original.jpg" , prix:"39,000DT"},
    {name: "Original Silicone Case for iPhone 8 Plus" , src:"./assets/images/OriginalSilicone.jpg" , prix:"59,000DT"},
    {name: "Original SAMSUNG Galaxy Silicone Case for Z Flip5" , src:"./assets/images/OriginalSAMSUNG.jpg" , prix:"150,000DT"},
    {name: "SAMSUNG Galaxy S Pen Slim Case For Z Fold5" , src:"./assets/images/samsung-galaxy.jpg" , prix:"299,000DT"},
  ]


  itemsPerPage = 6;
  currentPage = 1;
  constructor(private route: ActivatedRoute, private router: Router , private location: Location , private appRef: ApplicationRef , private el: ElementRef) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
    });
  }

  get paginatedCases_and_covers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.Cases_and_covers.slice(startIndex, endIndex);
  }

  numberOfPages() {
    return Math.ceil(this.Cases_and_covers.length / this.itemsPerPage);
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
