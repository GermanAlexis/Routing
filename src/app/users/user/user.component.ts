import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{
  user: {id: number, name: string};
  paramsSubcription: Subscription

  constructor(private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this._ActivatedRoute.snapshot.params['id'],
      name: this._ActivatedRoute.snapshot.params['name']
    };
    this. paramsSubcription = this._ActivatedRoute.params.subscribe(
      (params: Params) => {
        this.user.id   = params['id'];
        this.user.name = params['name'];
      }
    )
  }

  ngOnDestroy() {
   this.paramsSubcription.unsubscribe();
  }

}
