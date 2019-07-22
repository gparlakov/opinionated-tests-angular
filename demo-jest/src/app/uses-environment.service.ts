import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsesEnvironmentService {

  constructor() { }

  prod() {
    return environment.production;
  }
 }
