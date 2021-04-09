import logo from './logo.svg';
import './App.css';
import Charts from './components/charts';
import StackedBar from './components/Stackbar';
import GroupedBar from './components/GroupChart';
import ProgramReport from './components/ProgramReport';
import SamplePdfReport from './components/SamplePDFReport';

function App() {
  return (
    <div className="App">
      {/* <Charts/> */}
      {/* <StackedBar/> */}
      <GroupedBar/>
      {/* <ProgramReport/> */}
      {/* <SamplePdfReport/> */}
    </div>
  );
}

export default App;
