import { Component, OnInit } from '@angular/core';
import { HttpMongodbService } from 'src/app/services/http-mongodb.service';

@Component({
	selector: 'app-progetti',
	templateUrl: './progetti.component.html',
	styleUrls: ['./progetti.component.scss'],
})
export class ProgettiComponent implements OnInit {
	// ngOnInit(): void {
	//   this.http.
	// }

	constructor(private http: HttpMongodbService) {}
}
