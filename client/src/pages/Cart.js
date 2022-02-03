import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBarAndRes from "../components/Navbar/UserNavbar/NavbarRes";
import Footer from "../components/User/Footer/Footer";
import { removeCourse, clearCart } from "../redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  cursor: pointer;
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 180px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.h1``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  cursor: pointer;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  width: 50%;
  text-align: center;
  height: 1px;
  margin: 10px auto 0 auto;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const removeFromCart = (course) => {
    dispatch(removeCourse(course));
  };
  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <NavBarAndRes />
      <Wrapper>
        <Title>Your cart</Title>
        <Top>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/courses`}
          >
            <TopButton>Choose another courses</TopButton>
          </Link>
          <TopTexts>
            <TopText>You added this courses</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">BUY NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart?.courses?.length === 0 ? (
              <>
                <h1>No courses are added to cart </h1>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/courses`}
                >
                  <TopButton> Add your favorite courses</TopButton>
                </Link>
              </>
            ) : (
              cart?.courses?.map((course) => (
                <Product key={course.course_id}>
                  <ProductDetail>
                    <Image src="https://t3.ftcdn.net/jpg/02/84/02/36/360_F_284023634_KjMhFyIQvm6Skawcp0izYTsJKvhCPLoZ.jpg" />
                    <Details>
                      <ProductName>{course.course_title}</ProductName>
                      <ProductId>{course.course_desc}</ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <ProductAmount onClick={() => removeFromCart(course)}>
                        Remove
                      </ProductAmount>
                    </ProductAmountContainer>
                    <ProductPrice>Rs:{course.course_price}</ProductPrice>
                  </PriceDetail>
                </Product>
              ))
            )}
            <Hr />
            <TopButton onClick={() => clearCartHandler()}>Clear cart</TopButton>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Link to="/pay">
              {!user ? (
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              ) : (
                <Button>CHECKOUT NOW</Button>
              )}
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
