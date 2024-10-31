import { Component, OnInit } from '@angular/core';
import { FuseConfirmationService } from '@fuse/services/confirmation'; // Adjust import based on your Fuse configuration

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  selectedQuantity: number = 1; // Default quantity

  constructor(private confirmationService: FuseConfirmationService) { }

  ngOnInit(): void { }

  addToCart() {
    const confirmation = this.confirmationService.open({
      title: 'Item Added to Cart',
      message: `Successfully added ${this.selectedQuantity} item(s) to the cart!`,
      icon: { 
        show: true, 
        name: 'check_circle', // Success icon
        color: 'success' // Optional: Set color for the icon if supported
      },
      actions: {
        confirm: {
          show: false, // Hide the confirm button
        },
        cancel: {
          show: false // Hide the cancel button
        }
      }
    });
  
    // Automatically close the confirmation after 3 seconds
    setTimeout(() => {
      confirmation.close(); // Close the confirmation dialog
    }, 3000); // 3000 milliseconds = 3 seconds
  }
  
  
  
}
