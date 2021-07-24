import React, { FC } from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const CustomLayout: FC = ({children}) => {

    return(
        <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center' }}><h1 style={{color: 'white'}}>SPOTIFY STATISTIC APP</h1></Header>
          <Content>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Eyedamorte: <a href="https://github.com/eyedamorte/spotyStata">SPOTIFY STATISTIC APP</a>
            <p>
              <a href="https://www.youtube.com/channel/UCWHB5avOYQoa3KSfaS-RYzA">I was inspired by her</a>
            </p>
          </Footer>
        </Layout>
      </Layout>
    )
    
}

export default CustomLayout