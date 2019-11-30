import {Component, OnInit} from '@angular/core';
import {ProduitService} from '../../shared/services/produit.service';
import {Produit} from '../../shared/models/produit';

declare var jQuery: any;

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  produits: Produit[] = [];

  constructor(private produitServices: ProduitService) {
  }

  ngOnInit() {

    this.getListProduit();


  }

  getListProduit() {
    let baseContext = this;
    this.produitServices.getProduits()
      .subscribe(
        (data) => {
          this.produits = data;
          console.log(this.produits);

          setTimeout(
            function () {
              baseContext.loadSlider();
            }, 500
          );

        },
        (error) => {

        }
      );
  }


  loadSlider() {
    // store the slider in a local variable
    var $window = jQuery(window),
      flexslider;

    // tiny helper function to add breakpoints
    function getGridSize() {
      return (window.innerWidth < 320) ? 1 :
        (window.innerWidth < 600) ? 2 :
          (window.innerWidth < 800) ? 3 :
            (window.innerWidth < 900) ? 4 : 5;
    }

    jQuery('#content .featured_carousel').flexslider({
      animation: 'slide',
      animationLoop: false,
      slideshow: false,
      itemWidth: 210,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });

  }

}
