/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Grid } from 'react-bootstrap';
import ReactTable from 'react-table';
import Table from '../../../components/Table';
import Headerbar from '../../../components/Headerbar';
import Loader from '../../../components/Loader';

const User = () => {

  const [rtl, setRtl] = useState();

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userListState.userList && state.userListState.userList.data);
  const isLoadingStatus = useSelector((state) => state.userListState.isLoading);
  const isLoadingList = useSelector((state) => state.userListState.isLoading);

  useEffect(() => {
    dispatch({ type: 'USER_LIST_REQUEST' });
  }, [])

  userList && userList.map((info, i) => {
    info.id = i + 1
  })

  const onRtl = (rtl) => {
    setRtl(rtl)
  }

  return (
    <div className={`wrapper ${rtl ? 'rtl' : ''}`}>
      <div className="rightside-panel">
        <Headerbar headerName="UserDetail" setRtlCallback={onRtl} />
        <div className="main-content">
          <Grid fluid>
            {(isLoadingList || isLoadingStatus) && <Loader />}
            <Row>
              <Table
                content={
                  <ReactTable
                    data={userList}
                    filterable
                    columns={[
                      {
                        Header: '#',
                        accessor: 'id',
                        filterable: false,
                        sortable: false,
                        width: 50,
                      },
                      {
                        Header: 'Transaction Id',
                        accessor: 'userId',
                        width: 250,
                      },
                      {
                        Header: 'E-Mail',
                        accessor: 'email',
                        width: 250,
                      },
                      {
                        Header: 'First Name',
                        accessor: 'firstName',
                        width: 200,
                      },
                      {
                        Header: 'Last Name',
                        accessor: 'lastName',
                        width: 200,
                      },
                      {
                        Header: 'Country Name',
                        accessor: 'countryName',
                        width: 150,
                      },

                      {
                        Header: 'City Name',
                        accessor: 'cityName',
                        width: 150,
                      },
                    ]}
                    defaultPageSize={10}
                    showPaginationBottom
                    className="-striped -highlight"
                  />
                }
              />
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default User;
