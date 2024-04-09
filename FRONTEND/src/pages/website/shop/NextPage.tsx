import React from 'react'

type Props = {}

const NextPage = (props: Props) => {
  return (
    <div className="container">
        <div className="next-page">
          <a href="">
            <button className="next-page__btn">1</button>
          </a>
          <a href="">
            <button className="next-page__btns">2</button>
          </a>
          <a href="">
            <button className="next-page__btns">3</button>
          </a>
          <a href="">
            <button className="next-page__btnss">Next</button>
          </a>
        </div>
      </div>
  )
}

export default NextPage