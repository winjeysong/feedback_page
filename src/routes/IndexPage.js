import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import TopMenuComponent from '../components/TopMenu/TopMenu';
// import DataRange from '../components/DateRange/DateRange';
import '../styled/menu.less';

const { Header, Content } = Layout;

function IndexPage({ location }) {
  return (
    <Layout>
      <Header className="header" style={{ height: 70, width: '100%', background: '#182a3a' }}>
        <span className="logo">logo</span>
        <TopMenuComponent location={location} />
      </Header>
      <Layout style={{ background: '#f4f5f7', padding: '56px 26px 100px 26px' }}>
        <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
          <h1>这是主页</h1>
        </Content>
      </Layout>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
