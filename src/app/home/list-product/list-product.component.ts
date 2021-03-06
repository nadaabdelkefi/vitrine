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
              baseContext.productTab();
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

  productTab(){
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
    jQuery('#product-tab .featured_carousel_tab, #product-tab .latest_carousel_tab, #product-tab .bestseller_carousel_tab, #product-tab .special_carousel_tab').flexslider({
      animation: "slide",
      animationLoop: false,
	  slideshow: false,
      itemWidth: 210,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize(), // use function to pull in initial value
	  start: function(){
      jQuery("#product-tab .tab_content").addClass("deactive");
      jQuery("#product-tab .tab_content:first").removeClass("deactive"); //Show first tab content
      } });

      jQuery("ul#tabs li:first").addClass("active").show(); //Activate first tab
    //On Click Event
      jQuery(document).ready(function(){
      jQuery("ul#tabs li").click(function() {
          jQuery("ul#tabs li").removeClass("active"); //Remove any "active" class
          jQuery(this).addClass("active"); //Add "active" class to selected tab
          jQuery("#product-tab .tab_content").hide(); 
          var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
          jQuery(activeTab).fadeIn(); //Fade in the active content
          return false;
      });
    });
  }

}
