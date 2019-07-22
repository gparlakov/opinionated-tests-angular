import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { TagsService, UserService } from '../core';

describe('HomeComponent', () => {
  it('when ngOnInit is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.ngOnInit();
    // assert
    // expect(c).toEqual
  });

  it('when setListTo is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.setListTo();
    // assert
    // expect(c).toEqual
  });
});

function setup() {
  const router = autoSpy(Router);
  const tagsService = autoSpy(TagsService);
  const userService = autoSpy(UserService);
  const builder = {
    router,
    tagsService,
    userService,
    default() {
      return builder;
    },
    build() {
      return new HomeComponent(router, tagsService, userService);
    }
  };

  return builder;
}

/**
 * The idea behind the autospy is to pass it a function constructor(a class) and it will
 * return an object that can be used instead of the initial one in constructors etc.
 *
 * If you pass in the wantedReturnValues it will return those /use the functions in there
 */
export function autoSpy<T extends Object>(
  obj: new (...args: any[]) => T
): jasmine.SpyObj<T> {
  // tslint:disable-next-line:prefer-const
  let res: jasmine.SpyObj<T> = {} as any;
  Object.keys(obj.prototype).forEach(key => {
    res[key] = jasmine.createSpy(key);
  });

  return res;
}
