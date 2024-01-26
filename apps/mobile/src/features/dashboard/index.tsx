import { FetchStatusRenderer } from '@components/shared';
import { Flex } from '@components/mobile';
import React from 'react';

const Dashboard = () => {
  return (
    <FetchStatusRenderer>
      <Flex>Mobile Dashboard</Flex>
    </FetchStatusRenderer>
  );
};

export default Dashboard;
