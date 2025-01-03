import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
    routes = [
      {
        title: 'Wedding Photoshoot',
        description:
          "Your wedding day is a once-in-a-lifetime event, and we are here to capture every beautiful moment. From the intimate exchange of vows to the joyous celebration with family and friends, our team will preserve the love and emotion of your special day. Whether you're looking for elegant portraits or candid, heartfelt moments, we'll create timeless images that tell your unique love story. Let us turn your wedding memories into cherished photographs that you'll treasure forever.",
        image: 'assets/Wedding.jpg'
      },
      {
        title: 'Pre Wedding Shoots',
        description:
          "Celebrate your love before the big day with a pre-wedding photoshoot that captures the excitement and anticipation of your journey together. Whether it’s a cozy, intimate session or an adventurous shoot in stunning locations, our team will create beautiful and meaningful images that reflect your personalities and love story. These pre-wedding photos will not only mark the beginning of your new chapter but also provide you with timeless memories to cherish for years to come.",
        image: 'assets/prewedding.jpg'
      },
      {
        title: 'Candid Photography',
        description:
          "Capture the genuine moments of joy and love with candid photography. Our expert photographers specialize in photographing real emotions, offering natural and spontaneous shots that tell a true story. Let us preserve those fleeting moments of happiness, laughter, and connection, creating memories that will last a lifetime.",
        image: 'assets/candid.jpg'
      },
      {
        title: 'All Function PhotoShoot',
        description:
          "From birthdays and housewarming parties and other special events, we capture the essence of every celebration. Our photographers are skilled at preserving the joy, excitement, and unique moments of any occasion, ensuring that your memories are beautifully documented. Whether it's a small gathering or a grand celebration, let us turn your functions into timeless photographs.",
        image: 'assets/birthday.jpg'
      }
    ];

    constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
  }
  

