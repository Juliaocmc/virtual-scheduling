import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() {

   }

   sendForm(form: string) {
      console.log(`voce mandou ${form}`)
   }
}
