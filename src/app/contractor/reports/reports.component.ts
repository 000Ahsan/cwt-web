import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorService } from '../../core/services/contractor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contractor-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styles: []
})
export class ContractorReportsComponent implements OnInit {
  private contractorService = inject(ContractorService);
  private route = inject(ActivatedRoute);

  reportTitle = 'Daily Summary';
  reportData: any[] = [];
  isWeekly = false;

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.isWeekly = url.some(segment => segment.path === 'weekly');
      this.reportTitle = this.isWeekly ? 'Weekly Summary' : 'Daily Summary';
      this.loadReport();
    });
  }

  loadReport() {
    if (this.isWeekly) {
      this.contractorService.getWeeklyReports().subscribe(data => this.reportData = data);
    } else {
      this.contractorService.getDailyReports().subscribe(data => this.reportData = data);
    }
  }
}
