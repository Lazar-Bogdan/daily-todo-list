import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Background>
      <Card>
        <Content>
          {props.children}
        </Content>
      </Card>
    </Background>
  )
}

export default Layout;

const Background = styled.div`
  background: #F5F9FF;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 800px) {
    widht:400px;
    height: 742px;
    flex-shirk:0;
    display:flex;
    background: #FFF;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 670px;
  flex-shrink: 0;
  border-radius: 32px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;
  position:absolute;

  
  @media (max-width: 800px) {
    border-radius: 32px;
    background: #FFF;

    box-shadow: 0px 0px 4px 0px rgba(0, 23, 71, 0.15);
  }
`;

const Content = styled.div`
  padding: 42px 0px;
  position:relative;
`;