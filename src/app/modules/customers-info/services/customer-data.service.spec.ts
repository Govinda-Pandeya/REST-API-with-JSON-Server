import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpModule, Http,
  Response, ResponseOptions, XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { CustomerDataService } from './customer-data.service';

describe('Service: CustomerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        { provide: 'http://localhost:3000/customersInfoSource', useValue: '/api/customersinfoserver/getdata/customersInfoSource' },
        CustomerDataService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created',
    inject([CustomerDataService], (service: CustomerDataService) => {
      expect(service).toBeTruthy();
    }));

  describe('fetchCustomersData()', () => {

    it('should return an Observable<Array<Customer>>',
      inject([CustomerDataService, XHRBackend], (customerDataService, mockBackend) => {

        const mockResponse = {
          data: [
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
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: mockResponse.data
          })));
        });

        customerDataService.fetchCustomersData().subscribe((customers) => {
          expect(customers.length).toBe(3);
          expect(customers[0].firstName).toEqual('Bharat');
          expect(customers[1].age).toEqual(33);
          expect(customers[2].lastName).toEqual('Messi');
        });

      }));
  });


});
