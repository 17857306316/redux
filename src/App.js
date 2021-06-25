import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from "react";
import './App.css';
import Page1 from "./page/page1";
import Page2 from "./page/page2";
import Page3 from "./page/page3";

export default function App(props) {
  console.log(props.store.getState());
  const { TabPane } = Tabs;
  const [key,setKey] = useState('1')

  return (
    <div className='content-padding' >
      <Tabs defaultActiveKey="1" onChange={(e)=>setKey(e)}>
        <TabPane tab="Tab 1" key="1">
          {key==='1'&&<Page1 store={props} />}
        </TabPane>
        <TabPane tab="Tab 2" key="2">
        {key==='2'&&<Page2 store={props} />}

        </TabPane>
        <TabPane tab="Tab 3" key="3">
        {key==='3'&&<Page3 store={props} />}

        </TabPane>
      </Tabs>
    </div>
  );
}





