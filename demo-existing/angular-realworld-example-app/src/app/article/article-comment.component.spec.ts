import { ArticleCommentComponent } from './article-comment.component';
import { UserService } from '../core';
import { take } from 'rxjs/operators';

describe('ArticleCommentComponent', () => {
  it('when deleteClicked is called it should', () => {
    // arrange
    const { build } = setup();
    const c = build();
    let called = false;
    c.deleteComment.pipe(take(1)).subscribe(() => (called = true));
    // act
    c.deleteClicked();
    // assert
    expect(called).toEqual(true);
  });
});

function setup() {
  const userService = jasmine.createSpyObj<UserService>(
    'UserService',
    Object.keys(UserService.prototype)
  );
  const builder = {
    userService,
    build() {
      return new ArticleCommentComponent(userService);
    }
  };

  return builder;
}
