export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">Post Title</div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">Author</div>
            <div className="post__date">2023.12.21 목요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">수정</div>
          </div>
          <div className="post__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            sequi id necessitatibus voluptatum dignissimos inventore vel ducimus
            fuga officia, maxime nulla dolorem quae earum est omnis nemo aut
            pariatur natus?
          </div>
        </div>
      </div>
    </>
  );
}
