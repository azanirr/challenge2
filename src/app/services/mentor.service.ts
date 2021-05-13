import { Injectable } from '@angular/core';
import {mentor} from '../../mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor() { }

  getAllMentor() {
    return mentor;
  }

  addMentor(req) {
    let filter = mentor;
    filter.push(req);
    return filter; 
  }
  editMentor(req) {
    let filter = mentor;
    for(let i = 0; i < filter.length; i++) {
      if (filter[i]._id == req._id) {
        filter[i] = req;
      }
    }
    return filter;
  }
}
