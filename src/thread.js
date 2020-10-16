import React from 'react';

function Thread({content}) {
  return (
    <h1>{content['num']}
    {content['title']}
    {content['date']}
    {content['like']}
    {content['dislike']}</h1>
  );
}

export default Thread;
