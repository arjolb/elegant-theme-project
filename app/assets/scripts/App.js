import MobileMenu from './modules/MobileMenu';
import PortfolioGallery from './modules/PortfolioGallery/FilterCategories';
import TestimonialSlide from './modules/TestimonialSlide';
import RevealOnScroll from './modules/RevealOnScroll';
import ToTheTop from './modules/ToTheTop';
import SmoothScroll from './modules/SmoothScroll';
import $ from 'jquery';

new SmoothScroll();
new ToTheTop();
new RevealOnScroll($(".info-works"),"60%",$(".our-skills"),"40%");
new TestimonialSlide();
new PortfolioGallery();
new MobileMenu();