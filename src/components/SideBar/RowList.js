/* eslint-disable */
import { faCog, faHome, faUser, faUsers, faBuilding, faTasks, faFolderPlus, faUserTag, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const rowlist = [
  {
    id: 0, label: 'Dashboard', icon: faHome, address: 'dashboard',
  },
  {
    id: 1, label: 'Thrift Store', icon: faNetworkWired, address: 'thriftstore',
  },
  {
    id: 2, label: 'Add Product', icon: faUser, address: 'addproduct',
  },
  {
    id: 3, label: 'Product List', icon: faBuilding, address: 'productlist',
  },
  {
    id: 4, label: 'Customer Review', icon: faUsers, address: 'customerreview',
  },
  {
    id: 5, label: 'Report', icon: faCog, address: 'report',
  },
  {
    id: 6, label: 'Support', icon: faTasks, address: 'support',
  },
  {
    id: 7, label: 'About Restaurant', icon: faFolderPlus, address: 'aboutrestaurant',
  },
  {
    id: 8, label: 'General Info', icon: faUserTag, address: 'generalinfo',
  },
  // {
  //   id: 9, label: 'Task', icon: faUserTag, address: 'createtask',
  // },
];

export default rowlist;
