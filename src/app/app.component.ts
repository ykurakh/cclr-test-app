import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public src = 'assets/pdfs/pdf-sample.pdf';

  public url = new URL('http://pdfviewer.net/assets/pdfs/GraalVM.pdf');
}
