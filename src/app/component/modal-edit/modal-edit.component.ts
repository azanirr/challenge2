import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MentorService} from '../../services/mentor.service';


@Component({
  selector: 'ngbd-modal-edit-basic',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  
  @Input() dataSource;

  mail: string = ""
  civility: string = ""
  first_name : string = ""
  last_name : string = "";
  position: string = "";
  phone: string = "";
  direct_line : string = "";
  mobile_phone : string = "";
  company : string ="";
  entity : string = "";
  user_type : string = "";
  validate : string = "";

  
  @Output() req = new EventEmitter();

  ngOnInit(): void {
    this.mail = this.dataSource.email
    this.civility = this.dataSource.civility
    this.first_name = this.dataSource.first_name
    this.last_name = this.dataSource.last_name
    this.entity = this.dataSource?.company?.name
    this.user_type = this.dataSource?.company?.user_type

  }
 

  constructor(private modalService: NgbModal, private mentorService: MentorService) {}

  validateMail(mail) {
    console.log(mail);
    if(this.dataSource.find(el => el.email == mail)) {
      return this.validate = "false";
    } else if (this.dataSource.find(el => el.email != mail)){
      return this.validate = "true";
    } 
  }

  onSubmit() {
    const req = {
      _id: this.dataSource._id,
      email: this.mail,
      civility: this.civility,
      first_name: this.first_name,
      last_name: this.last_name,
      company: {
        name: this.company,
        user_type: this.user_type,
      },
      user_status: this.dataSource.user_status,
      count_document: this.dataSource.count_document
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

