import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  imports: [],
})
export class Footer {
  public footerFix = false;
  public footerLight = false;
  public footerDark = false;
  public currentYear = new Date().getFullYear();

  ngDoCheck() {
    if (window.location.pathname.includes('/page-layout/footer-dark')) {
      this.footerDark = true;
      this.footerLight = false;
      this.footerFix = false;
    } else if (window.location.pathname.includes('/page-layout/footer-light')) {
      this.footerLight = true;
      this.footerDark = false;
      this.footerFix = false;
    } else if (window.location.pathname.includes('/page-layout/footer-fixed')) {
      this.footerFix = true;
      this.footerLight = false;
      this.footerDark = false;
    }
  }
}
