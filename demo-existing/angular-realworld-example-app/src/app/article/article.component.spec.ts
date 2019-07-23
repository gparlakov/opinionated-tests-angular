import { ArticleComponent } from './article.component';
import { ActivatedRoute, Router, Data } from '@angular/router';
import {
  ArticlesService,
  CommentsService,
  UserService,
  User,
  Article
} from '../core';
import { of } from 'rxjs';

describe('ArticleComponent', () => {
  it('when ngOnInit is called and route data emits it should set the article', () => {
    // arrange
    const { build } = setup()
      .default()
      .withRouteData({ slug: 'mememe' });
    const c = build();
    // act
    c.ngOnInit();
    // assert
    expect<any>(c.article).toEqual({ slug: 'mememe' });
  });
});

function setup() {
  const route = autoSpy(ActivatedRoute);
  const articlesService = autoSpy(ArticlesService);
  const commentsService = autoSpy(CommentsService);
  const router = autoSpy(Router);
  const userService = autoSpy(UserService);
  const builder = {
    route,
    articlesService,
    commentsService,
    router,
    userService,
    default() {
      route.data = of({} as Data);
      userService.currentUser = of({} as User);
      userService.getCurrentUser.and.returnValue({} as User);
      return builder;
    },
    withRouteData(article: Partial<Article>) {
      route.data = of({ article });
      return builder;
    },
    build() {
      return new ArticleComponent(
        route,
        articlesService,
        commentsService,
        router,
        userService
      );
    }
  };

  return builder;
}

type SpyOf<T> = Partial<
  { [k in keyof T]: T[k] extends (...args: any[]) => any ? jasmine.Spy : T[k] }
> &
  T;

function autoSpy<T>(obj: new (...args: any[]) => T): SpyOf<T> {
  const res: SpyOf<T> = {} as any;

  Object.keys(obj.prototype).forEach(key => {
    res[key] = jasmine.createSpy(key);
  });

  return res;
}
