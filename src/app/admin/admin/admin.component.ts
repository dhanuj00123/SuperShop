import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users;
  constructor(private store: Store<any>) {}
  ngOnInit(): void {
    this.store.dispatch({ type: 'LOAD_USERS' });

    this.store.subscribe((state) => (this.users = state.users.users));
  }
}
