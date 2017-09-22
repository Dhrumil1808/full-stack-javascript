import React from 'react';
import Header from './Header';

const ContestPreview = ({contest}) =>
{
  return (
  <div className="ContestPreview">
  <div> {contest.categoryName} </div>
  <div> {contest.contestName} </div>
  </div>
  );
};

export default ContestPreview;
