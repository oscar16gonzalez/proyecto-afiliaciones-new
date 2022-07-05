import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoMembershipComponent } from 'app/modals/modal-info-membership/modal-info-membership.component';
import { MembershipService } from 'app/services/membership/membership.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  dataUserMembership: any = [];
  dataUser;

  constructor(private membershipService: MembershipService, public dialog: MatDialog,) { }

  ngOnInit() {
    this.dataUser = JSON.parse(localStorage.getItem('infoUser'));
    this.getMembership();

  }

  getMembership() {

      
    
    this.membershipService.getMembership().subscribe(
      (data) => {
        this.dataUserMembership = data;
        for (let index = 0; index < this.dataUserMembership.length; index++) {
          // const element = this.dataUserMembership[index].proyectos;

          // const found = this.dataUserMembership.find(element => element === this.dataUser.proyectos);

          // console.log("----...----", found);
          

          
        }
      })

      console.log("CONSULTA GET MEMBERSHIP", this.dataUserMembership);
      
  }

  openDialog(cedula) {

    const dialogRef = this.dialog.open(ModalInfoMembershipComponent, {
      width: '1200px',
      data: { cedula }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result----: ${result}`);
      if (result) {
        this.getMembership();
      }
    });
  }

}
