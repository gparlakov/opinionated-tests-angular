import { ArticleComponent } from './article.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService, CommentsService, UserService } from '../core';

describe('ArticleComponent', () => {
  it('when ngOnInit is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.ngOnInit();
    // assert
    // expect(c).toEqual
  });

  it('when deleteArticle is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.deleteArticle();
    // assert
    // expect(c).toEqual
  });

  it('when populateComments is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.populateComments();
    // assert
    // expect(c).toEqual
  });

  it('when addComment is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.addComment();
    // assert
    // expect(c).toEqual
  });

  it('when onDeleteComment is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.onDeleteComment('');
    // assert
    // expect(c).toEqual
  });
});

function setup() {
  let dep: Object;
  const route = autoSpy(ActivatedRoute);
  const articlesService = autoSpy(ArticlesService);
  const commentsService = autoSpy(CommentsService);
  const router = autoSpy(Router);
  const userService = autoSpy(UserService);
  const builder = {
    dep,
    route,
    articlesService,
    commentsService,
    router,
    userService,
    default() {
      return builder;
    },
    build() {
      return new ArticleComponent(
        route,
        articlesService,
        commentsService,
        router,
        userService,
        dep
      );
    }
  };

  return builder;
}
