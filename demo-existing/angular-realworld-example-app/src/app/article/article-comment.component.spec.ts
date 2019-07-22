import { ArticleCommentComponent } from './article-comment.component';
import { UserService } from '../core';
import { take } from 'rxjs/operators';

describe('ArticleCommentComponent', () => {
  it('when deleteClicked is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    let called = false;
    c.deleteComment.pipe(take(1)).subscribe(() => called = true);
    // act
    c.deleteClicked();
    // assert
    expect(called).toEqual(true);
  });
});

function setup() {
  const userService = jasmine.createSpyObj<UserService>('UserService', {});
  const builder = {
    userService,
    default() {
      return builder;
    },
    build() {
      return new ArticleCommentComponent(userService);
    }
  };

  return builder;
}
