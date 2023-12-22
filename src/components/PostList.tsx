import { Link } from "react-router-dom";

interface Props {
  hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = true }: Props) {
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div className="post__navigation--active">전체</div>
          <div>나의 글</div>
        </div>
      )}
      <div className="post__list">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">Author</div>
                <div className="post__date">2023.12.21 목요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                sequi id necessitatibus voluptatum dignissimos inventore vel
                ducimus fuga officia, maxime nulla dolorem quae earum est omnis
                nemo aut pariatur natus?
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
