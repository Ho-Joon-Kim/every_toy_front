import React from 'react';

function Thread({content}) {
  console.log("content");
  //console.log(content);
  return (
    <h1>{content['num']}
    {content['title']}
    {content['date']}
    {content['like']}
    {content['dislike']}</h1>
  );
}

export default Thread;
