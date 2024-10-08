import { Col, Row, Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import PieChart from './pieChart';
import { useAppDispatch } from 'appRedux/store';
import { useSelector } from 'react-redux';
import { ReportSelector } from 'appRedux/reducers';
import {
  getCriticalityCount,
  getMaturityLevel,
  getReports,
  getWhitelistedCount
} from 'appRedux/actions/reportAction';
import BarChart from './barChart';
import { useLocation } from 'react-router-dom';

/**
 *
 * @returns {React.FC}
 */
const AppWhiteListing: React.FC = () => {
  const { search } = useLocation();

  const query = new URLSearchParams(search);
  const [loading, setLoading] = useState(false);
  const {
    criticalityCount,
    criticalityCountLoading,
    whitelistedCount,
    whitelistedCountLoading,
    reports,
    reportsLoading,
    maturityLevel,
    maturityLevelLoading
  } = useSelector(ReportSelector);
  const dispatch = useAppDispatch();
  const [id, setId] = useState<string | undefined>(() => {
    return query.get('id') || undefined;
  });

  const items =
    reports?.map((report) => {
      return {
        label: report.name,
        value: report._id
      };
    }) || [];

  /**
   * Format data for whitelisting and
   * criticality count
   */
  const criticalityData =
    criticalityCount?.map((data) => {
      return {
        type: data._id,
        value: data.count
      };
    }) || [];

  const whitelistData =
    whitelistedCount?.map((data) => {
      return {
        type: data._id,
        value: data.count
      };
    }) || [];

  const maturityData =
    maturityLevel?.map((data) => {
      return {
        label: `Level ${data._id}`,
        count: data.count
      };
    }) || [];

  /**
   * When Id is changed fetch new reports
   */
  useEffect(() => {
    (async () => {
      if (id) {
        setLoading(true);
        await dispatch(getCriticalityCount(id));
        await dispatch(getWhitelistedCount(id));
        await dispatch(getMaturityLevel(id));
        setLoading(false);
      }
    })();
  }, [id]);

  /**
   * If data does not exist and id exists then fetch
   * data for charts
   */
  useEffect(() => {
    if (id && !criticalityCount && criticalityCountLoading) {
      dispatch(getCriticalityCount(id));
    }
  }, [criticalityCount, criticalityCountLoading]);

  useEffect(() => {
    if (id && !whitelistedCount && whitelistedCountLoading) {
      dispatch(getWhitelistedCount(id));
    }
  }, [whitelistedCount, whitelistedCountLoading]);

  useEffect(() => {
    if (id && !maturityLevel && maturityLevelLoading) {
      dispatch(getMaturityLevel(id));
    }
  }, [maturityLevel, maturityLevelLoading]);

  useEffect(() => {
    if (!reports && reportsLoading) {
      dispatch(getReports());
    }
  }, [reports, reportsLoading]);
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Typography.Title level={5}>
            Report:{' '}
            <Select
              options={items}
              onChange={(val) => {
                setId(val);
              }}
              defaultValue={id}
              style={{ width: '250px' }}
            />
          </Typography.Title>
        </Col>
        <Col sm={24} md={24} lg={12} xl={12} xxl={12}>
          <PieChart
            data={whitelistData}
            title={'Application by whitelisting status'}
            color={['#0c5720', '#0c3a57']}
            loading={loading}
          />
        </Col>
        <Col sm={24} md={24} lg={12} xl={12} xxl={12}>
          <PieChart
            data={criticalityData}
            title={'Criticality Count'}
            color={['#94481c', '#570f0c', '#c4b331', '#316616']}
            loading={loading}
          />
        </Col>
        <Col sm={24} md={24} lg={12} xl={12} xxl={12}>
          <BarChart
            data={maturityData}
            title={'Maturity Level By App Count'}
            color={['#c4b331', '#316616', '#570f0c', '#94481c']}
            loading={loading}
          />
        </Col>
      </Row>
    </>
  );
};

export default AppWhiteListing;
