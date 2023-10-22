import React from 'react';
import './App.scss';

const App: React.FC = () => {
  type Book = {
    id: number;
    title: string;
    url: string;
    detail: string;
    review: string;
    reviewer: string;
  };

  const books: Book[] = [
    {
      id: 1,
      title: 'title',
      url: 'url',
      detail: 'detail',
      review: 'review',
      reviewer: 'reviewer',
    },
    {
      id: 2,
      title: 'title2',
      url: 'url2',
      detail: 'detail2',
      review: 'review2',
      reviewer: 'reviewer2',
    },
    {
      id: 3,
      title: 'title3',
      url: 'url3',
      detail: 'detail3',
      review: 'review3',
      reviewer: 'reviewer3',
    }
  ];

  return (
    <main className="home-wrapper">
      <h1>Book Review List</h1>
      <ul className="review-list">
        {books.map((book: Book) => (
          <li key={book.id} className="review-list__item">
            本のタイトル: {book.title}
            <br />
            本のURL: {book.url}
            <br />
            本の詳細: {book.detail}
            <br />
            レビュー内容: {book.review}
            <br />
            レビュアー: {book.reviewer}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
