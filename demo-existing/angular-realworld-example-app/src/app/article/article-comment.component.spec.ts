import { ArticleCommentComponent } from './article-comment.component';
import { UserService, User, Profile, Comment } from '../core';
import { of } from 'rxjs';

describe('ArticleCommentComponent', () => {
  it('when ngOnInit is called it should set the `canModify` to true if the author is the current user', () => {
    // arrange
    const userService = autoSpy(UserService);
    const c = new ArticleCommentComponent(userService);
    c.comment = { author: { username: 'author' } } as Comment;
    userService.currentUser = of({username: 'author'} as User);
    // act
    c.ngOnInit();
    // assert
    expect(c.canModify).toBe(true);
  });

  it('when ngOnInit is called it should call the `populate` method on userService', () => {
    // arrange
    const userService = autoSpy(UserService);
    userService.currentUser = of({} as User);
    const c = new ArticleCommentComponent(userService);
    c.comment = { author: { username: '' } } as Comment;
    // act
    c.ngOnInit();
    // assert
    expect(userService.populate).toHaveBeenCalledTimes(1);
  });
});

/** Keeps the types of properties of a type but assigns type of Spy to the methds */
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
