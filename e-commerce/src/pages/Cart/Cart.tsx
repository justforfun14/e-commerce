import { Announcments } from "../../components/Announcments/Announcements";
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { Add, Remove } from "@material-ui/icons";
import "./Cart.scss";

export const Cart = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Announcments />
      <div className="cart cart__wrapper">
        <h1 className="cart__title">YOUR CART</h1>

        <div className="cart__header cart-header">
          <button className="cart-header__button cart-header__button_continue">
            CONTINUE SHOPPING
          </button>

          <div className="cart-header__texts">
            <div className="cart-header__text">Shopping Bag(2)</div>
            <div className="cart-header__text">Your Wishlist (0)</div>
          </div>

          <button className="cart-header__button cart-header__button_checkout">
            CHECKOUT NOW
          </button>
        </div>

        <div className="cart__main cart-main">
          <div className="cart-main__info">
            <div className="cart-main__product cart-product">
              <div className="cart-product__details">
                <img
                  className="cart-product__image"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt="Clothes"
                />
                <div className="cart-product__detail">
                  <span className="cart-product__name">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="cart-product__id">
                    <b>ID:</b> 93813718293
                  </span>
                  <div className="cart-product__color cart-product__color_black"></div>
                  <span className="cart-product__size">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>

              <div className="cart-price cart-price__detail">
                <div className=" cart-price__amount cart-amount cart-amount__wrapper">
                  <Add />
                  <div className="cart-amount__amount">2</div>
                  <Remove />
                </div>
                <div className="cart-price__price">$ 30</div>
              </div>
            </div>

            <hr className="cart__hr" />

            <div className="cart-main__product cart-product">
              <div className="cart-product__details">
                <img
                  className="cart-product__image"
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt="Clothes"
                />
                <div className="cart-product__detail">
                  <span className="cart-product__name">
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span className="cart-product__id">
                    <b>ID:</b> 93813718293
                  </span>
                  <div className="cart-product__color cart-product__color_gray"></div>
                  <span className="cart-product__size">
                    <b>Size:</b> M
                  </span>
                </div>
              </div>

              <div className="cart-price cart-price__detail">
                <div className=" cart-price__amount cart-amount cart-amount__wrapper">
                  <Add />
                  <div className="cart-amount__amount">2</div>
                  <Remove />
                </div>
                <div className="cart-price__price">$ 20</div>
              </div>
            </div>
          </div>

          <div className="cart__summary cart-summary">
            <div className="cart-summary__title">ORDER SUMMARY</div>

            <div className="cart-summary__item summary-item">
              <span className="summary-item__text">Subtotal</span>
              <span className="summary-item__price">$ 80</span>
            </div>

            <div className="cart-summary__item summary-item">
              <span className="summary-item__text">Estimated Shipping</span>
              <span className="summary-item__price">$ 5.90</span>
            </div>

            <div className="cart-summary__item summary-item">
              <span className="summary-item__text">Shipping Discount</span>
              <span className="summary-item__price">$ -5.90</span>
            </div>

            <div className="cart-summary__item summary-item">
              <span className="summary-item__text">Shipping Discount</span>
              <span className="summary-item__price">$ -5.90</span>
            </div>

            <div className="cart-summary__item summary-item summary-item_total">
              <span className="summary-item__text">Total</span>
              <span className="summary-item__price">$ 80</span>
            </div>

            <button className="cart__summary-button">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// <Container>
// <Navbar />
// <Announcement />
// <Wrapper>
//   <Title>YOUR BAG</Title>
//   <Top>
//     <TopButton>CONTINUE SHOPPING</TopButton>
//     <TopTexts>
//       <TopText>Shopping Bag(2)</TopText>
//       <TopText>Your Wishlist (0)</TopText>
//     </TopTexts>
//     <TopButton type="filled">CHECKOUT NOW</TopButton>
//   </Top>
//   <Bottom>
//     <Info>
//       <Product>
//         <ProductDetail>
//           <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
//           <Details>
//             <ProductName>
//               <b>Product:</b> JESSIE THUNDER SHOES
//             </ProductName>
//             <ProductId>
//               <b>ID:</b> 93813718293
//             </ProductId>
//             <ProductColor color="black" />
//             <ProductSize>
//               <b>Size:</b> 37.5
//             </ProductSize>
//           </Details>
//         </ProductDetail>
//         <PriceDetail>
//           <ProductAmountContainer>
//             <Add />
//             <ProductAmount>2</ProductAmount>
//             <Remove />
//           </ProductAmountContainer>
//           <ProductPrice>$ 30</ProductPrice>
//         </PriceDetail>
//       </Product>
//       <Hr />
//       <Product>
//         <ProductDetail>
//           <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
//           <Details>
//             <ProductName>
//               <b>Product:</b> HAKURA T-SHIRT
//             </ProductName>
//             <ProductId>
//               <b>ID:</b> 93813718293
//             </ProductId>
//             <ProductColor color="gray" />
//             <ProductSize>
//               <b>Size:</b> M
//             </ProductSize>
//           </Details>
//         </ProductDetail>
//         <PriceDetail>
//           <ProductAmountContainer>
//             <Add />
//             <ProductAmount>1</ProductAmount>
//             <Remove />
//           </ProductAmountContainer>
//           <ProductPrice>$ 20</ProductPrice>
//         </PriceDetail>
//       </Product>
//     </Info>
//     <Summary>
//       <SummaryTitle>ORDER SUMMARY</SummaryTitle>
//       <SummaryItem>
//         <SummaryItemText>Subtotal</SummaryItemText>
//         <SummaryItemPrice>$ 80</SummaryItemPrice>
//       </SummaryItem>
//       <SummaryItem>
//         <SummaryItemText>Estimated Shipping</SummaryItemText>
//         <SummaryItemPrice>$ 5.90</SummaryItemPrice>
//       </SummaryItem>
//       <SummaryItem>
//         <SummaryItemText>Shipping Discount</SummaryItemText>
//         <SummaryItemPrice>$ -5.90</SummaryItemPrice>
//       </SummaryItem>
//       <SummaryItem type="total">
//         <SummaryItemText>Total</SummaryItemText>
//         <SummaryItemPrice>$ 80</SummaryItemPrice>
//       </SummaryItem>
//       <Button>CHECKOUT NOW</Button>
//     </Summary>
//   </Bottom>
// </Wrapper>
// <Footer />
// </Container>
