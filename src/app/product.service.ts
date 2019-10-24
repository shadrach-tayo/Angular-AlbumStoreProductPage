import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import { map } from 'rxjs/operator/map';

@Injectable()
export class ProductService {
  _albumUrl: string = '../assets/album.json'

  constructor(private _http: Http) {

  }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
  }

}