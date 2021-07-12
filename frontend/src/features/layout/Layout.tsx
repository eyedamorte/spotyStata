import React, { FC } from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const CustomLayout: FC = ({children}) => {

    return(
        <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Eyedamorte news</Footer>
        </Layout>
      </Layout>
    )
    
}

export default CustomLayout