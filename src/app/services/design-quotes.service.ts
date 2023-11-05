import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class DesignQuotesService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getQuotes(): Observable<any> {
    return this.http.get<any>('https://quotesondesign.com/wp-json/wp/v2/posts?orderby=rand')
      .pipe(
        map(quotes => quotes.map(quote => {
          return {
            content: this.sanitizer.bypassSecurityTrustHtml(quote.content.rendered)
          };
        })
      )
    );
  }


}