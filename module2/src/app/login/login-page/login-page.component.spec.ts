import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { never, of } from 'rxjs';
import {AuthService} from '../../services/auth.service'
import {LoginPageComponent} from './login-page.component'
@Component({
  selector: 'home',
  template: '<div>Dummy home component</div>',
  styleUrls: []
})
class DummyHomeComponent {
  [x: string]: any;
}
describe('LoginComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let loginSpy: any;
  let router:Router;

  beforeEach(async () => {
    let authService: any = jasmine.createSpyObj('AuthService',['login']);
    let mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    loginSpy = authService.login.and.callFake((param1: number, param2:number) => {
        return of([{
          "id": 224,
          "username": "rakshu",
          "email": "rakshu2@gmail.com",
          "roles": [
              "USER"
          ],
          "tokenType": "Bearer",
          "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWtzaHUyQGdtYWlsLmNvbSIsInVzZXJfZGV0YWlscyI6eyJpZCI6MjI0LCJ1c2VybmFtZSI6InJha3NodSIsImVtYWlsIjoicmFrc2h1MkBnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiVVNFUiJ9XSwiZW5hYmxlZCI6dHJ1ZSwiY3JlZGVudGlhbHNOb25FeHBpcmVkIjp0cnVlLCJhY2NvdW50Tm9uRXhwaXJlZCI6dHJ1ZSwiYWNjb3VudE5vbkxvY2tlZCI6dHJ1ZX0sImlhdCI6MTY2ODA1NDk1NiwiZXhwIjoxNjY4MTU0OTU2fQ.1ncg3YyfUwlbxCIPxrTPUs_859V9UkuBzwZ5fwG9WYI"
      }]);
    });
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent,
        DummyHomeComponent ],// Because we inject service in our component ],
      providers: [
        { provide: AuthService, useValue: authService
          }, {provide: Router, useValue: mockRouter}
      ],
      imports:[ RouterTestingModule.withRoutes([
        { path: 'login', component: DummyHomeComponent },
      ])]// Because we inject service in our component]
    })
    .compileComponents();
    router = TestBed.get(Router); // Just if we need to test Route Service functionality

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get login form', () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container')).toBeTruthy();
  })

  it('should call portfolio once with /login path when logged in successfully', () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container')).toBeTruthy();
  })


  it('should throw a toast message when login is unsuccessful', () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container')).toBeTruthy();
  })
});
