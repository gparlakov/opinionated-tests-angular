import { ArticleCommentComponent } from './article-comment.component';
import { UserService } from '../core';

describe('ArticleCommentComponent', () => {
  it('when deleteClicked is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.deleteClicked();
    // assert
    // expect(c).toEqual
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
