import React from 'react'
import icons26 from "../../../assets/icons/26.svg"
import icons27 from "../../../assets/icons/27.svg"
import icons28 from "../../../assets/icons/28.svg"
import icons29 from "../../../assets/icons/29.svg"

type Props = {}

const SortFilterPrice = (props: Props) => {
  return (
    <section className="SortFilterPrice">
        <div className="SortFilterPrice-container">
          <div className="SortFilterPrice-Filter">
            <img src={icons26} alt="" />
            <img
              className="SortFilterPrice-Filter__item"
              src={icons27}
              alt=""
            />
            <img
              className="SortFilterPrice-Filter__items"
              src={icons28}
              alt=""
            />
            <sub>
              <img
                src={icons29}
                className="SortFilterPrice-Filter__item3"
                alt=""
              />
            </sub>
          </div>
          <div className="SortFilterPrice-price">
            <div className="SortFilterPrice-price-show">
              <span>Show</span>
              <input className="SortFilterPrice-price-show__item" type="text" />
            </div>
            <div className="SortFilterPrice-price--shostby">
              <span>Short by</span>
              <input
                className="SortFilterPrice-price-shostby__item"
                type="text"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default SortFilterPrice