import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SearchService);
  });

  it('should return data on successful search', async () => {
    const mockResponse = {
      kind: 'search#companies',
      items: [
        {
          company_number: '12345678',
          name: 'Test Company',
        },
      ],
      page_number: 1,
      total_results: 1,
    };

    const httpGetSpy = spyOn(service.http, 'get').and.returnValue(of(mockResponse));

    const result = await service.searchCompanies('Test Company').toPromise();

    expect(httpGetSpy).toHaveBeenCalledWith(`${service.apiUrl}Search?Query=Test Company`);
    expect(result).toEqual(mockResponse);
  });

  it('should return error on unsuccessful search', async () => {
    const mockError = new Error('Test error');

    const httpGetSpy = spyOn(service.http, 'get').and.returnValue(throwError(mockError));

    try {
      await service.searchCompanies('Test Company').toPromise();
    } catch (error) {
      expect(error).toEqual(mockError);
    }

    expect(httpGetSpy).toHaveBeenCalledWith(`${service.apiUrl}Search?Query=Test Company`);
  });
});


