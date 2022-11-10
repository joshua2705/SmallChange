import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [
      HttpClientTestingModule
      ]});
      httpTestingController = TestBed.inject(HttpTestingController);
      service = TestBed.inject(AuthService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a user', inject([AuthService],
    fakeAsync((service:AuthService) => {
    service.register("Rakshitha", "rakshu@gmail.com", "123456", "1234567890", "F", "08-05-2000", "5")
    .subscribe();
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/auth/signup');
    expect(req.request.method).toEqual('POST');
    req.flush(null);
    httpTestingController.verify();
    tick();
   })));

   it('should login a user', inject([AuthService],
    fakeAsync((service:AuthService) => {
    service.login( "rakshu@gmail.com", "123456")
    .subscribe();
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/auth/signin');
    expect(req.request.method).toEqual('POST');
    req.flush(null);
    httpTestingController.verify();
    tick();
   })));

   it('should handle unsuccessful registration', inject([AuthService],
    fakeAsync((service:AuthService) => {
    service.register("Rakshitha", "rakshu@gmail.com", "123456", "1234567890", "F", "08-05-2000", "5")
    .subscribe();
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/auth/signup');
    expect(req.request.method).toEqual('POST');
    req.flush(null);
    httpTestingController.verify();
    tick();
   })));

   it('should hadle unsuccessful login', inject([AuthService],
    fakeAsync((service:AuthService) => {
    service.login( "rakshu@gmail.com", "123456")
    .subscribe();
    const req = httpTestingController.expectOne(
    'http://localhost:8080/api/auth/signin');
    expect(req.request.method).toEqual('POST');
    req.flush(null);
    httpTestingController.verify();
    tick();
   })));


});
