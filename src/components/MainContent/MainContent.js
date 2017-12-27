import React from 'react';
import { Row, Col } from 'antd';
import SearchBox from '../../components/SearchBox/SearchBox';
import ConfigBox from '../../components/ConfigBox/ConfigBox';
import ContentTab from '../../components/ContentTab/ContentTab';
import OutputBox from '../../components/OutputBox/OutputBox';
import FeedbackTable from '../../components/FeedbackTable/FeedbackTable';


function MainContent() {
  return (
    <div className="main-content">
      <Row gutter={16}>
        <Col span={19}>
          <SearchBox />
        </Col>
        <Col span={5}>
          <ConfigBox />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={19}>
          <ContentTab />
        </Col>
        <Col span={5}>
          <OutputBox />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <FeedbackTable />
        </Col>
      </Row>
    </div>
  );
}

export default MainContent;
