import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  const expectedCustomerStub = [
    {
      'firstName': 'Bharat',
      'lastName': 'Pandey',
      'age': 25,
      'address': {
        'streetAddress': '7777 Kings Rd',
        'city': 'Irving',
        'state': 'TX',
        'postalCode': '75605'
      },
      'phoneNumber': [
        {
          'type': 'Home',
          'number': '212 555-1234'
        },
        {
          'type': 'Fax',
          'number': '646 555-4567'
        }
      ]
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    component.customersInfo = expectedCustomerStub;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`#hideDetails() should emit 'false' to it's parent CustomersInfoComponent`, (done) => {
    component.hide.subscribe(emittedValue => {
      expect(emittedValue).toEqual(false);
      done();
    });
    component.hideDetails();
  });


});
