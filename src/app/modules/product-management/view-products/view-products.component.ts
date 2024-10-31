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

  addToCart(): void {
    // Check if selectedQuantity is valid
    if (this.selectedQuantity < 1) {
      console.error('Invalid quantity selected'); // Log error if quantity is invalid
      return; // Exit if the quantity is not valid
    }

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
      this.resetSelectedQuantity(); // Reset selected quantity after adding to cart
    }, 3000); // 3000 milliseconds = 3 seconds
  }

  private resetSelectedQuantity(): void {
    this.selectedQuantity = 1; // Reset to default value
  }
}
