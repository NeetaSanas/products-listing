import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { ProductsService } from './products.service';
import { Store, StoreModule } from '@ngrx/store';

describe('ProductsService', () => {
  let service: ProductsService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService, Store],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ]
    });
    injector = getTestBed();
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Add Product', () => {
    const spy = jest.fn();
    const requestBody:any = [];
    service.addProduct(requestBody).subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.productsUrl}`));
    mockReq.flush([]);
    expect(spy).toHaveBeenCalledWith([]);
  });

  it('should fetch Products', () => {
    const spy = jest.fn();
    //const requestBody = {};
    service.getProducts().subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.productsUrl}`));
    mockReq.flush([]);
    expect(spy).toHaveBeenCalledWith([]);
  });

  it('should delete Product', () => {
    const spy = jest.fn();
    service.deleteProduct('3').subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.productsUrl}/${3}`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });

//   it('should update Product', () => {
//     const spy = jest.fn();
//     const requestBody: any = [];
//     const id: string='3';
//     service.updateProduct(requestBody).subscribe(spy);
//     const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.productsUrl}/${id}`));
//     mockReq.flush({});
//     expect(spy).toHaveBeenCalledWith([]);
//   });


});
