import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendInitialRequest } from '../state/actions/search.actions'
import PageHeader from './Header'
import Content from './Content';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendInitialRequest())
  });

  return (
      <div className="app-wrapper">
        <div className="app">
          <PageHeader />
          <Content />
        </div>
      </div>
  );
}