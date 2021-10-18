import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  loading: any = false;
  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loading = this.loaderService.getIsLoading();
    console.log(this.loaderService.getIsLoading());
  }
}
