import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavComponent} from './nav/nav.component';
import {FootComponent} from './foot/foot.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgHttpLoaderModule} from 'ng-http-loader/ng-http-loader.module';
import {HomeComponent} from './home/home.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        FootComponent,
        HomeComponent
      ],
      imports: [ RouterTestingModule.withRoutes([
        { path: '.', component: HomeComponent }
        ]
      ), NgHttpLoaderModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'SamsNg'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SamsNg');
  }));
});
