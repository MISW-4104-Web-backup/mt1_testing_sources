import { PostService } from "./post.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe("PostService", () => {
  let postService: PostService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });

    postService = TestBed.get(PostService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it("Post number should be equal to 3", () => {
    postService.getPosts()
      .subscribe(posts => {
        expect(posts.length).toBe(3)
      })
  })
});
