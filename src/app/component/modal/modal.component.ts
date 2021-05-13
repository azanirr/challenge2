import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MentorService} from '../../services/mentor.service';


@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss', './modal.css']
})
export class ModalComponent implements OnInit {

  mail: string = "";
  civility: string = "";
  first_name : string = "";
  last_name : string = "";
  position: string = "";
  phone: string = "";
  direct_line : string = "";
  mobile_phone : string = "";
  company : string ="";
  entity : string = "";
  user_type : string = "";
  validate : string = "";

  @Input() dataSource;

  @Output() req = new EventEmitter();

  ngOnInit(): void {
  }
  closeResult = '';

  constructor(private modalService: NgbModal, private mentorService: MentorService) {}

  validateMail(mail) {
    console.log(mail);
    if(this.dataSource.find(el => el.email == mail)) {
      return this.validate = "false";
    } else if (this.dataSource.find(el => el.email != mail)){
      return this.validate = "true";
    } 
  }

  onEdit() {
    const req = {
      _id: this.dataSource.length + 1,
      email: this.mail,
      civility: this.civility,
      first_name: this.first_name,
      last_name: this.last_name,
      company: {
        name: this.company,
        user_type: this.user_type,
      },
      user_status: 'pending',
      count_document: '15'
    }
    this.req.emit(req);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}

