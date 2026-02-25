import { Routes } from '@angular/router';

import { AddProduct } from './add-product/add-product';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Invoice } from './invoice/invoice';
import { OrderHistory } from './order-history/order-history';
import { PaymentDetails } from './payment-details/payment-details';
import { Pricing } from './pricing/pricing';
import { Product } from './product/product';
import { ProductList } from './product-list/product-list';
import { ProductPage } from './product-page/product-page';
import { Wishlist } from './wishlist/wishlist';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'product',
    component: Product,
    data: {
      title: 'Product',
      breadcrumb: 'Product',
      animation: [routingAnimation],
    },
  },
  {
    path: 'product-page',
    component: ProductPage,
    data: {
      title: 'Product Page',
      breadcrumb: 'Product Page',
      animation: [routingAnimation],
    },
  },
  {
    path: 'product-list',
    component: ProductList,
    data: {
      title: 'Product List',
      breadcrumb: 'Product List',
      animation: [routingAnimation],
    },
  },
  {
    path: 'order-history',
    component: OrderHistory,
    data: {
      title: 'Order History',
      breadcrumb: 'Order History',
      animation: [routingAnimation],
    },
  },
  {
    path: 'payment-details',
    component: PaymentDetails,
    data: {
      title: 'Payment Details',
      breadcrumb: 'Payment Details',
      animation: [routingAnimation],
    },
  },
  {
    path: 'invoice',
    component: Invoice,
    data: {
      title: 'Invoice',
      breadcrumb: 'Invoice',
      animation: [routingAnimation],
    },
  },
  {
    path: 'cart',
    component: Cart,
    data: {
      title: 'Cart',
      breadcrumb: 'Cart',
      animation: [routingAnimation],
    },
  },
  {
    path: 'wishlist',
    component: Wishlist,
    data: {
      title: 'Wishlist',
      breadcrumb: 'Wishlist',
      animation: [routingAnimation],
    },
  },
  {
    path: 'checkout',
    component: Checkout,
    data: {
      title: 'Checkout',
      breadcrumb: 'Checkout',
      animation: [routingAnimation],
    },
  },
  {
    path: 'pricing',
    component: Pricing,
    data: {
      title: 'Pricing',
      breadcrumb: 'Pricing',
      animation: [routingAnimation],
    },
  },
  {
    path: 'add-product',
    component: AddProduct,
    data: {
      title: 'Add Product',
      breadcrumb: 'Add Product',
      animation: [routingAnimation],
    },
  },
] as Routes;
