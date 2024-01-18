import { ComponentFixture, TestBed } from '@angular/core/testing';

import { searchBarComponent } from './searchBar.component';

describe('searchBarComponent', () => {
  let component: searchBarComponent;
  let fixture: ComponentFixture<searchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [searchBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(searchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
