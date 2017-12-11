import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import './IndexPage.scss';
import TopMenuComponent from '../components/TopMenu/TopMenu';
import LeftNavComponent from '../components/LeftNav/LeftNav';

const { Header, Sider, Content } = Layout;

function IndexPage() {
  return (
    <Layout>
      <Header className="header" style={{ height: 70, width: '100%', background: '#182a3a' }}>
        <span className="logo">logo</span>
        <TopMenuComponent />
      </Header>
      <Layout>
        <Sider style={{ background: '#fff', width: 200 }}>
          <LeftNavComponent />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <p>意见反馈</p>
          <Content style={{ background: '#f4f5f7', padding: 24, margin: 0, minHeight: 280 }}>
            内容
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
