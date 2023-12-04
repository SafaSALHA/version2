import { Component } from '@angular/core';

@Component({
  selector: 'app-proudcts',
  templateUrl: './proudcts.component.html',
  styleUrls: ['./proudcts.component.css']
})
export class ProudctsComponent {

   helmet = [
    {name: "Wired Headset Microphone" , src:"./assets/images/Wired_Headset_Microphone.jpg" , prix:"9,800DT"},
    {name: "Wireless Headset" , src:"./assets/images/Wireless_Headset.jpg" , prix:"20,900DT"},
    {name: "HAMA Wireless Headphones" , src:"./assets/images/HAMA_Wireless_Headphones.jpg" , prix:"70,000DT"},
    {name: "JBL Wireless Headset Microphone" , src:"./assets/images/JBL_Wireless_Headset_Microphone.jpg" , prix:"500,000DT"},
  ]
  Earphone = [
    {name: "Wired Earphones" , src:"./assets/images/Ecouteurs_Filaires.jpg" , prix:"14,800DT"},
    {name: "XIAOMI Mi Basic Wired Earphones" , src:"./assets/images/Écouteurs_Filaires_XIAOMI_MiBasic.jpg" , prix:"17,000DT"},
    {name: "TRAXDATA M07 Jack Wired Earphones" , src:"./assets/images/Écouteurs_Filaires_Jack.jpg" , prix:"20,900DT"},
    {name: "JBL Bluetooth Tune T205BT Headphones" , src:"./assets/images/Ecouteurs_JBL.jpg" , prix:"135,000DT"},
  ]
  Cases_and_covers = [
    {name: "Silicone Ear Case for iPhone 6" , src:"./assets/images/iPhone_6.jpg" , prix:"10,000DT"},
    {name: "Silicone Case for SAMSUNG Galaxy A72" , src:"./assets/images/Galaxy_A72.jpg" , prix:"17,000DT"},
    {name: "Flip Cover TOTU DESIGN For iPhone 7" , src:"./assets/images/iPhone_7.jpg" , prix:"25,00DT"},
    {name: "SAMSUNG Galaxy S Pen Slim Case For Z Fold5" , src:"./assets/images/samsung-galaxy.jpg" , prix:"299,000DT"},
  ]
  Smartphone_holder = [
    {name: "Support Smartphone à Ventouse" , src:"./assets/images/Support_Smartphone_Ventouse.jpg" , prix:"10,000DT"},
    {name: "TTEC 2TT12 Smartphone Holder" , src:"./assets/images/Smartphone_Holder.jpg" , prix:"25,000DT"},
    {name: "KSIX Universal B9000SE01 Desk Holder " , src:"./assets/images/Smartphone.jpg" , prix:"35,00DT"},
    {name: "SANDBERG 134-29 With Motion Tracking" , src:"./assets/images/SANDBERG.jpg" , prix:"154,000DT"},
  ]
  Power_bank = [
    {name: "Power Bank UEELR 3X 10000 Mah With Display" , src:"./assets/images/Power_Bank_UEELR.jpg" , prix:"27,000DT"},
    {name: "Power Bank XIAOMI VXN4305GL10000 mAh" , src:"./assets/images/Power_Bank_XIAOMI.jpg" , prix:"55,000DT"},
    {name: "Power Bank ITEL 27000 mAh" , src:"./assets/images/Power_Bank_ITEL.jpg" , prix:"149,00DT"},
    {name: "LENOVO GO USB-C Power Bank For Laptop" , src:"./assets/images/LENOVO.jpg" , prix:"435,000DT"},
  ]
 // products = ['helmet' , 'Earphone' ,'Cases and covers', 'Screen Protection', 'Power bank']
}
