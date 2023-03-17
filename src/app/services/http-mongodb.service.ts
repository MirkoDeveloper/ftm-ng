import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class HttpMongodbService {
	mongoDbUrl = 'http://localhost:8080';

	constructor(private http: HttpClient) {}

	projectRequest(body: {}) {
		return this.http.get(this.mongoDbUrl + '/ftm/progetti', body);
	}
}
