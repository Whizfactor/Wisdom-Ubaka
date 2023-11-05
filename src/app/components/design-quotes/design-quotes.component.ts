import { Component, OnInit } from '@angular/core';
import { DesignQuotesService } from '../../services/design-quotes.service';

@Component({
  selector: 'app-design-quotes',
  templateUrl: './design-quotes.component.html',
  styleUrls: ['./design-quotes.component.css']
})
export class DesignQuotesComponent implements OnInit {
  quotes: any;

  constructor(private quotesService: DesignQuotesService) { }

  ngOnInit() {
    this.quotesService.getQuotes().subscribe(quotes => {
      this.quotes = quotes;
    });
  }

}