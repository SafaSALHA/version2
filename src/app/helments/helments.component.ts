import { Component , OnInit ,ElementRef ,ApplicationRef} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-helments',
  templateUrl: './helments.component.html',
  styleUrls: ['./helments.component.css']
})
export class HelmentsComponent implements OnInit {
  helmet = [
    {name: "Wired Headset Microphone" , src:"./assets/images/Wired_Headset_Microphone.jpg" , prix:"9,800DT"},
    {name: "OAKORN P47 Bluetooth Wireless Stereo " , src:"./assets/images/OAKORN.jpg" , prix:"16,00DT"},
    {name: "FREESTYLE FH4088 Wired Headset Microphone" , src:"./assets/images/FREESTYLE.jpg" , prix:"19,000DT"},
    {name: "Wireless Headset" , src:"./assets/images/Wireless_Headset.jpg" , prix:"20,900DT"},
    {name: "JEDEL GH-251 RGB Gaming Headset Microphone" , src:"./assets/images/JEDEL.jpg" , prix:"36,000DT"},
    {name: "Filiare BOROFONE BO101 Stereo" , src:"./assets/images/Filiare.jpg" , prix:"46,000DT"},
    {name: "VARR VH8030 RGB Gaming Headset Microphone" , src:"./assets/images/VARR.jpg" , prix:"65,000DT"},
    {name: "HAMA Wireless Headphones" , src:"./assets/images/HAMA_Wireless_Headphones.jpg" , prix:"70,000DT"},
    {name: "Gamer Redragon Pandora H350RGB" , src:"./assets/images/Gamer.jpg" , prix:"79,900DT"},
    {name: "JBL T500 Wired Headset Microphone" , src:"./assets/images/JBL.jpg" , prix:"99,000DT"},
    {name: "GUESS Wireless Headphones" , src:"./assets/images/GUESS.jpg" , prix:"150,000DT"},
    {name: "JBL Wireless Headset Microphone" , src:"./assets/images/JBL_Wireless_Headset_Microphone.jpg" , prix:"500,000DT"},

  ]
  itemsPerPage = 6;
  currentPage = 1;
  constructor(private route: ActivatedRoute, private router: Router , private location: Location , private appRef: ApplicationRef , private el: ElementRef) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
    });
  }

  get paginatedHelmet() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.helmet.slice(startIndex, endIndex);
  }

  numberOfPages() {
    return Math.ceil(this.helmet.length / this.itemsPerPage);
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
