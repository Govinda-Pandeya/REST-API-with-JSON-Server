import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, Http } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { CustomersInfoComponent } from './customers-info.component';
import { CustomerDataService } from './services/customer-data.service';

describe('CustomersInfoComponent', () => {
  let component: CustomersInfoComponent;
  let fixture: ComponentFixture<CustomersInfoComponent>;
  let customerDataService: CustomerDataService;
  const mockCustomerData: ReplaySubject<any> = new ReplaySubject(1);
  let spy: any;
  let http: Http;
  const expectedDataServiceStub = [
    {
      "firstName": "Bharat",
      "lastName": "Pandey",
      "age": 25,
      "address": {
        "streetAddress": "7777 Kings Rd",
        "city": "Irving",
        "state": "TX",
        "postalCode": "75605"
      },
      "phoneNumber": [
        {
          "type": "Home",
          "number": "212 555-1234"
        },
        {
          "type": "Fax",
          "number": "646 555-4567"
        }
      ]
    },
    {
      "firstName": "Tom",
      "lastName": "Cruise",
      "age": 33,
      "address": {
        "streetAddress": "1000 N 4th Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "52557"
      },
      "phoneNumber": [
        {
          "type": "Home",
          "number": "222 555-1234"
        },
        {
          "type": "Fax",
          "number": "666 888-4567"
        }
      ]
    },
    {
      "firstName": "Lionel ",
      "lastName": "Messi",
      "age": 29,
      "address": {
        "streetAddress": "Carrer d'Arístides Maillol",
        "city": "Barcelona",
        "state": "Catalonia",
        "postalCode": "08028"
      },
      "phoneNumber": [
        {
          "type": "Home",
          "number": "555 555-5555"
        },
        {
          "type": "Fax",
          "number": "666 666-6666"
        }
      ]
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      declarations: [CustomersInfoComponent],
      providers: [
        CustomerDataService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersInfoComponent);
    component = fixture.componentInstance;
    customerDataService = fixture.debugElement.injector.get(CustomerDataService);
    mockCustomerData.next(expectedDataServiceStub);
    spy = spyOn(customerDataService, 'fetchCustomersData').and.returnValue(mockCustomerData);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h2 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Welcome to Customers Info Module: REST API with JSON Server');
  }));

  it(`should get 'customers info' data from service`, () => {    
    component.getCustomersInfo();
    expect(component.customersInfo.length).toBe(expectedDataServiceStub.length);
  });


});
