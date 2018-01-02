import React from 'react';
import { Row, Col, Form, Button } from 'antd';
import { ContentWrap } from '../../styled/styled-components';

const FormItem = Form.Item;

function ConfigBox() {
  return (
    <ContentWrap center>
      <Form>
        <Row>
          <Col span={12} offset={6}>
            <FormItem>
              <Button type="primary" ghost style={{ fontSize: 12, padding: '0 27px', fontWeight: 400 }}>配置标签</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Form>
        <Row>
          <Col span={12} offset={6}>
            <FormItem>
              <Button type="primary" ghost style={{ fontSize: 12, fontWeight: 400 }}>配置快捷回复</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </ContentWrap>
  );
}

export default ConfigBox;
