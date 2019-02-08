import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { Catalog } from '../../interfaces/interfaces';
@Component({
  selector: 'app-catalogs',
  templateUrl: './Catalogs.component.html',
  styleUrls: ['./Catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
  catalog: Catalog;

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService.fetch(1 + Math.floor(Math.random() * 10)).subscribe(
      (response) => {
        this.catalog = response;
        console.log(response);
      }
    );
  }

}
