import React from "react";

type Props = {};

const Product = (props: Props) => {
  return (
    <section className="invoiceProduct">
      <div className="container">
        <div className="invoice">
          <div className="invoice-information">
            <h2>Billing details</h2>
            <form action="">
              <div className="invoice-information-firstlast">
                <div className="">
                  <label htmlFor="FirstName" className="FirstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    className="FirstName__input"
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="LastName" className="FirstName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    className="FirstName__input"
                    required
                  />
                </div>
              </div>
              <div className="title__Company">
                <label htmlFor="Company" className="Company">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="Company"
                  className="Company__input"
                  required
                />
              </div>
              <div className="title__Company">
                <label htmlFor="Country" className="Company">
                  Country / Region
                </label>
                <select id="Country" className="Company__inputs">
                  <option value="US" className="Company__option">
                    Sri Lanka
                  </option>
                  <option value="CA" className="Company__option">
                    Canada
                  </option>
                  <option value="GB" className="Company__option">
                    United Kingdom
                  </option>
                  <option value="JP" className="Company__option">
                    Japan
                  </option>
                  {/* Thêm các quốc gia khác nếu cần */}
                </select>
              </div>
              <div className="title__Company">
                <label htmlFor="Street" className="Company">
                  Street address
                </label>
                <input
                  type="text"
                  id="Street"
                  className="Company__input"
                  required
                />
              </div>
              <div className="title__Company">
                <label htmlFor="Town" className="Company">
                  Town / City
                </label>
                <input
                  type="text"
                  id="Town"
                  className="Company__input"
                  required
                />
              </div>
              <div className="title__Company">
                <label htmlFor="Province" className="Company">
                  Province
                </label>
                <select id="Province" className="Company__inputs">
                  <option value="WP" className="Company__option">
                    Western Province
                  </option>
                  <option value="AB" className="Company__option">
                    Alberta
                  </option>
                  <option value="BC" className="Company__option">
                    British Columbia
                  </option>
                  <option value="MB" className="Company__option">
                    Manitoba
                  </option>
                  {/* Thêm các quốc gia khác nếu cần */}
                </select>
              </div>
              <div className="title__Company">
                <label htmlFor="ZIP" className="Company">
                  ZIP code
                </label>
                <input
                  type="text"
                  id="ZIP"
                  className="Company__input"
                  required
                />
              </div>
              <div className="title__Company">
                <label htmlFor="Phone" className="Company">
                  Phone
                </label>
                <input
                  type="text"
                  id="Phone"
                  className="Company__input"
                  required
                />
              </div>
              <div className="title__Company">
                <label htmlFor="Email" className="Company">
                  Email address
                </label>
                <input
                  type="text"
                  className="Company__input"
                  id="Email"
                  required
                />
              </div>
              <div className="title__Companys">
                <input
                  type="text"
                  required
                  className="Company__inputss"
                  placeholder="Additional information"
                />
              </div>
            </form>
          </div>
          <div className="invoice-price">
            <div className="invoice-price-product">
              <div className="invoice-price-product-title">
                <h6 className="invoice-price-product-title__name">Product</h6>
                <h6 className="invoice-price-product-title__Subtotal">
                  Subtotal
                </h6>
              </div>
              <div className="invoice-price-product-title-Asgaard">
                <span className="invoice-price-product-title-Asgaard__sofa">
                  Asgaard sofa
                </span>
                <span className="invoice-price-product-title-Asgaard__sofax">
                  x
                </span>
                <span className="invoice-price-product-title-Asgaard__sofa1">
                  1
                </span>
                <span className="invoice-price-product-title-Asgaard__sofa2">
                  25.000.000đ
                </span>
              </div>
              <div className="invoice-price-product-title-Subtotal">
                <span className="invoice-price-product-title-Subtotal1">
                  Subtotal
                </span>
                <span className="invoice-price-product-title-Subtotal2">
                  25.000.000đ
                </span>
              </div>
              <div className="invoice-price-product-title-Total">
                <span className="invoice-price-product-title-Total2">
                  Total
                </span>
                <span className="invoice-price-product-title-Total3">
                  250.000.000đ
                </span>
              </div>
            </div>
            <div className="invoice-price-text">
              <label className="">
                <input type="radio" className="gender" defaultValue="male" />
                <span className="Direct">Direct Bank Transfer</span>
              </label>
              <p className="p1">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <label>
                <input type="radio" className="gender" defaultValue="male" />
                <span className="Directs">Direct Bank Transfer</span>
              </label>
              <br />
              <label>
                <input type="radio" className="gender" defaultValue="male" />
                <span className="Directs">Cash On Delivery</span>
              </label>
              <p className="p2">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our <span>privacy policy</span>.
              </p>
              <a href="">
                <button>Place order</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
