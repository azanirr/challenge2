import {AfterViewInit, OnInit, Component, ViewChild} from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
import {MentorService} from '../../services/mentor.service';


@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['name', 'user type', 'entity', 'status', 'action'];
  // dataSource = new MatTableDataSource;
  
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = [];

  ngOnInit(): void {
    this.dataSource = this.mentorService.getAllMentor();
  }

  constructor(private mentorService: MentorService) { }

  addTask(req){
    this.mentorService.addMentor(req);
    setTimeout(() => {
      this.dataSource = this.mentorService.getAllMentor();
    },2000)
  }
  edit(req) {
    this.mentorService.editMentor(req);
    setTimeout(() => {
      this.dataSource = this.mentorService.getAllMentor();
    },2000)
  }
  ngAfterViewInit(): void {
    

  }

}
