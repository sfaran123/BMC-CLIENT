import {Component, OnInit, ViewChild} from '@angular/core';
import {PencilPaper, Trash} from 'src/app/shared/_consts/img-paths';
import {DataTableComponent} from 'src/app/shared/_components/data-table/data-table.component';
import {BranchesService} from 'src/app/shared/_services/http/branches.service';
import {Router} from '@angular/router';

import {DataTableResponse} from 'src/app/shared/_components/data-table/classes/data-table-response';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
})
export class BranchesComponent implements OnInit {

  @ViewChild(DataTableComponent, { static: true }) dataTable: DataTableComponent;

  trash = Trash;
  pencil = PencilPaper;

  readonly columns = [
    { name: 'name', label: 'name' },
    { name: 'manager', label: 'manager' },

  ];


  constructor(private branchesService: BranchesService, private router: Router) { }

  ngOnInit() {
  }

  fetchItems(): void {
    this.branchesService.getBranches(this.dataTable.criteria).subscribe( (res: DataTableResponse) => {
      this.dataTable.setItems(res);
    });
  }

  edit(id: any) {
    this.router.navigate(['/branches', 'new', id]);
  }

  newBranch() {
    this.router.navigate(['/branches', 'new']);
  }

  delete(id: any) {
    this.branchesService.deleteBranch(id)
      .then((response) => {
        if (response) {
          this.fetchItems();
        }
      });
  }

}
