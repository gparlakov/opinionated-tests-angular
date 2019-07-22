import { TestBed } from '@angular/core/testing';
import { UsesEnvironmentService } from './uses-environment.service';
import {} from 'jest';

// jest.mock('../environments/environment.ts', () => {
//   return {
//     environment: {
//       production: true
//     }
//   };
// });

describe('UsesEnvironmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsesEnvironmentService = TestBed.get(UsesEnvironmentService);
    expect(service).toBeTruthy();
  });

  it('should return production true', () => {
    const service: UsesEnvironmentService = TestBed.get(UsesEnvironmentService);
    expect(service.prod()).toBeTruthy();
  });
});
