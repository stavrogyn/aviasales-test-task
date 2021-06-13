import PageHeader from './Header'
import Main from './Main';

export default function App() {
  return (
      <div className="app-wrapper">
        <div className="app">
          <PageHeader />
          <Main />
        </div>
      </div>
  );
}